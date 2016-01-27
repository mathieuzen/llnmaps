var app = angular.module('LLNMaps', ['ngCordova', 'ionic', 'ionic.service.core', 'ionic.service.analytics', 'LLNMaps.map', 'LLNMaps.compass', 'LLNMaps.content', 'LLNMaps.tabs', 'LLNMaps.search', 'LLNMaps.modals', 'LLNMaps.delete', 'pascalprecht.translate'])

.run(function ($ionicPlatform, $translate, $ionicAnalytics, $rootScope, $timeout) {
    $ionicPlatform.ready(function () {
        $rootScope.activeLanguage = "EN";
        $ionicAnalytics.register({
            //comment this in order to get analytics
            dryRun: true
        });
        var md = new MobileDetect(window.navigator.userAgent);
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }

        if (md.tablet() || md.phone()) {
            if (md.tablet() != null) {
                screen.lockOrientation("landscape");
            } else {
                screen.lockOrientation("portrait");
            }
        }

        if (typeof navigator.globalization !== "undefined") {
            navigator.globalization.getPreferredLanguage(function (language) {
                $translate.use((language.value).split("-")[0]).then(function (data) {
                    $rootScope.activeLanguage = data.toUpperCase();
                    $ionicAnalytics.track('language', {
                        id: data
                    });
                }, function (error) {});
            }, null);
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js

    $stateProvider
    // setup an abstract state for the tabs directive
        .state('tab', {
        abstract: true,
        url: "/tab",
        templateUrl: "templates/tabs.html",
        controller: 'TabsCtrl'
    })

    // Each tab has its own nav history stack:
    .state('map', {
            parent: 'tab',
            url: '/map/{id}/:go',
            reloadOnSearch: false,
            views: {
                'map': {
                    templateUrl: 'templates/map.html',
                    controller: 'MapCtrl',
                    persist: true
                }
            }
        })
        .state('compass', {
            parent: 'tab',
            url: '/compass/{id}',
            reloadOnSearch: false,
            views: {
                'compass': {
                    templateUrl: 'templates/compass.html',
                    controller: 'CompassCtrl'
                }
            }
        });



    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('tab/map/GLOBAL/0');

})

.config(['$ionicConfigProvider', function ($ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom');
    $ionicConfigProvider.views.maxCache(0);
}])

.config(function ($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow loading from our assets domain.  Notice the difference between * and **.
    'http://www.tourisme-olln.be/**']);
});