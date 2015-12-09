angular.module('LLNMaps')
    .factory('routing', function ($http, $rootScope) {

        function initializeRouteControl() {

            if (graphhopperActive) {
                $rootScope.routeControl = L.Routing.control({
                    router: new L.Routing.GraphHopper(graphhopperKey,{urlParameters: {vehicle: 'foot'}}),
                    fitSelectedRoutes: false
                });
            } else {
                $rootScope.routeControl = L.Routing.control({
                    router: new L.Routing.osrm({
                        serviceUrl: $rootScope.server,
                        timeout: 5000
                    }),
                    fitSelectedRoutes: false
                });
            }


            $rootScope.routeControl.options.waypointMode = "connect";
            $rootScope.routeControl.getPlan().options.createMarker = function (i, wp) {
                if (i == 0) {
                    if (wp.latLng != $rootScope.lastLocation) {
                        user.setLatLng(wp.latLng).update();
                    }
                }
            };

            $rootScope.routeControl.addTo($rootScope.map);
            $rootScope.routeControl.hide();
        }

        function initializeRouteCalc() {

            if (graphhopperActive) {
                $rootScope.routeCalc = L.Routing.control({
                    router: new L.Routing.GraphHopper(graphhopperKey,{urlParameters: {vehicle: 'foot'}})
                });
            } else {
                $rootScope.routeCalc = L.Routing.control({
                    router: new L.Routing.osrm({
                        serviceUrl: $rootScope.server,
                        timeout: 5000
                    })
                });
            }

            $rootScope.routeCalc.on("routesfound", function (e) {
                estimatedTime = e.routes[0].summary.totalTime;
                var min = Math.floor(estimatedTime / 60);
                var sec = Math.floor(estimatedTime % 60);
                $rootScope.time = " " + min + " min " + sec + " sec";
                console.log($rootScope.time);
                document.getElementById("time").innerHTML = "<i style='font-size:20px;color: #0c63ee !important;' class='ion-android-walk'></i> " + $rootScope.time;
            });
        }



        return {
            initialize: function () {
                $http.get(priorURLServer, {
                        timeout: 1000
                    })
                    .success(function () {
                        $rootScope.server = priorURLServer;
                    })
                    .error(function () {
                        $rootScope.server = defaultURLServer;
                    });
            },
            getTime: function () {
                initializeRouteCalc();
            },

            getRoute: function () {
                initializeRouteControl();
            },

            distanceBetween: function (wp1, wp2, time1, time2) {
                var distance = wp1.distanceTo(wp2);
                var sec = (time2 - time1) / 1000;

                return (distance / sec < 5);

            }
        }
    });