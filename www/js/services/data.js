angular.module('LLNMaps')
    .factory('DataService', function ($q, $timeout) {

        var searchbuildings = function (searchFilter) {
            var deferred = $q.defer();
            var matches = list.filter(function (item) {
                if (item.id !== undefined && item.address !== undefined) {
                    if (item.id.toLowerCase().indexOf(searchFilter.toLowerCase()) !== -1 || item.name.toLowerCase().indexOf(searchFilter.toLowerCase()) !== -1 || item.address.toLowerCase().indexOf(searchFilter.toLowerCase()) !== -1) return true;
                } else {
                    if (item.id.toLowerCase().indexOf(searchFilter.toLowerCase()) !== -1) return true;
                }
            })
            $timeout(function () {
                deferred.resolve(matches);
            }, 100);
            return deferred.promise;
        };

        var searchStreets = function (searchFilter) {
            var deferred = $q.defer();
            var matches = streetList.filter(function (item) {
                if (item.id.toLowerCase().indexOf(
                        searchFilter.toLowerCase()) !== -1)
                    return true;

            });
            $timeout(function () {
                deferred.resolve(matches);
            }, 100);
            return deferred.promise;
        };

        return {
            searchbuildings: searchbuildings,
            searchStreets: searchStreets
        };
    })