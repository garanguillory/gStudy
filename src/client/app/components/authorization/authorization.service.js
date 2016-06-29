(function () {

  'use strict';

  /**
  1. login
  2. logout
  3. register
  4. set user info into localstorage
  5. get user info from localstorage
  **/

  angular.module('gStudy')
    .service('authService', authService);

  authService.$inject = ['$http', '$window'];

  function authService($http, $window) {
    var user = {};
    return {
      login: function(user) {
        return $http.post('/api/auth/login', user);
      },
      logout: function(user) {
        user = null;  
        $window.localStorage.clear();
      },
      register: function(user) {
        console.log("authService user: ", user);
        return $http.post('/api/auth/register', user);
      },
      setUserInfo: function(userData) {
        console.log("userData: ", userData);
        $window.localStorage.setItem('id', userData.data.data.id);
        $window.localStorage.setItem('email', userData.data.data.email);
        $window.localStorage.setItem('token', userData.data.data.token);
      },
      getUserInfo: function(userData) {
        return $window.localStorage.getItem('user');
      },
    };
  }

  })();