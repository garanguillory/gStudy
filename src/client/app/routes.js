angular
  .module('gStudy').config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<login></login>'
      })
      .when('/login', {
        template: '<login></login>'
      })
      .when('/register', {
        template: '<register></register>'
      })
      .when('/profile', {
        template: '<profile></profile>'
      })
      .when('/newdeck', {
        template: '<newdeck></newdeck>'
      })
      .when('/deck', {
        template: '<deck></deck>'
      })
      .otherwise({
        redirectTo: '/'
      });
}]);

// need to change reddit