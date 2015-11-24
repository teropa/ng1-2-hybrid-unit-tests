module.exports = function(config){
  config.set({

    basePath : '../../',

    files : [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/angular2/bundles/angular2.dev.js',
      'node_modules/angular2/bundles/testing.js',
      'src/test/karma_test_shim.js',
      {pattern: 'src/js/**/*.js', included: false},
      {pattern: 'src/test/**/*spec.js', included: false}
    ],

    autoWatch : true,

    frameworks: ['jasmine'],
    browsers: ['Chrome'],
    plugins : ['karma-jasmine', 'karma-chrome-launcher']

  });
};
