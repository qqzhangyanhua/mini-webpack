// const userInfo: any = undefined
// class Test {
//   getName() {
//     try {
//       return userInfo.name
//     } catch (error) {
//       console.log('userInfo.name 不存在')
//     }
//   }
//   getAge() {
//     try {
//       return userInfo.age
//     } catch (error) {
//       console.log('userInfo.age 不存在')
//     }
//   }
// }
// const test = new Test()
// test.getName() // userInfo.name 不存在
function catchError(target: any, key: string, descriptor: PropertyDescriptor) {
  console.log("descriptor", descriptor.value);

  const fn = descriptor.value; // 对应的方法
  descriptor.value = function () {
    try {
      fn();
    } catch (error) {
      console.log(`userInfo ${key} error`);
    }
  };
}

const userInfo: any = undefined;
class Test {
  @catchError
  getName() {
    return userInfo.name;
  }
  @catchError
  getAge() {
    return userInfo.age;
  }
}
const test = new Test();
test.getName(); // userInfo getName error
test.getAge(); // userInfo getAge error
