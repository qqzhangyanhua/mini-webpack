//挂载各种插件
class WebpackOptionsApply{
    process(options,compiler){
        //注册插件
         new EntryOptionPlugin(options,compiler);
         //触发entryOption的钩子 context根目录路径 options.entry入口文件
         compiler.hooks.entryOption.call(options.context,options.entry)
    }
}
module.exports = WebpackOptionsApply