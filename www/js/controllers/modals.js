angular.module('LLNMaps.modals', ['ionic'])

.controller('ModalsCtrl', function ($scope, $rootScope, $ionicModal) {

    //customPin modal
    $ionicModal.fromTemplateUrl('templates/modal.html', {
        scope: $rootScope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $rootScope.modal = modal;
    });
    $rootScope.openModal = function () {
        $rootScope.modal.show();
    };
    $rootScope.closeModal = function () {
        $rootScope.modal.hide();
    };
    $rootScope.custom = {
        'id': '',
        'name': '',
        'pos': '',
        'address': ''
    };
    
    //Cleanup the modal when we're done with it!
    $rootScope.$on('$destroy', function () {
        $rootScope.modal.remove();
    });
    
    //help modal
    $ionicModal.fromTemplateUrl('templates/helpModal.html', {
        scope: $rootScope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $rootScope.helpModal = modal;
    });
    $rootScope.openHelpModal = function () {
        $rootScope.helpModal.show();
    };
    $rootScope.closeHelpModal = function () {
        $rootScope.helpModal.hide();
    };

    //inforvilleWebFrame (reset new modal on close)
    function createModal() {
        $ionicModal.fromTemplateUrl('templates/inforvilleWebFrame.html', {
            scope: $rootScope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $rootScope.webFrame = modal;
        });
        $rootScope.openWebFrame = function () {
            $rootScope.webFrame.show();
        };
        $rootScope.closeWebFrame = function () {
            $rootScope.webFrame.hide();
            $rootScope.webFrame.remove();
            createModal();
        };
    }
    createModal();

});