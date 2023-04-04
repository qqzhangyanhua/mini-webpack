
const { SyncBailHook } = require('tapable');
const {Tapable, SyncHook,AsyncSeriesHook} = require('tapable');
class Compiler   {
    constructor(context){
        // super()
        this.context = context;
        this.hooks = {
            entry:new SyncBailHook(['context','entry']),
            done: new AsyncSeriesHook(['stats']), //当编译完会触发这个钩子
        }
    }
    run(callback){
            console.log('Compiler run');
            callback(null, {
                toJson(){
                    return{
                        entries: true, //显示所有的入口
                        chunks: true,  //显示所有的代码块
                        modules: true, //显示所有的模块
                        assets: true,
                    }
                }
            });
    }
}
module.exports = Compiler;