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
    },

    wiredep: {
      wordpress: {
        src: ['<%= yeoman.theme %>/functions.php'],
        fileTypes: {
          php: {
            block: /(([ \t]*)\/\/\s*bower:*(\S*))(\n|\r|.)*?(\/\/\s*endbower)/gi,
            detect: {
              css: /wp_enqueue_style.*get_template_directory_uri.*['"]\/(.*\.css)/gi,
              js: /wp_enqueue_script.*get_template_directory_uri.*['"]\/(.*\.js)/gi
            },
            replace: {
              css: function(filePath) {
                var handle = config.themeName + '-' + filePath.match(/.*\/(.*)\.css/)[1];
                return 'wp_enqueue_style( \'' + handle + '\', get_template_directory_uri() . \'/' + filePath + '\' );';
              },
              js: function(filePath) {
                var handle = config.themeName + '-' + filePath.match(/.*\/(.*)\.js/)[1];
                return 'wp_enqueue_script( \''+ handle + '\', get_template_directory_uri() . \'/' + filePath + '\', array(), null, true );';
              }
            }
          }
        }
      },
      sass: {
        src: ['<%= yeoman.theme %>/scss{,*/}*.scss']
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
