module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    watch: {
      options: {
        livereload: true,
      },
      files: ['<%= pkg.directories.scss %>/**/*.scss', '<%= pkg.directories.js_dev %>/*.js', '*.html'],
      tasks: ['sass', 'uglify']
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: '<%= pkg.directories.js_dev %>/main.js',
        dest: '<%= pkg.directories.js %>/main.min.js'
      }
    },

    sass: {                         
      dist: {                       
        options: {                      
          style: 'compressed'
        },
        files: {                      
          '<%= pkg.directories.css %>/style.css': '<%= pkg.directories.scss %>/style.scss'
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 8000,
          base: './',
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks ('grunt-contrib-connect');
  grunt.loadNpmTasks ('grunt-contrib-uglify');
  grunt.loadNpmTasks ('grunt-contrib-sass');
  grunt.loadNpmTasks ('grunt-contrib-watch');

  grunt.registerTask('serve', ['connect', 'watch']);

};