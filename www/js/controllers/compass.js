angular.module('LLNMaps.compass', ['ionic'])

.controller('CompassCtrl', function ($scope, $rootScope, compute, building) {

    var cardAnimation = 0;
    var rotComp = 0;

    $scope.cardClick = function () {
        if (cardAnimation === 0) {
            $scope.animate = "toFront";
            cardAnimation = 1;
        } else {
            $scope.animate = "toBack";
            cardAnimation = 0;
        }
    };

    var circle = document.querySelector(".cell #circleCompass");
    var dir = $rootScope.rot;
    var buildingPos = building.getCoordinates();
    var userPos = $rootScope.userPosition;
    if (userPos !== undefined && buildingPos !== undefined) {
        var bear = compute.bearing(userPos, buildingPos);
        var dist = compute.distance(userPos, buildingPos);
    }
    var distMax = dist;

    var scaleFactor = dist / distMax;
    
    setInterval(function () {
        dir = $rootScope.rot;
        userPos = $rootScope.userPosition;
        dist = compute.distance(userPos, buildingPos);
        bear = compute.bearing(userPos, buildingPos);
        update();
        scaleFactor = 0.7 + 0.3 * dist / distMax;
        if (dir < bear) {
            rotate(bear - dir, scaleFactor);
        } else {
            rotate(dir - bear, scaleFactor);
        };
    }, 2000);



    function update() {
        $scope.$apply(function () {
            $scope.dist = Math.round(dist) + " m";
            if (dist < 30) {
                $scope.dist = "< 30 m";
                if (cardAnimation === 0)
                    $scope.cardClick();
            }
        });
    }

    function rotate(heading, factor) {
        var aR;
        // if rot undefined or 0, make 0, else rot
        rotComp = rotComp || 0;
        aR = rotComp % 360;
        if (aR < 0) {
            aR += 360;
        }
        if (aR < 180 && (heading > (aR + 180))) {
            rotComp -= 360;
        }
        if (aR >= 180 && (heading <= (aR - 180))) {
            rotComp += 360;
        }
        rotComp += (heading - aR);
        circle.style.WebkitTransform = 'rotate(' + rotComp + 'deg) ' + 'scale(' + factor + ')';
        circle.style.transform = 'rotate(' + rotComp + 'deg) ' + 'scale(' + factor + ')';
    };
});