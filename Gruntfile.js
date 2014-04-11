/**
 * Created by zhenguang.zhu on 14-2-27.
 */
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        clean: {
            src: ['dist']
        },
        concat: {
            options: {
                banner: '<%=banner%>',
                stripBanners: true
            },
            dist: {
                src: ['src/scripts/**/*.js'],
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '<%=banner%>'
            },
            build: {
                src: '<%=concat.dist.dest%>',
                dest: 'dist/<%=pkg.name%>.min.js'
            }
        },
        jshint: {
            gruntfile: {
                options: {
                    jshintrc: '.jshintrc'
                },
                src: 'Gruntfile.js'
            },
            src: {
                options: {
                    jshintrc: '.jshintrc'
                },
                src: ['src/**/*.js']
            }
        },
		connect: {
			server:{
				options: {
					port:80,
					keepalive:true
				}
			}
		}
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['clean', 'concat', 'uglify']);
};
