angular.module('LLNMaps')
    .factory('building', function ($rootScope) {

        id = $rootScope.id;

        return {

            getCoordinates: function () {
                for (i in auditoriums) {
                    if (auditoriums[i].id == id) {
                        $rootScope.id = id;
                        $rootScope.building = auditoriums[i].name;
                        return auditoriums[i].pos;
                    }
                }

                for (i in transport) {
                    if (transport[i].id == id) {
                        $rootScope.id = id;
                        $rootScope.building = transport[i].name;
                        return transport[i].pos;
                    }
                }

                for (i in entertainment) {
                    if (entertainment[i].id == id) {
                        $rootScope.id = id;
                        $rootScope.building = entertainment[i].name;
                        return entertainment[i].pos;
                    }
                }

                for (i in shops) {
                    if (shops[i].id == id) {
                        $rootScope.id = id;
                        $rootScope.building = shops[i].name;
                        return shops[i].pos;
                    }
                }

                for (i in inforville) {
                    if (inforville[i].id == id) {
                        $rootScope.id = id;
                        $rootScope.building = inforville[i].name;
                        return inforville[i].pos;
                    }
                }
                for (i in places24) {
                    if (places24[i].id == id) {
                        $rootScope.id = id;
                        $rootScope.building = places24[i].name;
                        return places24[i].pos;
                    }
                }

                for (i in customPins) {
                    if (customPins[i].id == id) {
                        $rootScope.id = id;
                        $rootScope.building = customPins[i].name;
                        return customPins[i].pos;
                    }
                }
                for (i in streetList) {
                    if (streetList[i].id == id) {
                        $rootScope.id = id;
                        $rootScope.building = streetList[i].id;
                        return L.latLng(streetList[i].lat, streetList[i].long);
                    }
                }
            }

        }
    });