// Cancel Karma's synchronous start,
// we will call `__karma__.start()` later, once all the specs are loaded.
__karma__.loaded = function() {};

System.config({
  packages: {
    'base/src/js': {
      defaultExtension: false,
      format: 'register',
      map: Object.keys(window.__karma__.files).
        filter(onlyAppFiles).
        reduce(function(pathsMapping, appPath) {
          var moduleName = appPath.replace(/^\/base\/src\/js\//, './').replace(/.js$/, '');
          pathsMapping[moduleName] = appPath + '?' + window.__karma__.files[appPath];
          return pathsMapping;
        }, {})
    }
  }
});

Promise.all(
  Object.keys(window.__karma__.files)
    .filter(onlySpecFiles)
    .map(function(moduleName) {
      return System.import(moduleName);
    })
).then(function() {
  __karma__.start();
}, function(error) {
  __karma__.error(error.stack || error);
});

function onlyAppFiles(filePath) {
  return /^\/base\/src\/js\/.*\.js$/.test(filePath);
}

function onlySpecFiles(path) {
  return /_spec\.js$/.test(path);
}
