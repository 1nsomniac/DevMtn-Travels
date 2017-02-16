angular.module('devmtnTravel').controller('packagesCtrl', function ($scope, mainSrv, $state, $stateParams){



    $scope.locations = mainSrv.travelInfo

})