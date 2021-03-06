angular.module('LLNMaps')
    .factory('compute', function () {

        function toDegrees(angle) {
            return angle * (180 / Math.PI);
        }


        function toRadians(angle) {
            return angle * (Math.PI / 180);
        }

        return {
            
            //compute real distance between 2 geolocated points
            distance: function (pos1, pos2) {
                const RADIUS = 6371000;
          
                var phi1 = toRadians(pos1.lat);
                var phi2 = toRadians(pos2.lat);
                var dphi = toRadians((pos2.lat - pos1.lat));
                var dlon = toRadians((pos2.lng - pos1.lng));

                var a = Math.sin(dphi / 2)
                * Math.sin(dphi / 2)
                + Math.cos(phi1)
                * Math.cos(phi2)
                * Math.sin(dlon / 2)
                * Math.sin(dlon / 2);
                
                var b = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

                return RADIUS*b;
            },
            
            
            //compute bearing between 2 geolocated points
            bearing: function (pos1, pos2) {
                var dLong = pos2.lng - pos1.lng;    
                var dPhi = Math.log(Math.tan(pos2.lat / 2 + Math.PI / 4) / Math.tan(pos1.lat / 2 + Math.PI / 4));    
                if (Math.abs(dLong) > Math.PI) dLong = dLong > 0 ? -(2 * Math.PI - dLong) : (2 * Math.PI + dLong);   
                return (toDegrees(Math.atan2(dLong, dPhi)) + 360) % 360;
            }
        }
    });