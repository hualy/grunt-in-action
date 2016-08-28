/**
 * Created by Hualy on 2016/8/27.
 */
'use strict'

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    require('time-grunt')(grunt);

    var config = {
        app : 'app',
        dist : 'dist'
    }

    grunt.initConfig({
        config : config,

        copy:{
            dist:{
                files:[
                    {
                        expand:true,
                        cwd:'<%=config.app %>/',//相对于src的寻路路径
                        src:'**/*.js',
                        dest:'<%=config.dist %>/',
                        ext:'.js',//是否修改目标文件的后缀名
                        extDot:'last',//从哪个地方开始修改目标文件后缀名
                        flatten:true,
                        rename:function (dest,src) {
                            return dest+'js/'+src;
                        }
                    }
                ]
            },
        },

        clean:{
            dist:{
                src:['<%=config.dist %>/**/*']
            }
        }
    });
}