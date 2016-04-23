var shush = require('shush');
var server = require('./render/server');

module.exports = function (ctx) {
    console.log('keys', ctx.keys().join('\n'))
    return function (filePath, options, callback) {
        console.log('filePath', filePath);
        // accept update of dependency
        const fp = filePath.replace(/.*\/schemas\//, './');
        const schema = options.schema || ctx(fp);
        var obj = Object.assign({
            schema: schema
        }, options);
        var html = server(obj);
        callback(null, html);
    }
}