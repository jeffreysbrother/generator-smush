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
    
    misc: function () {
      mkdirp('images');
    }

  },

  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install']
    });
  }
});
