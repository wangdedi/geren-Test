var photoGallery = angular.module('photoGallery',["ui.router","photoGallery.controllers","photoGallery.list"]);
photoGallery.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/tab/home');
	$stateProvider
	.state('tab',{
		url: '/tab',
		templateUrl: 'partials/tab.html'
	})
	.state('tab.home',{
		url: '/home',
		templateUrl: 'partials/home.html'
	})
	.state('tab.photos',{
		url: '/photos',
		templateUrl: 'partials/photos.html'
	})
	.state('tab.about',{
		url: '/about',
		templateUrl: 'partials/about.html',
		controller: "about"
	})
	.state('tab.about.list',{
		url: '/list',
		templateUrl: 'partials/list.html',
		controller:"list"
	})
})

