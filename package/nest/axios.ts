import axios from "axios";
const Get = (url:string) => {
    return (target:any,key:any,descriptor:any)=>{
        const fnc = descriptor.value;
        axios.get(url).then((res)=>{
            fnc(res,{
                status:200,
                success:true,
            });
        }).catch((err)=>{
            fnc(err,{
                status:500,
                success:false,
            });
        })
    }
    // return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    //     const originalMethod = descriptor.value;
    //     descriptor.value = async function (...args: any[]) {
    //         const result = await axios.get(url);
    //         return result.data;
    //     };
    //     return descriptor;
    // }
};
class Controller {
  constructor() {}
  @Get("https://api.apiopen.top/api/users?page=2&size=10")
  getList(res:any,status:any) {
    console.log(res.data.result);
  }
}
