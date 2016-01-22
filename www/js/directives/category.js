app.directive("building", function ($rootScope, $ionicSideMenuDelegate, $ionicAnalytics, $timeout) {
    return {
        restrict: "E",
        scope: {
            type: "=",
            title: "@",
            color: "@",
            icon: "@"
        },
        templateUrl: 'templates/category.html',
        link: function (scope, element, attrs) {
            scope.buildings = scope.type;
            scope.markersVisible = true;
            scope.showBuilding = false,
                scope.resetMenu = function () {
                    scope.showBuilding = false;
                };
            scope.showHideBuilding = function () {
                if (scope.showBuilding) {
                    scope.showBuilding = false;
                } else {
                    scope.showBuilding = true;
                    $ionicAnalytics.track('Category', {
                        id: scope.title
                    });
                }
            }
            scope.hideMarkers = function (e, icon) {
                e.stopPropagation();
                for (marker in $rootScope.markers) {
                        m = $rootScope.markers[marker];
                        if (m != $rootScope.activeMarker) {
                        if (m._icon.innerHTML.indexOf(icon) > -1 && m != $rootScope.activeMarker) {
                            m._icon.style.display = "none";
                            m._shadow.style.display = "none";
                        }
                    }
                }
                scope.markersVisible = false;

            }
            scope.showMarkers = function (e, icon) {
                e.stopPropagation();
                for (marker in $rootScope.markers) {
                    m = $rootScope.markers[marker];
                    if (m != $rootScope.activeMarker) {
                        if (m._icon.innerHTML.indexOf(icon) > -1) {
                            m._icon.style.display = "";
                            m._shadow.style.display = "";
                        }
                    }
                }
                scope.markersVisible = true;
            }

            scope.fadeMarkers = function (e, icon, opacity) {
                e.stopPropagation();
                for (marker in $rootScope.markers) {
                    m = $rootScope.markers[marker];
                    if (m != $rootScope.activeMarker) {
                        if (m._icon.innerHTML.indexOf(icon) > -1) {
                            m._icon.style.opacity = opacity;
                            m._shadow.style.opacity = opacity;
                        }
                    }
                }
                scope.markersVisible = true;
            }
            $rootScope.$watch('markersHidden', function () {
                if ($rootScope.markersHidden) {
                    scope.fadeMarkers(new Event(""), scope.icon, 0);
                    $timeout(function () {
                        scope.hideMarkers(new Event(""), scope.icon);
                    }, 1000);
                } else {
                    scope.showMarkers(new Event(""), scope.icon);
                    $timeout(function () {
                        scope.fadeMarkers(new Event(""), scope.icon, 1);
                    }, 50);
                }
            });
        }
    }
})

app.directive("street", function ($rootScope) {
    return {
        restrict: "E",
        scope: {
            type: "=",
            title: "@",
            color: "@",
            icon: "@"
        },
        templateUrl: 'templates/street.html',
        link: function (scope, element, attrs) {
            scope.buildings = scope.type;
            scope.markersVisible = true;
            scope.showBuilding = false,
                scope.showHideBuilding = function () {
                    if (scope.showBuilding) {
                        scope.showBuilding = false;
                    } else {
                        scope.showBuilding = true;
                    }
                }
        }
    }
});