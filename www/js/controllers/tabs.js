angular.module('LLNMaps.tabs', ['ionic'])

.controller('TabsCtrl', function ($scope, $rootScope, $ionicPopup, $location, $translate) {

    $rootScope.map = true;
    $rootScope.compass = false;
    $scope.tabTransition = "slide-right-left";

    $scope.toMap = function () {
        if ($rootScope.go === 1) {
            location = "#/tab/map/" + $rootScope.goId + "/1";
            $rootScope.map = true;
            $rootScope.compass = false;
        } else {
            location = "#/tab/map/" + $rootScope.id + "/0";
        }
        $scope.tabTransition = "slide-right-left";

    };
    
    $scope.toCompass = function () {
        if ($rootScope.go === 1) {
            location = "#/tab/compass/" + $rootScope.goId;
            $rootScope.map = false;
            $rootScope.compass = true;

        } else {
            $ionicPopup.alert({
                title: $translate.instant('compassUnavailableTitle'),
                subTitle: $translate.instant('compassUnavailableDialog')
            });
            location = "#/tab/map/" + $rootScope.id;
        }
        $scope.tabTransition = "slide-left-right";
    };

});