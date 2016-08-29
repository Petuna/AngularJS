(function() {

  var tflService = function($http) {


    //$http.get("https://api.tfl.gov.uk/CycleSuperhighway")
    //  .then(OnBikePointsComplete, OnError);

    var getCycleSuperhighway = function() {

      return $http.get("https://api.tfl.gov.uk/CycleSuperhighway")
        .then(function(response) {
          return response.data;
        });
    };

    var getBikeById = function(bikeId) {

      return $http.get("https://api-argon.tfl.gov.uk/Place/" + bikeId)
        .then(function(response) {
          return response.data;
        });
    };
    
    
     var getBikes = function() {

      return $http.get("https://api.tfl.gov.uk/BikePoint")
        .then(function(response) {
          return response.data;
        });
    };
  
  
    var getRoads = function() {

      return $http.get("https://api.tfl.gov.uk/Road")
        .then(function(response) {
          return response.data;
        });
    };

    return {
      
      getCycleSuperhighway: getCycleSuperhighway,
      getBikeById: getBikeById,
      getBikes: getBikes,
      getRoads: getRoads
      
    };



  };


  var module = angular.module("transport");
  module.factory("tflService", tflService);

}());