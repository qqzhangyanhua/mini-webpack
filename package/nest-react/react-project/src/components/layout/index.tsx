import { MenuDataItem, PageContainer, ProLayout } from "@ant-design/pro-components";
import { Link, useOutlet } from "react-router-dom";
import { ROUTE_CONFIG } from "../../routes";
const menuItemRender = (item:MenuDataItem,dom:React.ReactNode) => <Link to={item.path||'/'}>{dom}</Link>;
const Layout = () => {
  const outlet = useOutlet();
  return (
    <ProLayout
      layout="mix" 
      avatarProps={{
        src: "https://avatars.githubusercontent.com/u/8186664?s=60&v=4",
        title: "Nest React",
        size: "small",
        onClick: () => {
            console.log("点击头像");
        },
      }}
      title={false}
      logo="https://avatars.githubusercontent.com/u/8186664?s=60&v=4"
      route={{
        path:"/",
        routes: ROUTE_CONFIG
      }}
     menuItemRender={menuItemRender}
    >
      <PageContainer>{outlet}</PageContainer>
    </ProLayout>
  );
};
export default Layout;
