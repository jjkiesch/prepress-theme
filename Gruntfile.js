'use strict';

module.exports = function(grunt) {
  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Theme configuration
  var config = {
    contentDir: '../wordpress/content/',
    themeName: 'prepress'
  };

  // Configure grunt tasks
  grunt.initConfig({
    symlink: {
      options: {
        overwrite: true
      },
      dev: {
        src: 'theme',
        dest: config.contentDir + 'themes/' + config.themeName
      }
    }
  });
};
