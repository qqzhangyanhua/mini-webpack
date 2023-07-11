import Login from "../contianers/login";
import Home from "../contianers/home";
import { BankOutlined } from "@ant-design/icons";

interface RouteConfig {
  path: string;
  element: () => JSX.Element;
  name?: string;
  icon?: React.ReactNode;
  hideInMenu?: boolean;
}
export const ROUTE_KEY = {
  HOME: "home",
  LOGIN: "login",
  PAGE_NOT_FOUND: "page-not-found",
};
export const ROUTE_CONFIG:Record<string,RouteConfig> = {
  [ROUTE_KEY.HOME]: {
    path: "/home",
    element: Home,
    name: "首页",
    icon: <BankOutlined />,
  },
  [ROUTE_KEY.LOGIN]: {
    path: "/menus",
    element: Login,
    // hideInMenu:true,
    name: "登录菜单",
  },
};

export const routes: RouteConfig[] = Object.values(ROUTE_CONFIG);

export const getRouteByKey = (key: string) => ROUTE_CONFIG[key];
