var shush = require('shush');

module.exports = function (filePath, options, callback) { // define the template engine

    console.log('filepath', filePath);
    if (module.hot) {
        // accept update of dependency

        module.hot.accept("./render/server", function () {
            // replace request handler of server
            const func = require("./render/server");

            module.hot.accept(filePath, function () {

                var obj = Object.assign({}, options, {
                    schema: options.schema || require(filePath)
                });
                func(obj);
            })
        });
    } else {
        /* try {
         var ret = require('./build/server');
         callback(null, ret(obj));
         } catch (e) {
         callback(e);
         }*/
    }
}