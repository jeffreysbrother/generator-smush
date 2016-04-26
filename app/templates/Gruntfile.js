module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // this task handles image compression and resizing
    // required: GraphicsMagick installed
    
    // WIDTH property must be a string if it includes % or px suffix
    // QUALITY property must be an integer between 1 and 100  
    responsive_images: {
        myTask: {
          options: {
            sizes: [
              {
                width: "l00%",
                quality: 64
              }
              // {
              //   width: 2100,
              //   quality: 61
              // },
              // {
              //   width: 700,
              //   quality: 40
              // }
            ]
          },
          files: [{
            expand: true,
            src: ['images/*.{jpg,jpeg,JPG,JPEG,gif,GIF,png,PNG}'],
            custom_dest: 'smush{%= width %}/'
          }]
        }
      }

  });

  grunt.loadNpmTasks('grunt-responsive-images');

  grunt.registerTask('default', ['responsive_images']);
};
