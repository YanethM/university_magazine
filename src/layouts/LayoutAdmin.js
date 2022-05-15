import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Layout } from "antd";
import MenuTop from "../components/AdminComponents/MenuTop";
import MenuSider from "../components/AdminComponents/MenuSider";
import { GithubOutlined } from "@ant-design/icons";

import "./LayoutAdmin.scss";

export default function LayoutAdmin(props) {
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const { Header, Content, Footer } = Layout;
  const { children } = props;
  /* let navigate = useNavigate();

   const user = null;
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  if (user) { */
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
        <Content className="layout-admin__content">{children}</Content>
        <Footer className="layout-admin__footer">
          <GithubOutlined style={{ fontSize: "17px" }} /> YanethM
        </Footer>
      </Layout>
    </Layout>
  );
}
/* }
 */
