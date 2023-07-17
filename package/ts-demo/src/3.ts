interface IName {
  name: string;
  age: number;
  job: string;
  address?: string;
}

const person1: IName = {
    name: "xiaoming",
    age: 18,
    job: "student",
}
type IName1 =  Omit<IName, "name">;
type IName2 =  Pick<IName, "age" | "job"|'name'>;
const person2: IName1 = {
    age: 18,
    job: "student",
}
const person3: IName2 = {
    age: 18,
    job: "student",
    name: "xiaoming",
}

export default {};
