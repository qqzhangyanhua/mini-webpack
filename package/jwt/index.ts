import express from "express";
import jwt from "jsonwebtoken";
import cors from "cors";
let app = express();
app.use(cors());
let key="jwt"
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// 1 d登陆接口返回token
let user ={
    name:'admin',
    password:'123456',
    id:1
}
app.post('/api/login', (req, res) => {
    if(req.body.name===user.name &&req.body.password===user.password){
        res.json({
            message:'登录成功',
            code:200,
            token:jwt.sign(user,key,{expiresIn:'1h'})
        })//返回token
    }else{
        res.status(400).json({message:'用户名或密码错误'})
    }
});
// 2.验证token返回list
app.get('/api/list',(req,res)=>{
    let token:any =req.headers.authorization;
    jwt.verify(token,key,(err:any,decode:any)=>{
    console.log('decodedecode',decode);

        if(err){
            res.status(401).json({message:'token失效'})
        }else{
            res.json({
                list:[
                    {name:'张三',id:1},
                    {name:'李四',id:2}
                ]
            })
        }
    });//验证token
    
})
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
