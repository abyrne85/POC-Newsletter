module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-compass');

    grunt.initConfig({
        uglify: {
            my_target: {
                files: {
                    'app/dist/js/global.js': ['app/build/js/*.js']
                } //file
            } //my_target
        }, //uglify

        sass: { // Task
            dist: { // Target
                options: { // Target options
                    style: 'compressed'
                },
                files: { // Dictionary of files
                    'app/dist/css/style.css': 'app/build/css/style.scss' // 'destination': 'source'
                }
            }
        },

        autoprefixer: {
            dist: {
                files: {
                    'app/dist/css/style.css': 'app/dist/css/style.css'
                }
            }
        },

        watch: {
            options: {
                livereload: true
            },
            scripts: {
                files: ["app/build/js/*.js", 'app/build/css/*.scss'],
                tasks: ['uglify', 'sass']
            }, //scripts
            html: {
                files: "app/index.html",
            }

        } //watch
    }), //initConfig
    grunt.registerTask('default', ['uglify', 'sass', 'autoprefixer', 'watch']);
} //exports