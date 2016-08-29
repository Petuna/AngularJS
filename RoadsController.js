(function() {

  var app = angular.module("transport");

  var RoadsController = function(
    $scope,
    //$http,
    //$routeParams
    tflService) {




    var OnRoadsComplete = function(data) {
      $scope.roads = data;
    };


    var OnError = function(reason) {
      $scope.error = "Could not fetch the data afout roads.";
    };


      tflService.getRoads()
    
      //$http.get("https://api.tfl.gov.uk/Road")
        .then(OnRoadsComplete, OnError);
    

  
  };

  app.controller("RoadsController", RoadsController);
 

}());