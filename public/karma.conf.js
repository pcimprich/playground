module.exports = function(config) {
  config.set({

    basePath: '',

    files: [
    	'bower_components/angular/angular.js',
      	'bower_components/angular-route/angular-route.js',
      	'bower_components/angular-mocks/angular-mocks.js',
      	'bower_components/angular-cookies/angular-cookies.js',
	  	'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
      	'angular/*.js',
	  	'angular/**/*.module.js',
	  	'angular/**/*.component.js',
	  	'angular/**/*.filter.js',
		'angular/**/*.service.js',
		'angular/**/*.spec.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine'
	/*
	  'karma-firefox-launcher',
      'karma-junit-reporter'
	*/
    ],

	/*
    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }
	*/

  });
};
