module.exports = {
    publicPath: '/gistagram/',
    chainWebpack: config => {
        config
        .plugin('html')
        .tap(args => {
            args[0].title = 'Gistagram'
            return args
        })
    }
}