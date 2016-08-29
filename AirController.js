(function() {

  var app = angular.module("transport");

  var AirController = function(
    $scope,
    $http,
    //$routeParams,
    tflService) {

      
       var OnAirComplete = function(data) {
      
      $scope.cycles = data;
    };


    var OnError = function(reason) {
      $scope.error = "Could not fetch the data.";
    };

    //var getAllPoints = function() {

     // return 
     
     
     tflService.getCycleSuperhighway()
     
    //  $http.get("https://api.tfl.gov.uk/CycleSuperhighway")
        .then(OnAirComplete, OnError);
    //};
  };



  app.controller("AirController", AirController);
 

}());