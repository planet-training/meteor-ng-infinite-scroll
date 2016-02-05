Package.describe({
  name: 'planettraining:ng-infinite-scroll',
  version: '1.2.2_1',
  // Brief, one-line summary of the package.
  summary: 'ngInfiniteScroll packaged for meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/planet-training/meteor-ng-infinite-scroll.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('angular:angular@1.4.8', ['client']);
  api.addFiles('ngInfiniteScroll/build/ng-infinite-scroll.js','client');
});
