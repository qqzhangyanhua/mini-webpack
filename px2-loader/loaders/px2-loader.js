
/**
 *loader本身是一个函数 参数是上一个loader的内容或者源代码
 经过处理,把结果返回给下一个loader 或者webpack
 *
 */
let Px2rem =require('./px2rem')
const loaderUtils = require('loader-utils');
function loader(source){
    console.log('开始执行===============================================loader2 action========');
    const loaderContext = this;
    let options = loaderUtils.getOptions(loaderContext);
    let px2remSource = new Px2rem(options)
    let targetSource = px2remSource.generateRem(source);
    
    return targetSource;
}
module.exports = loader;