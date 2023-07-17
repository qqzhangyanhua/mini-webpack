class Animal3 {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
}
class Dog3 extends Animal3 {
  constructor(name: string) {
    super(name);
  }
}
const dog3 = new Dog3("dog");
const dog4 = new Dog3('sssj')

interface Ala {
  price: string;
}
interface Ala {
  age: number;
}

const ala: Ala = {
  price: "12",
  age: 12,
};

function add(x: number, y: number) {
  return x + y;
}

type Print = <T>(arg: T) => T;
const printFn: Print = (arg) => {
  return arg;
};

interface Print2 {
  name: string;
  age: number;
}
type Print3<T> = {
  [P in keyof T]: T[P];
};

interface Print4 {
  name: string;
  age: number;
}
type TRecord = Record<"name" | "age", Print4>;

let personMap: TRecord = {
  name: {
    name: "name",
    age: 12,
  },
  age: {
    name: "age",
    age: 12,
  },
};

type IName = Record<string, string>;
let nameMap: IName = {
    name: 'name',
  };

  const NAME_VALUE = 'name'
interface IPerson {
    name: string
    age: number
}
const getPersonName = (person: IPerson): IPerson => {
    console.log(person.name)
    return person
}

//剔求按面111除这个属性dadasOds
type IOmit = Omit<IPerson, 'age'>


const getName =()=>{
    return 123
}
