import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { items } from "./layout-data";
import { useSelector } from "react-redux";

const { Header, Sider, Content } = Layout;

const menu = items.map((item, index) => ({
  key: index.toString(),
  label: <Link to={item.path}>{item.title}</Link>,
}));

export const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.user?.token); // Redux dan token olish

  React.useEffect(() => {
    const localUser = localStorage.getItem("user");
    if (!token && !localUser) {
      navigate("/");
    }
  }, [token]);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[menu[0]?.key]} items={menu} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: "#e5e5e5" }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ fontSize: "16px", width: 64, height: 64 }}
          />
        </Header>
        <Content style={{ margin: "24px 16px", padding: 24, minHeight: 280, background: "#e5e5e5", borderRadius: "20px" }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
