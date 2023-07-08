import Login from "../contianers/login";
import Home from "../contianers/home";
export const ROUTE_CONFIG=[
    {
        path: '/',
        element: Home,
        title:'首页'
    },
    {
        path: '/login',
        element: Login,
        title:'登录'
    }
]