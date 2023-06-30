function log(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    let originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      console.log("wrapped function: before invoking " + propertyKey);
      let result = originalMethod.apply(this, args);
      console.log("wrapped function: after invoking " + propertyKey);
      return result;
    };
  }
  
  class Task {
    @log
    runTask(arg: any): any {
      console.log("runTask invoked, args: " + arg);
      return "finished";
    }
  }
  
  let task = new Task();
  let result = task.runTask("learn ts");
  console.log("result: " + result);
  