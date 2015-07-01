angular.module('starter.controllers', ['starter.services'])

.controller('menuCtrl', function($scope){
  $scope.title = "Content";
})  
.controller('instagramCtrl', function($scope){
  $scope.title = "Instagram";
})  
.controller('githubCtrl', function($scope, githubProfile) {
  $scope.title = "Github";
  $scope.githubProfile = githubProfile.get();
})
.controller('welcomeCtrl', function($scope) {
  $scope.title = "Home";
});