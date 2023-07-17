// 工厂模式 在一定条件下执行
function testDecorator(flag: boolean) {
    if (flag) {
      return function (constructor: any) {
        constructor.prototype.getName = () => {
          console.log('dell')
        }
      }
    } else {
      return function (constructor: any) { }
    }
  }
  
  @testDecorator(true) // 通过传入的参数控制装饰器
  class Test { }
  const test = new Test();
  (test as any).getName()
  export {}