angular.module('devmtnTravel').controller('locationsCtrl', function ($scope, mainSrv, $state, $stateParams){

// angular.module('app')         .controller('productsCtrl', function($scope, $stateParams, productService){

$scope.locations = mainSrv.travelInfo
$scope.test = "hello"

})