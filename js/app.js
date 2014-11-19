console.log("app.js here");


requirejs.config({
	baseUrl: 'js/lib',
	paths: {
		main: '../main'
	},
	shim: {
		'bootstrap': {
			deps: ['jquery'],
			exports: 'Bootstrap'
		},
		'backbone-min': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		'underscore': {
			deps: ['jquery'],
			exports: '_'
		},
		'jquery.easing.min': ['jquery'],
		'jquery.lazyload': ['jquery'],
		'grayscale': ['jquery', 'jquery.easing.min', 'jquery.lazyload'],
		'main': ['underscore', 'backbone-min', 'jquery']
	}
});

//require(['jquery', 'jquery.lazyload', 'jquery.easing.min', 'underscore', 'backbone-min', 'bootstrap.min', 'grayscale', 'main']);

require(['jquery', 'jquery.lazyload', 'jquery.easing.min', 'underscore', 'backbone-min', 'grayscale', 'main'], function() {
	require(['bootstrap.min']);
});




