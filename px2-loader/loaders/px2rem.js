const css = require('css')
class Px2rem{
    constructor(options){
        this.options = options;
    }
    generateRem(cssText){
        let self = this;
        
       const cssAst = css.parse(cssText,this.options);
       console.log('cssAst',JSON.stringify(cssAst,null,2));
        return  cssText
    }
}
module.exports = Px2rem