import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Layout } from "antd";
import MenuTop from "../components/AdminComponents/MenuTop";
import MenuSider from "../components/AdminComponents/MenuSider";
import "./LayoutAdmin.scss";

export default function LayoutAdmin(props) {
  const [menuCollapsed, setMenuCollapsed] = useState(true);
  const { Header, Content, Footer } = Layout;
  const { children } = props;
  let navigate = useNavigate();
  /* Creamos la constante user para trabajar el login */
  const user = null;
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  if (user) {
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
          <Footer className="layout-admin__footer">MERN Project 2022</Footer>
        </Layout>
      </Layout>
    );
  }
}
