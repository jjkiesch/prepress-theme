'use strict';

module.exports = function(grunt) {
  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Theme configuration
  var config = {
    contentDir: '../wordpress/content/',
    themeName: 'prepress',
    theme: 'theme/',
    dist: 'dist/'
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
    },

    compass: {
      dev: {
        options: {
          sassDir: config.theme + 'scss',
          cssDir: config.theme + 'css'
        }
      }
    }
  });
};
