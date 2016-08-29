(function() {

  var app = angular.module("transport");

  var BikeController = function(
    $scope,
    //  $http,
    tflService,
    $routeParams) {


    var OnBikePointComplete = function(data) {
      $scope.bikeInfo = data;
    };

    var OnError = function(reason) {
      $scope.error = "Could not fetch the data.";
    };

    var bikeId = $routeParams.bikepoint;

    tflService.getBikeById(bikeId)
      .then(OnBikePointComplete, OnError);






  };

  app.controller("BikeController", BikeController);

}());