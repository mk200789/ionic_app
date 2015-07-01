angular.module('starter.services', ['ngResource'])

.factory('githubProfile', function ($resource){
  return $resource('https://api.github.com/users/mk200789?client_id=yyyyy&client_secret=xxxxxx');
});

