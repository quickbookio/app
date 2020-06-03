const theme = require('./tailwind/theme');
const variants = require('./tailwind/variants');
const plugins = require('./tailwind/plugins');

module.exports = {
    purge: [
        './public/index.html',
        './src/**/*.html',
        './src/**/*.js',
        './src/**/*.svelte',
    ],
    theme,
    variants,
    plugins
};
