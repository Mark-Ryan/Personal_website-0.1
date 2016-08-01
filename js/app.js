var websiteApp = angular.module('WebsiteApp', ['ui.router']);

websiteApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/about");

  $stateProvider
    .state('about', {
      url: "/about",
      templateUrl: "templates/about.html"
    })

    .state('contact', {
      url: "/contact",
      templateUrl: "templates/contact.html",
    })

});
