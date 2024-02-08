module.exports = {
    outputDir: './wwwroot/',
    lintOnSave: false,
    productionSourceMap: false,
    filenameHashing: false,
    css: {
        extract: {
            filename: 'globalstyle.css'
        }
    },
    configureWebpack: {
        optimization: {
            splitChunks: false
        },
        output: {
            filename: 'application.js'
        },
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            }
        }
    },
}