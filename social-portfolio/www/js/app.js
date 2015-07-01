angular.module('portfolio', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  // setup an abstract state for the tabs directive
    .state('menu', {
    url: "/menu",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'menuCtrl'
  })

  .state('menu.welcome', {
    url:'/welcome',
    views: {
      'menu':{
        templateUrl: 'templates/welcome.html',
        controller: 'welcomeCtrl'
      }
    }
  })

  .state('menu.github', {
    url:'/github',
    views: {
      'menu':{
        templateUrl: 'templates/github.html',
        controller: 'githubCtrl'
      }
    }
  })

  .state('menu.instagram', {
    url:'/instagram',
    views: {
      'menu':{
        templateUrl: 'templates/instagram.html',
        controller: 'instagramCtrl'
      }
    }
  })
  

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/menu/welcome');

});
