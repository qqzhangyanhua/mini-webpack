function say(a,b,c) {
    console.log(a,b,c + '==say');
  }
 say.before = function(fn) {
   return (...args)=>{
        fn();
        this(...args);
   }
 }
 let newSay = say.before(function() {
    console.log('before');
 });
//  newSay(1,2,3);
//  文件读取异步

const fs = require('fs');
fs.readFile('./package.json','utf8',function(err,data) {
    console.log(data);
});