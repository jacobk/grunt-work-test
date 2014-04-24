'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    work: {
      github_config: '.work',
      default_branch: 'master'
    }
  });

  grunt.loadNpmTasks('grunt-work');
  grunt.registerTask('default', ['work']);
};
