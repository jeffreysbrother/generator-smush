module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // this task handles image compression and resizing
    // required: GraphicsMagick installed
    responsive_images: {
        myTask: {
          options: {
            sizes: [{
              // width: 2100,
              // quality: 61
            // },{
              width: 300,
              quality: 40
            // },{
            //   width: 700,
            //   quality: 40
            }]
          },
          files: [{
            expand: true,
            src: ['images/*.{jpg,jpeg,JPG,JPEG,gif,GIF,png,PNG}'],
            custom_dest: 'images{%= width %}/'
          }]
        }
      }

  });

  grunt.loadNpmTasks('grunt-responsive-images');

  grunt.registerTask('default', ['responsive_images']);
};
