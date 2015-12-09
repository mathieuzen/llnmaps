app.directive("building", function ($rootScope, $ionicSideMenuDelegate, $ionicAnalytics) {
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
                    if (m._icon.innerHTML.indexOf(icon) > -1 && m != $rootScope.activeMarker) {
                        m._icon.style.display = "none";
                        m._shadow.style.display = "none";
                    }
                }
                scope.markersVisible = false;

            }
            scope.showMarkers = function (e, icon) {
                e.stopPropagation();
                for (marker in $rootScope.markers) {
                    m = $rootScope.markers[marker];
                    if (m._icon.innerHTML.indexOf(icon) > -1) {
                        m._icon.style.display = "";
                        m._shadow.style.display = "";
                    }
                }
                scope.markersVisible = true;
            }
            $rootScope.$watch('markersHidden', function () {
                if ($rootScope.markersHidden)
                    scope.hideMarkers(new Event(""), scope.icon);
                else
                    scope.showMarkers(new Event(""), scope.icon);

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