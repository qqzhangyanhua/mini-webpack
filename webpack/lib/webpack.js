const Compiler = require("./Compiler.js");
const NodeEnvironmentPlugin = require("./node/NodeEnvironmentPlugin.js");
const WebpackOptionsApply = require('./webpackOptionsApply')
const webpack = (options, callback) => {
  //验证配制环境是否合法
  let compiler = new Compiler(options); //创建一个compiler对象
  compiler.options = options; //赋值属性
  new NodeEnvironmentPlugin().apply(compiler); //调用插件 读,写!
  //挂载配制里的所以plugins
  if (Array.isArray(options.plugins)) {
    for (let plugin of options.plugins) {
      if (typeof plugin === "function") {
        plugin.call(compiler, compiler);
      } else {
        plugin.apply(compiler);
      }
    }
  }
  return compiler;
};
module.exports = webpack;
