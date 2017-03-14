const Letov = require('letov');
const colors = require('colors');

function LetovPlugin() {}

LetovPlugin.prototype.apply = function (compiler) {
  compiler.plugin('done', function() {
    console.log(colors.red.bold.inverse(Letov()));
  });
};

module.exports = LetovPlugin;
