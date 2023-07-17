// 属性装饰器
function nameDecorator(target: any, key: string) {
    console.log(target, key)
    if(key==='name'){
        console.log('1111111111111');
        
    }
  }
  
  class Test {
    @nameDecorator
    name = 'fruit'
  }
  const test = new Test()
  console.log(test.name) // fruit

  export {}