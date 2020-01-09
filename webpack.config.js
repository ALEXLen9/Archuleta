const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'js', 'index.js'),
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'public', 'js'),
        filename: 'app.bundle.js'
    }
};