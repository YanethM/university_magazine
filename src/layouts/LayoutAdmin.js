import React, { useState } from "react";
import { Layout } from "antd";
import MenuTop from "../components/AdminComponents/MenuTop";
import MenuSider from "../components/AdminComponents/MenuSidebar";
import "./LayoutAdmin.scss";

export default function LayoutAdmin(props) {
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const { Header, Content, Footer } = Layout;
  const { routes } = props;
  console.log({routes})
  return (
    <Layout>
      <MenuSider menuCollapsed={menuCollapsed} />
      <Layout
        className="layout-admin"
        style={{ marginLeft: menuCollapsed ? "80px" : "200px" }}
      >
        <Header className="layout-admin__header">
          <MenuTop
            menuCollapsed={menuCollapsed}
            setMenuCollapsed={setMenuCollapsed}
          />
        </Header>
        <Content className="layout-admin__content">
        
           {/*  <LoadRoutes routes={routes}  /> */}
    
        </Content>
        <Footer className="layout-admin__footer">MERN Project</Footer>
      </Layout>
    </Layout>
  );
}
/* function LoadRoutes({routes}) {
  return routes.map((route, index) => (
    <Route
      key={index}
      path={route.path}
      element={route.component}
    />
  ));
} */
