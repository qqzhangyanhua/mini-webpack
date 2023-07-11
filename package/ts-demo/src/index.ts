let name = "1111";
// 一般情况下会有类型推导

let strOrNum: string | number;
strOrNum = 1;
strOrNum = "1";
// ! 非空断言
const ele = document.getElementById("app")!;
ele!.style.color = "red";

//字面量类型
type Direction = "up" | "down" | "left" | "right";
const ds: Direction = "right";

function Summary(x: number, y: number): number {
  return x + y;
}
let sum = () => {};

class Circle {
  public val!: number;
  constructor() {}
  getValue() {
    this.val = 1;
  }
}

class Animal {}
class Dog extends Animal {
  public age: number;
  constructor(protected name: string) {
    super();
    this.name = name;
    this.age = 1;
  }
  sayHi() {
    return `My name is ${this.name}`;
  }
}
const dog = new Dog("dog");
dog.sayHi();
export default {};
