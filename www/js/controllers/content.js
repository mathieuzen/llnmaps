angular.module('LLNMaps.content', ['ionic'])

.controller('ContentController', function ($scope, $rootScope, $ionicSideMenuDelegate, $ionicPlatform, $ionicPopup, $cordovaToast, $translate) {

    var backButtonPressed = false;

    $scope.changeSearchIcon = function () {
        return $ionicSideMenuDelegate.isOpen() ? 'ion-arrow-left-b' : 'ion-android-search';
    };

    $ionicPlatform.registerBackButtonAction(function () {
        if (!backButtonPressed) {
            $scope.showExitToast();
        } else {
            window.close();
            ionic.Platform.exitApp();
        }
    }, 100);
    
    $rootScope.switchLanguage = function(){
        $rootScope.activeLanguage = $rootScope.activeLanguage === "EN" ? "FR" : "EN";
        $translate.use($rootScope.activeLanguage.toLowerCase());
    };

    $scope.showAudit = true;
    $scope.showOther = true;

    $rootScope.version = version;

    $scope.showExitToast = function () {
        $cordovaToast.showLongBottom($translate.instant('toastExitMsg'));
        backButtonPressed = true;
        setTimeout(function () {
            backButtonPressed = false;
        }, 3500);
    };
});