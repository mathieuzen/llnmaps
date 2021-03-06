angular.module('LLNMaps.map', ['ionic'])

.controller('MapCtrl', function ($scope, $http, $rootScope, $stateParams, $location, $ionicLoading, $ionicPopup, $ionicPlatform, $ionicActionSheet, $cordovaDeviceOrientation, $timeout, $ionicModal, compute, routing, geolocation, $translate, $ionicAnalytics, $cordovaSplashscreen) {

    //markers for buildings
    $rootScope.markers = new Array();

    //store lastLocation and lastTimestamp for accuracy
    var lastLocation;
    var lastTimestamp;

    //rotation direction
    var dir = 0;
    $rootScope.rot = 0;

    //to compute estimated time and show into buildings popup
    var estimatedTime;
    var newPin = false;
    var watchIdLocation;
    var urlServer;
    var compass;
    var lastLocationForBearing;

    $scope.labels = [];

    $rootScope.go = 0;

    //focus on user
    $scope.userFocus = false;
    $scope.areasHidden;

    $rootScope.polyline = L.polyline([], {
        color: 'green',
        opacity: '0.2'
    });

    $rootScope.gpsAlertShowed = false;

    $rootScope.skip = function () {
        $ionicLoading.hide();
    }

    $rootScope.focus = function () {
        centerOn(user);
        $scope.userFocus = true;
        $scope.marker.closePopup();
    };

    $scope.releaseFocus = function () {
        $scope.userFocus = false;
    };

    $rootScope.plotCustoms = function () {
        for (i in $rootScope.customPins) {
            $scope.marker = plotMarker("custom", $rootScope.customPins[i].id, $rootScope.customPins[i].pos, $rootScope.customPins[i].name, $rootScope.customPins[i].address);
            var n = $rootScope.markers.length + parseInt(i);
            $rootScope.markers[n] = $scope.marker;
        }
    }

    $rootScope.geo = function () {
        if (!$rootScope.gpsActive) {
            getLocation();
        }
    }

    $rootScope.test = function () {
        alert("test");
    };


    $rootScope.getWebFrameSrc = function () {
        return "http://www.tourisme-olln.be/" + $translate.use() + "/qr-fiche.html?cmp_id=60&news_id=" + $rootScope.infoId;
    };


    function getMap() {
        $rootScope.map = L.map('map', {
            zoomControl: false,
            //hide attributions to prevent not intent event
            attributionControl: false,
            fadeAnimation: true,
            zoomAnimation: true,
            markerZoomAnimation: true
        }).setView(station.getLatLng(), 14);

        L.tileLayer('img/tiles/{z}/{x}/{y}.jpg', {
            attribution: '<span>&copy; <a href="http://osm.org/copyright">OpenStreetMap</a></span>',
            maxZoom: 18,
            minZoom: 13,
            unloadInvisibleTiles: false,
        }).addTo($rootScope.map);


        $rootScope.map.setMaxBounds(new L.LatLngBounds(northWestBound, southEastBound));

        $rootScope.map.on('popupopen', function (e) {
            $rootScope.map.setZoomAround(e.popup._latlng, 17);
            $timeout(function () {
                var px = $rootScope.map.project(e.popup._latlng); // find the pixel location on the 
                px.y -= e.popup._container.clientHeight / 2 // find the height of the 
                $rootScope.map.panTo($rootScope.map.unproject(px), {
                    animate: true
                }); // pan to new center
            }, 500);
        });

        $rootScope.map.doubleClickZoom.disable();

        $rootScope.map.on('dblclick', function (e) {
            if (newPin) {
                $rootScope.newPin(e.latlng);
                console.log("new pin at " + e.latlng);
                newPin = false;
            }
        });

        $rootScope.map.on('dragstart', function (e) {
            $scope.releaseFocus();
        });

        $rootScope.map.on('zoomend', function (e) {
            if (!$rootScope.directionsServiceActive) {
                if ($rootScope.map.getZoom() <= 14) {
                    $rootScope.hideAllMarkers();
                    $rootScope.showAreas();
                } else {
                    $rootScope.showAllMarkers();
                    $rootScope.hideAreas();
                }
            }
            if (!$rootScope.directionsServiceActive) {
                if ($rootScope.map.getZoom() <= 16) {
                    $rootScope.showAreas();
                } else {
                    $rootScope.hideAreas();
                }
            }


            for (label in $scope.labels) {
                if ($rootScope.map.getZoom() < 14 || $rootScope.map.getZoom() >= 16)
                    $scope.map.removeLayer($scope.labels[label]);
                else
                    $scope.map.addLayer($scope.labels[label]);
            }
            $timeout(function () {
                $rootScope.map.fireEvent('click');
            }, 50, true);
        });

        $rootScope.hideAreas = function () {
            $rootScope.map.eachLayer(function (layer) {
                if (layer.options.type === "area") {
                    $rootScope.map.removeLayer(layer);
                    $scope.areasHidden = true;
                }
            });
        }

        $rootScope.showAreas = function () {
            if ($scope.areasHidden)
                $scope.plotArea();
        }

        $rootScope.map.addLayer($rootScope.polyline);

        $scope.plotArea();

        $rootScope.map.whenReady(function () {
            if (navigator.splashscreen) {
                $timeout(function () {
                    navigator.splashscreen.hide();
                }, 10000);
            }
        });
    }

    $rootScope.pinClick = function () {
        // A confirm dialog
        $scope.showConfirm = function () {
            var confirmPopup = $ionicPopup.confirm({
                title: $translate.instant('customPinTitle'),
                template: $translate.instant('customPinDialog')
            });
            confirmPopup.then(function (res) {
                if (res) {
                    newPin = true;
                } else {
                    newPin = false;
                }
            });
        };
        $scope.showConfirm();
    }

    $rootScope.resetMap = function () {
        i = 0;
        $rootScope.map.eachLayer(function (layer) {
            i++;
            if (i > 1) {
                $rootScope.map.removeLayer(layer);
            }
        });

        plotBuildings();

        plotUser($rootScope.userPosition);
        centerOn(user);

        $rootScope.directionsServiceActive = false;

        $rootScope.polyline.setLatLngs([]);
        $rootScope.map.addLayer($rootScope.polyline);

        $scope.plotArea();

        $rootScope.go = 0;
        $rootScope.id = "GLOBAL";
        location = "#/tab/map/";
    }

    $rootScope.newPin = function (pos) {
        if (pos == undefined) {
            pos = $rootScope.userPosition;
        }
        $rootScope.customPos = pos;
        $rootScope.openModal();
    }

    $rootScope.savePin = function () {
        var customId = $rootScope.custom.id;
        var customName = $rootScope.custom.name;
        var customPos = $rootScope.customPos;
        var customAddress = $rootScope.custom.address;
        $rootScope.customPins.push({
            id: customId,
            name: customName,
            pos: customPos,
            address: customAddress
        });
        localforage.setItem("customPins", $rootScope.customPins);
        plotMarker("custom", customId, customPos, customName, customAddress);
        $ionicAnalytics.track('newPin', {
            id: customName,
            lat: customPos.lat,
            lng: customPos.lng
        });
        $scope.closeModal();
        $rootScope.resetMap();
    }

    L.AwesomeMarkers.Icon.prototype.options.prefix = 'ion';

    function plotMarker(type, id, position, name, address, info) {

        var iconMarker = markers[type];
        if (type == "streets") {
            $scope.marker = L.marker(position, {
                icon: iconMarker
            }).addTo($rootScope.map);
        } else {
            $scope.marker = L.marker(position, {
                icon: iconMarker,
                riseOnHover: true
            }).addTo($rootScope.map);
        }

        var button = document.createElement("button");
        button.id = "btnGo";
        button.className = "button button-block button-positive";
        button.innerHTML = "Go";
        button.onclick = function () {
            $scope.marker.closePopup();
            $rootScope.hideAllMarkers();
            getDirections($scope.marker);
        }

        spanTime = document.createElement("span");
        spanTime.className = "button button-outline button-positive button-small time-full";
        spanTime.id = "time";
        spanTime.innerHTML = "<i style='font-size:20px;color: #0c63ee !important;' class='ion-android-walk'></i> ";


        var div = document.createElement("div");

        if (type == "custom") {
            div.innerHTML = '<p>' + id + '</p>' + findImage("UNDEFINED") +
                '<p style="word-wrap: break-word;">' + name + '</p>' +
                '<p>' + address + '</p>';
        } else if (type == "streets") {
            div.innerHTML = '<p style="width: 80px; text-align:left; word-wrap: break-word;">' + id + '</p>';
        } else {
            div.innerHTML = '<p class="popupID">' + id + '</p>' + findImage(id) +
                '<p style="word-wrap: break-word;">' + name + '</p>' +
                '<p>' + address + '</p>';
        }
        div.appendChild(spanTime);

        if (typeof info != 'undefined') {
            spanTime.className = "button button-outline button-positive button-small time";
            infoNode = document.createElement("a");
            infoNode.className = "button button-positive button-small infoButton";
            infoNode.innerHTML = "<i style='font-size:20px;'class='icon-ion-inforville'></i> " + $translate.instant('moreInfo');
            infoNode.onclick = function () {
                if (navigator.onLine) {
                    $ionicAnalytics.track('moreInfo', {
                        id: $rootScope.id
                    });
                    $rootScope.infoId = info;
                    $rootScope.openWebFrame();
                } else {
                    $ionicPopup.alert({
                        title: $translate.instant('noConnectionTitle'),
                        subTitle: $translate.instant('noConnectionDialog')
                    });
                }
            };
            div.appendChild(infoNode);
        }

        div.appendChild(button);

        var popup = new L.popup({
            className: "custom-popup popup-" + type,
            keepInView: false
        });
        popup.setContent(div);

        $scope.marker.bindPopup(popup, {
            keepInView: false
        });

        $scope.marker.on('click', function () {
            this.openPopup();
            location = "#/tab/map/" + id + "/0";
            $scope.userFocus = false;
        });

        $scope.marker.on('popupopen', function () {
            $rootScope.id = this.id;
            getDirectionsInformation(this, time);
        });

        $scope.marker.id = id;

        $scope.marker._icon.className += " marker";
        $scope.marker._shadow.className += " marker";


        return $scope.marker;
    }

    function findImage(id) {
        url = "img/buildings/" + id + ".jpg";
        if (true) {
            src = "'img/buildings/" + id + ".jpg'";
            return "<img style='width:200px;' src=" + src + "/>"
        } else {
            return "<img style='width:200px;' src='img/buildings/UNDEFINED.jpg'/>"
        }
    }

    function plotUser(position) {
        user = new L.Marker(position).setIcon(userIcon).addTo($rootScope.map);
    }

    $scope.plotArea = function () {
        for (a in areas) {
            var area = areas[a];
            areaPolygon = new L.polygon(area.coordinates, {
                color: area.color,
                stroke: false,
                fillOpacity: 0.1,
                clickable: true,
                type: "area"
            });
            areaPolygon.on("click", function (e) {
                abstractPolygon = new L.polygon(this._latlngs);
                if ($rootScope.map.getZoom() <= 15) {
                    $rootScope.map.setView(abstractPolygon.getBounds().getCenter(), 15);
                }
            });
            label = new L.Label({
                clickable: true,
                noHide: true
            });
            label.area = areaPolygon;
            label.on("click", function (e) {
                this.area.fireEvent("click");
            });
            label.setContent(area.id);
            label.setLatLng(areaPolygon.getBounds().getCenter());
            $rootScope.map.addLayer(areaPolygon);
            if ($scope.labels.length < 5) {
                $rootScope.map.showLabel(label);
                label.setOpacity(0.7);
                $scope.labels.push(label);
            }
        }
        $scope.areasHidden = false;
    }

    function centerOn(marker) {
        var posToMove = [marker.getLatLng().lat, marker.getLatLng().lng];
        if (isInLLN(posToMove)) {
            $rootScope.map.panTo(marker.getLatLng(), {
                animate: true
            });
        } else {
            $ionicLoading.hide();
            $ionicAnalytics.track('outOfLLN', {
                pos: posToMove
            });
            $ionicPopup.alert({
                title: $translate.instant('outOfLLNTitle'),
                subTitle: $translate.instant('outOfLLNDialog')
            });
        }
    }

    function centerOnPopup(popup) {
        $rootScope.map.panTo(popup.getLatLng(), {
            animate: true
        });

    }

    function getLocation() {
        geolocation.position().then(function (position) {
                var latLngPosition = L.latLng(position.coords.latitude, position.coords.longitude);
                plotUser(latLngPosition);
                watchPosition();
                if (isInLLN([position.coords.latitude, position.coords.longitude])) {
                    centerOn(user);
                    $rootScope.userPosition = latLngPosition;
                    lastLocationForBearing = $rootScope.userPosition;
                } else {
                    $ionicAnalytics.track('outOfLLN', {
                        pos: position
                    });
                    $ionicPopup.alert({
                        title: $translate.instant('outOfLLNTitle'),
                        subTitle: $translate.instant('outOfLLNDialog')
                    });
                    centerOn(station);
                }
            },
            function (reason) {
                $rootScope.gpsActive = false;
                handleNoGeolocation(true);
            });
    }


    function handleNoGeolocation(errorFlag) {
        if (errorFlag == true) {
            if ($rootScope.gpsAlertShowed == false) {
                $rootScope.gpsAlertShowed = true;
                $ionicPopup.alert({
                    title: $translate.instant('noGPSTitle'),
                    subTitle: $translate.instant('noGPSDialog'),
                    template: '<img style="margin: auto; text-align: center; display: block; width: 60px;" src="img/crossedIcon.png"/>'
                });
            }
            $ionicLoading.hide();
            getLocation();
        } else {
            $ionicPopup.alert({
                title: $translate.instant('gpsNotSupportedTitle'),
                subTitle: $translate.instant('gpsNotSupportedDialog')
            });
            $ionicLoading.hide();

        }
    }

    function watchPosition() {

        var watchOptions = {
            maximumAge: Infinity,
            timeout: 5000,
            enableHighAccuracy: true
        };

        watchIdLocation = navigator.geolocation.watchPosition(
            function (position) {
                $rootScope.accuracy = Math.round(position.coords.accuracy);
                $scope.$apply();
                colorizeGPSIcon($rootScope.accuracy);
                if (position.coords.accuracy < 20) {
                    var latlng = new L.latLng(position.coords.latitude, position.coords.longitude);
                    $rootScope.userPosition = latlng;
                    $rootScope.gpsActive = true;
                    if ($rootScope.directionsServiceActive) {
                        user.setLatLng(L.latLng(position.coords.latitude, position.coords.longitude));
                        var wp = new L.Routing.Waypoint(latlng);
                        $rootScope.routeControl.setWaypoints([latlng, $scope.activeMarker.getLatLng()]);
                        drawLine();
                        if ($scope.userFocus)
                            centerOn(user);
                    } else {
                        user.setLatLng(L.latLng(position.coords.latitude, position.coords.longitude));
                        if ($scope.userFocus)
                            centerOn(user);
                    }
                }
            },
            function (err) {
                $rootScope.gpsActive = false;
            }, watchOptions);

        watchCompass();

    }

    function watchCompass() {
        setTimeout(function () {

            if (navigator.compass != undefined) {
                if (ionic.Platform.isAndroid()) {
                    var watchIdCompass = navigator.compass.watchHeading(function (heading) {
                            compass = (heading.magneticHeading == 0);
                            if (compute.distance(lastLocationForBearing, $rootScope.userPosition) > 3) {
                                if (compass) {
                                    dir = compute.bearing(lastLocationForBearing, $rootScope.userPosition);
                                    lastLocationForBearing = $rootScope.userPosition;
                                } else {
                                    dir = heading.magneticHeading;
                                }
                                $rootScope.dir = dir;
                                rotate($rootScope.dir);
                            }
                        },
                        function () {}, {
                            frequency: 1000
                        });
                } else {
                    compass = false;
                }
            }
            if (ionic.Platform.isIOS()) {
                var watchIdCompass = navigator.compass.watchHeading(function (heading) {
                    $rootScope.dir = heading.magneticHeading;
                    rotate($rootScope.dir);
                }, function () {}, {
                    frequency: 1000
                });
            }
        }, 8000);

        /*        setInterval(function () {
                    rotate($rootScope.dir);
                }, 500);*/
    }

    function isInLLN(position) {
        return position[0] > southEastBound[0] && position[0] < northWestBound[0] && position[1] > northWestBound[1] && position[1] < southEastBound[1];
    }

    //plot markers for each building in locations.js array
    function plotBuildings() {
        var k = 0;
        var j = 0;
        for (var i in categories) {
            for (var j in locations[i]) {
                k = k + 1;
                $rootScope.markers[k] = plotMarker(categories[i], locations[i][j].id, locations[i][j].pos, locations[i][j].name, locations[i][j].address, locations[i][j].infoId);
            }
        }
        $rootScope.plotCustoms();
    }

    //array of categories order must correspond with locations.js array
    var categories = ["audit", "customPins", "entertainment", "inforville", "shops", /* "places24",*/ "transport"];

    $rootScope.showAllMarkers = function () {
        if ($rootScope.markersHidden)
            $rootScope.markersHidden = false;
    };

    $rootScope.hideAllMarkers = function () {
        if (!$rootScope.markersHidden)
            $rootScope.markersHidden = true;
    };


    function colorizeGPSIcon(accuracy) {
        if (accuracy > 28)
            $rootScope.accuracyColor = "badAccuracy";
        else if (accuracy > 10)
            $rootScope.accuracyColor = "mediumAccuracy";
        else
            $rootScope.accuracyColor = "goodAccuracy";
    }

    function getDirections(marker) {
        if (!$rootScope.directionsServiceActive) {
            routing.getRoute();
        }
        if (isInLLN([$rootScope.userPosition.lat, $rootScope.userPosition.lng])) {
            $rootScope.directionsServiceActive = true;
            drawLine();
            $rootScope.activeMarker = marker;
            clearWayPoints();
            $rootScope.routeControl.setWaypoints([user.getLatLng(), $scope.activeMarker.getLatLng()]);
            $rootScope.go = 1;
            $rootScope.goId = $rootScope.activeMarker.id;
            fitMap();
            $rootScope.lastLocation = user.getLatLng();
        } else {
            $ionicPopup.alert({
                title: $translate.instant('unableToGetDirectionsTitle'),
                subTitle: $translate.instant('outOfLLNTitle')
            });

        }
    }

    function fitMap() {
        $rootScope.map.fitBounds([
            [$rootScope.userPosition.lat, $rootScope.userPosition.lng],
            [$rootScope.activeMarker._latlng.lat, $rootScope.activeMarker._latlng.lng]
        ]);
    }

    function clearWayPoints() {
        $rootScope.routeControl.spliceWaypoints(0, 2);
    }

    function clearLine() {
        $rootScope.polyline.setLatLngs([]);
    }

    function drawLine() {
        var latlngs = [$rootScope.userPosition, $scope.marker.getLatLng()];
        $rootScope.polyline.setLatLngs(latlngs);
    }

    function drawDirectionLine() {
        var latlngs = [user.getLatLng(), lastLocationForBearing];
        var p = L.polyline([], {
            color: 'blue',
            opacity: '0.2'
        }).addTo($rootScope.map);

        p.setLatLngs(latlngs);
    }


    function getDirectionsInformation(marker, time) {
        if (isInLLN([$rootScope.userPosition.lat, $rootScope.userPosition.lng])) {
            routing.getTime();
            if (user != undefined && marker != undefined) {
                $rootScope.routeCalc.setWaypoints([user.getLatLng(), marker.getLatLng()]);
            }
        }
    }

    function rotate(heading) {
        var arrowImg = document.querySelector(".user-icon img");
        var aR;
        $rootScope.rot = $rootScope.rot || 0; // if rot undefined or 0, make 0, else rot
        aR = $rootScope.rot % 360;
        if (aR < 0) {
            aR += 360;
        }
        if (aR < 180 && (heading > (aR + 180))) {
            $rootScope.rot -= 360;
        }
        if (aR >= 180 && (heading <= (aR - 180))) {
            $rootScope.rot += 360;
        }
        $rootScope.rot += (heading - aR);
        arrowImg.style.WebkitTransform = 'rotate(' + $rootScope.rot + 'deg)';
        arrowImg.style.transform = 'rotate(' + $rootScope.rot + 'deg)';
    };


    function onDeviceReady() {

        if (ionic.Platform.isAndroid()) {
            if (!isIonicView())
                window.plugins.insomnia.keepAwake();
        }

        if (ionic.Platform.isIOS()) {
            var style = document.createElement('style');
            style.type = 'text/css';
            style.innerHTML = '.leaflet-popup-content-wrapper{ -webkit-transform: scale(0.9,0.9) translateY(20px);  } .custom-popup .leaflet-popup-close-button {-webkit-transform: scale(0.9,0.9) translateY(32px) translateX(-10px); z-index:99; }';
            document.getElementsByTagName('head')[0].appendChild(style)
        }

        if (navigator.geolocation) {
            getLocation();
        } else {
            // Browser doesn't support Geolocation
            handleNoGeolocation(false);
        }

        getMap();

        plotBuildings();

        $rootScope.hideAllMarkers();

        routing.initialize();
    }

    function isIonicView() {
        return window.location.href.indexOf("com.ionic.viewapp") > -1;
    }

    if (navigator.userAgent.match(/(Android|BlackBerry)/)) {
        document.addEventListener("deviceready", onDeviceReady, false);
    } else {
        onDeviceReady();
    }

    $scope.location = $location;
    $scope.$watch('location.path()', function (path) {
        id = path.split("/")[3];
        $rootScope.id = id;
        $ionicAnalytics.track('activeMarker', {
            id: id
        });
        go = path.split("/")[4];
        for (i in $rootScope.markers) {
            $scope.marker = $rootScope.markers[i];
            if (id == $scope.marker.id) {
                $rootScope.activeMarker = $scope.marker;
                break;
            } else {
                $scope.marker = null;
            }
            if ($rootScope.markers[i]._icon.innerHTML.indexOf("walk") > -1) {
                $rootScope.markers[i]._icon.style.display = "none";
                $rootScope.markers[i]._shadow.style.display = "none";
            }
        }
        for (i in streetList) {
            if (id == streetList[i].id) {
                $scope.marker = plotMarker("streets", streetList[i].id, L.latLng(streetList[i].lat, streetList[i].long), streetList[i].name, streetList[i].address);
                var n = $rootScope.markers.length + parseInt(i);
                $rootScope.markers[n] = $scope.marker;
            }
        }
        if (go == 1) {
            $rootScope.activeMarker.closePopup();
            routing.getRoute();
            setTimeout(function () {
                getDirections($rootScope.activeMarker);
            }, 500);
        } else {
            if (id != "GLOBAL" && id != "undefined") {
                setTimeout(function () {
                    $scope.marker.openPopup();
                    getDirectionsInformation($rootScope.activeMarker, time);
                }, 500);
            }
        }

    }, true);

});