const fs = require('fs');
class NodeEnvironmentPlugin {
  constructor(options) {
    this.options = options || {};
  }

  apply(compiler) {
    compiler.inputFileSystem = fs; //读文件用哪个模块
    compiler.outputFileSystem = fs; //写文件用哪个模块
    // new NodeEnvironmentPlugin({
    // 	infrastructureLogging: options.infrastructureLogging
  }
}
module.exports = NodeEnvironmentPlugin;