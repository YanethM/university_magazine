import React from "react";
import { Layout, Tabs } from "antd";
import Login from "../../../components/AdminComponents/Login";
import Register from "../../../components/AdminComponents/Register";

export default function SignIn() {
  const { Content } = Layout;
  const { TabPane } = Tabs;
  return (
    <Layout>
      <Content>
        <Tabs type="card">
          <TabPane tab={<span>Iniciar sesión</span>} key="1">
            <Login />
          </TabPane>
          <TabPane tab={<span>Registro</span>} key="2">
            <Register />
          </TabPane>
        </Tabs>
      </Content>
    </Layout>
  );
}
