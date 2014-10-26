'use strict';

module.exports = function(grunt) {
  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Theme configuration
  var config = {
    contentDir: '../wordpress/content',
    themeName: 'prepress',
    theme: 'theme',
    dist: 'dist'
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
      options: {
        sassDir: '<%= yeoman.theme %>/scss',
        cssDir: '<%= yeoman.theme %>/css',
        generatedImagesDir: '<%= yeoman.theme %>/images/generated',
        imagesDir: '<%= yeoman.theme %>/images',
        javascriptsDir: '<%= yeoman.theme %>/js',
        fontsDir: '<%= yeoman.theme %>/fonts',
        importPath: './bower_components',
        relativeAssets: true
      },
      dev: {
        options: {
          debugInfo: true
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

  grunt.registerTask('serve', 'Compile and watch theme assets', function(target) {
    if (target === 'dist') {
      // Handle dist build.
    }

    grunt.task.run([
      'symlink:dev',
      'compass:dev',
      'watch'
    ]);
  });
};
