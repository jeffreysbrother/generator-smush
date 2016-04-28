'use strict';
var generators = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var mkdirp = require('mkdirp');

module.exports = generators.Base.extend({
  
  constructor: function () {
    generators.Base.apply(this, arguments);
  },

  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    this.log(yosay('Get on the train to Smushville!'));
  },

  writing: {
    gruntfile: function () {
      this.fs.copyTpl(
        this.templatePath('Gruntfile.js'),
        this.destinationPath('Gruntfile.js')
      );
    },

    packageJSON: function () {
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json')
      );
    },
    
    // if the bower.json file is not created, Yeoman will complain
    bower: function () {
      var bowerJson = {
        name: "Smushville",
        private: true,
        dependencies: {}
      };
      this.fs.writeJSON('bower.json', bowerJson);
    },
    
    misc: function () {
      mkdirp('images');
    }

  },

  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install']
    });
  },
  
  end: function () {
  var bowerJson = this.fs.readJSON(this.destinationPath('bower.json'));
  var howToInstall =
    '\nAfter running ' +
    chalk.yellow.bold('npm install & bower install') +
    ', inject your' +
    '\nfront end dependencies by running ' +
    chalk.yellow.bold('gulp wiredep') +
    '.';

  if (this.options['skip-install']) {
    this.log(howToInstall);
    return;
  }

  // wire Bower packages to .html
  wiredep({
    bowerJson: bowerJson,
    directory: 'bower_components',
    exclude: ['bootstrap-sass', 'bootstrap.js'],
    ignorePath: /^(\.\.\/)*\.\./,
    src: 'app/index.html'
  });
}
});
