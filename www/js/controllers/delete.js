angular.module('LLNMaps.delete', ['ionic'])

.controller('DeleteCtrl', ['$scope', '$rootScope', '$ionicPopup',
      function ($scope, $rootScope, $ionicPopup) {

        $scope.showDeleteDialog = function (id, index) {
            var confirmPopup = $ionicPopup.confirm({
                title: 'Delete ' + id + ' ?',
                cancelText: 'No',
                okText: 'Yes',
                okType: 'button-assertive'
            });
            confirmPopup.then(function (res) {
                if (res) {
                    $rootScope.customPins.splice(index, 1);
                    localforage.setItem('customPins', $rootScope.customPins);
                    $rootScope.resetMap();
                } else {
                    $scope.holdItem();
                }
            });
        };

        $scope.delete = function (id, index) {
            $scope.showDeleteDialog(id, index);
        }

      }]);