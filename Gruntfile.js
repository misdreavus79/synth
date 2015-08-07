module.exports = function(grunt) {
	grunt.initConfig({
		watch: {
			html: {
				files: ['marketo/templates/**/*.html'],
				options: {
					livereload: 35729
				}				
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['watch']);
};