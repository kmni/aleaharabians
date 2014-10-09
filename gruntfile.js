module.exports = function(grunt) {

    // require it at the top and pass in the grunt instance
    require('time-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        // kompilace compass
        compass: {
            watch: {
            }
        },

        // pravidla pro automatickou kompilaci
        watch: {
            styles: {
                files: ["**/*.scss"],
                tasks: ["compass"],
                options: { atBegin: true }
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask("default", ["watch"]);
}