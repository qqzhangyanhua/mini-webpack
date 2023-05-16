
const EventEmitter = require('events');

function Girl(){

}
//继承类的原型方法

// class Girl extends EventEmitter{  //会继承实例属性也会继承原型属性
//     constructor(){
//         super();
//     }
// }
Object.setPrototypeOf(Girl.prototype,EventEmitter.prototype);

const girl = new Girl();
const sleep = function(){
    console.log('sleep');
    
}
girl.on('xxx',sleep);