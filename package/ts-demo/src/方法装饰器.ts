function getNameDecorator(target: any, key: string,desc:any) {
    console.log('target==',target)
    console.log('key11111111',key);
    
    
  }
  
  class Test {
    name: string
    constructor(name: string) {
      this.name = name
    }
    @getNameDecorator
    static getName() {
      return 'this.name'
    }
  }
  export {}