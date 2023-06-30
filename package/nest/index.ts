
//类装饰器
const doc:ClassDecorator = (target) => {
    console.log('target',target);
    target.prototype.name = 'xiaoming';   
}
@doc
class Xiao{
    constructor(name:string){

    }
}
const xiao:any = new Xiao('xiaoming');
console.log('xiao',xiao.name);



 //属性装饰器
const doc1:PropertyDecorator = (target,property) => {
    console.log('target',target);
    console.log('property',property);
}
class Xiao1{
    @doc1
    public name:string;
    constructor(name:string){
        this.name = name;
    }
}



 //方法装饰器
 const doc2:MethodDecorator = (target,property,descriptor) => {
        console.log('target',target);
        console.log('property',property);
        console.log('descriptor',descriptor);
        
 }
    class Xiao2{
        public name:string;
        constructor(name:string){
            this.name = name;
        }
        @doc2
        public getName(){
            return this.name;
        }
    }

    
