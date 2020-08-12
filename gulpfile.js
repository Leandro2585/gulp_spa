const { series, parallel } = require('gulp');
const gulp = require('gulp');
const { appHTML, appCSS, appJS, appIMG } = require('./gulp/app');
const { depCSS, depFonts } = require('./gulp/deps');
const { monitorFiles, server } = require('./gulp/server');

module.exports.default = series(
    parallel(
        series(appHTML, appCSS, appJS, appIMG),
        series(depCSS, depFonts)
    ),
    server,
    monitorFiles
)