import webpack from "webpack";


module.exports = function(app,CONFIG) {
    if(CONFIG.ENV=== "develop") {
        var config = require('../webpack/webpack.config')(CONFIG.ENV);
        var compiler = webpack(config);
        var devMiddleware = require('webpack-dev-middleware')(compiler, {
            publicPath: config.output.publicPath,
            noInfo: true,
            stats: {colors: true},
            poll: true,
            quiet: false,
            reload: true
        });

        var hotMiddleware = require('webpack-hot-middleware')(compiler, {
            reload: true,
            //log: global.logger.log,
            path: '/__webpack_hmr'
        });
        app.use(devMiddleware);
        app.use(hotMiddleware);
    }
};

