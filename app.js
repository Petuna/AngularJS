(function() {


  var app = angular.module("transport", ["ngRoute"]);

  app.config(function($routeProvider) {

      $routeProvider
      .when("/bikes", {
        templateUrl: "bikes.html",
        controller: "BikesController"
      
      })
      
        .when("/roads", {
        templateUrl: "roads.html",
        controller: "RoadsController"
      
      })
      
      .when("/air", {
        templateUrl: "air.html",
        controller: "AirController"
      
      })
      
      
       .when("/bike/:bikepoint", {
        templateUrl: "bike.html",
        controller: "BikeController"
       })
      
      
      
       .when("/home", {
        templateUrl: "home.html"
      
      })
      
      .otherwise({redirectTo:"/home"});
  });


}());
