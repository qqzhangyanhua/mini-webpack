class Animal3{
    private name:string;
    constructor(name:string){
        this.name = name;
    }
}
class Dog3 extends Animal3{
    constructor(name:string){
        super(name);
    }
}
const dog3 = new Dog3("dog");