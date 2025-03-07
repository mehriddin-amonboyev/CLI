import React, { useState } from "react";
import { Layout, Menu, theme } from "antd";
import { items } from "./sider-router";
import { HeaderLayout } from "./header/header";
import { FooterLayout } from "./footer/footer";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { BreadcrumbComponent } from "./breadcrumbComponent";
import styles from './mainLayout.module.css'
const { Content, Sider } = Layout;

export const MainLayout: React.FC = () => {
  const navigate = useNavigate();
  React.useEffect(()=>{
    const token = localStorage.getItem("token");
    if(!token){
      navigate("/login")
    }
  },[navigate]);

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


  // Menu elementiga bosilganda ishlaydi
  const handleMenuClick = (e: { key: string }) => {
    navigate(e.key);
  };

  const menu = items.map((item) => {
    return {
      key: item.path,
      icon: React.createElement(item.icon),
      label: <Link to={`${item.path}`}>{item.label}</Link>,
      // children: item.children?.map((innerItem) => {
      //   return {
      //     key: innerItem.path,
      //     label: <Link to={innerItem.path}>{innerItem.label}</Link>,
      //   };
      // }),
    };
  });

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className={styles.sitelogo}>
          <Link to={'/app/dashboard'} className="logo">Savdo</Link>
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["/app/dashboard"]}
          // mode="inline"
          items={menu}
          onClick={handleMenuClick}
          style={{ paddingTop: 24}}
        />
      </Sider>
      <Layout>
        <HeaderLayout />
        <Content style={{ margin: "0 16px" }}>
          <BreadcrumbComponent />
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <FooterLayout />
      </Layout>
    </Layout>
  );
};
