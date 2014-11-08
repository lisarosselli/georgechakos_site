console.log("app.js here");


requirejs.config({
	baseUrl: 'js/lib',
	paths: {
		main: '../main'
	},
	shim: {
		'jquery.easing.min': ['jquery'],
		'jquery.lazyload': ['jquery'],
		'grayscale': ['jquery', 'jquery.easing.min', 'jquery.lazyload'],
		'main': ['underscore', 'backbone-min', 'jquery'],
		'backbone-min': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		'bootstrap': {
			deps: ['jquery']
		},
		'underscore': {
			deps: ['jquery'],
			exports: '_'
		}
	}
});

require(['jquery', 'jquery.lazyload', 'bootstrap.min', 'jquery.easing.min', 'underscore', 'backbone-min', 'grayscale', 'main']);




