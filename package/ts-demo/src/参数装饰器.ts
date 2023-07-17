// target: 原型 method: 方法名 paramIndex: 参数所在的位置下标
function paramDecorator(target: any, method: string, paramIndex: number) {
    console.log(target, method, paramIndex) //Test { getInfo: [Function] } 'getInfo' 0
  }
  class Test {
    getInfo(@paramDecorator name: string, age: number) {
      console.log(name, age) // fruit 18
    }
  }
  const test = new Test()
  test.getInfo('fruit', 18)
  export default {}