angular.module('devmtnTravel').controller('bookedCtrl', function ($scope, mainSrv, $state, $stateParams) {

    function findLocation() {
        for (var i = 0; i < mainSrv.travelInfo.length; i++) {
            if (mainSrv.travelInfo[i].id == $stateParams.id) {

                $scope.city = mainSrv.travelInfo[i]
            }
        }
    }
    findLocation();

    var potato = "url(" + $scope.city.image + ")"
    $scope.backdrop = {
        'background-image': potato,
    }


})