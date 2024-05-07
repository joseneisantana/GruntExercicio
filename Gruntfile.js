module.exports = function(grunt) {
    grunt.initConfig({
      less: {
        development: {
          options: {
            paths: ['src/less'] // Diretório dos arquivos LESS
          },
          files: {
            'dist/css/style.css': 'src/less/style.less' // Arquivo de entrada e saída
          }
        }
      },
      htmlmin: {
        dist: {
          options: {
            removeComments: true,
            collapseWhitespace: true
          },
          files: {
            'dist/html/index.html': './src/less/index.html'
          }
        }
      },
      
        uglify: {
          dist: {
            files: {
              'dist/js/main.min.js': 'src/less/script/main.js'
            }
          }
        }
    });
  
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    grunt.registerTask('default', ['less:development' , 'htmlmin' ,'uglify' ]);
  };