const css = require('css');
const pxRegExp = /(\d*\.?\d+)px/g;
class Px2rem{
    constructor(options){
        this.options = options;
    }
    generateRem(cssText){
        let self = this;
        function processRules(rules){
            for (let i = 0; i < rules.length; i++) {
                    const rule = rules[i];
                let declarations =rule.declaration;
                for(let j =0;j<declaration.length;j++) {
                    let declaration = declarations[j];
                    if (declaration.type === 'declaration' && pxRegExp.test(declaration.value)) {
                        declaration.value = declaration.value.replace(pxRegExp, function (match, $1) {
                            return $1 / self.options.remUnit + 'rem';
                        })
                    }

                    }
                }
            }
        }
       const cssAst = css.parse(cssText,this.options);
       console.log('cssAst',JSON.stringify(cssAst,null,2));
        return  cssText
    }
}
module.exports = Px2rem