(function() {

  var app = angular.module("transport");

  var BikesController = function(
    $scope,
    // $http,
   // $routeParams,
    $location,
    tflService) {


    $scope.searchOneBikePoint = function(searchPoint) {
      $location.path("/bike/" + searchPoint);
    };


    var OnBikePointsComplete = function(data) {
      $scope.bikepoints = data;
    };


    var OnError = function(reason) {
      $scope.error = "Could not fetch the data.";
    };

    
    $scope.searchPoint = "BikePoints_1";
    $scope.bikeSortOrder = "";

    tflService.getBikes()
      .then(OnBikePointsComplete, OnError);

  };

  app.controller("BikesController", BikesController);

}());