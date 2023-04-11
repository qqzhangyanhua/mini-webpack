//内置模块  不需要安装
//文件模块 自己写的通过相对路径引用的
//第三方模块,需要安装

const fs = require("fs");
 //fs.readFile readFileSync(同步和异步的)
//  readFileSync 同步读取文件 适合读取小文件模块化我们可以

const path = require("path");
//path.join()  path.resolve()  path.extname()  path.basename()  path.dirname()

console.log(path.join(__dirname, 'vvv',"a.txt"));