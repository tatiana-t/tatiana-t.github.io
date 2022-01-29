module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-postcss");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.initConfig({
    less: {
      style: {
        files: {
          "web/css/style.css": "web/less/style.less"
        }
      }
    },
    postcss: {
      style: {
        src: "web/css/*.css"
      },
      options: {
        processors: [
          require("autoprefixer")({
            browsers:["last 2 versions"]
          })
        ]
      }
    },
    watch: {
      style: {
        files: ["web/less/**/*.less"],
        tasks: ["less", "postcss"]
      }
    }
  });
  grunt.registerTask("build", [
    "less",
    "postcss",
    "watch"
  ]);
};
