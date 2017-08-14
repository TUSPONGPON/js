module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-postcss');

    grunt.initConfig({
        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')
                ]
            },
            options: {
                map: true,
                processors: [
                    require('core.js')
                ]
            },
            options: {
                map: true,
                processors: [
                    require('plupload.js')
                ]
            },
            dist: {
                src: 'scss/*.scss' [
                require('bootstrap')
                ]
            }
             dist: {
                src: '/*npm.js'
                processors: [
                require('npm')
                ]
            }
            dist: {
                module: 'maps/*aimer.js'
                processors: [
                require('prefixer')
                ]
            }
        }
    });


    grunt.postcss([ autoprefixer ]).process(css).then(function (result){
    	result.warnings().forEach(function (warn) {
    		console.warn(warn.toString());
    	});
    	console.log(result.css);
    })

      grunt.postcss([ installer ]).process(css).then(function (result){
        result.warnings().forEach(function (core) {
            console.warn(warn.toString());
        });
        console.log(result.css);
    })
       grunt.postcss([ core ]).process(css).then(function (result){
        result.warnings().forEach(function (core) {
            console.warn(warn.toString());
        });
        console.log(result.css);
    })
        grunt.postcss([ plupload ]).process(css).then(function (result){
        result.warnings().forEach(function (warn) {
            console.warn(warn.toString());
        });
        console.log(result.css);
    })

    grunt.registerTask('aimer', ['postcss:dist']);
};

