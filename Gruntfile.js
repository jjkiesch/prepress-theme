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
    yeoman: config,

    symlink: {
      options: {
        overwrite: true
      },
      dev: {
        src: 'theme',
        dest: '<%= yeoman.contentDir %>/themes/<%= yeoman.themeName %>'
      }
    },

    compass: {
      dev: {
        options: {
          sassDir: '<%= yeoman.theme %>/scss',
          cssDir: '<%= yeoman.theme %>/css'
        }
      }
    },

    watch: {
      compass: {
        files: ['<%= yeoman.theme %>/scss/{,*/}*.scss'],
        tasks: ['compass:dev']
      },
      livereload: {
        options: {
          livereload: true
        },
        files: [
          '<%= yeoman.theme %>/{,*/}*.php',
          '<%= yeoman.theme %>/css/{,*/}*.css'
        ]
      }
    }
  });
};
