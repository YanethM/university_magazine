import React, { useState } from "react";
import { Form, Input, Select, Button, Row, Col, notification } from "antd";
import {
  UserAddOutlined
} from "@ant-design/icons";
import { signIn } from "../../../../api/user";
import { getAccessToken } from "../../../../api/auth";
import "./AddUser.scss";

export default function EditUser(props) {
  const { setVisibleModal, setReloadUser } = props;
  const [userData, setUserData] = useState({});
  const accessToken = getAccessToken();
  const addUser = (event) => {
    event.preventDefault();
    /* Validar si el usuario no existe para poderlo crear */
    /* 1. Validamos si el usuario diligencio todos los campos del formulario */
    !userData.name_user ||
    !userData.lastname ||
    !userData.role ||
    !userData.email ||
    !userData.password ||
    !userData.repeatPassword
      ? notification["error"]({
          message: "Todos los campos deben ser diligenciados",
        })
      : userData.password !== userData.repeatPassword
      ? /* Validamos si el campo password coincide en valor con el campo repeatPassword */
        notification["error"]({
          message: "Las contraseñas no coinciden",
        })
      : /* Las contraseñas si coinciden, debemos pasar al sigIn el accessToken y el payload */
        signIn(accessToken, userData)
          .then((result) => {
            notification["success"]({
              message: result,
            });
            setVisibleModal(false);
            setReloadUser(true);
            setUserData({});
          })
          .catch((err) => {
            notification["error"]({
              message: err,
            });
          });
  };
  return (
    <div>
      <AddForm
        userData={userData}
        setUserData={setUserData}
        addUser={addUser}
      ></AddForm>
    </div>
  );
}

const AddForm = (props) => {
  const { userData, setUserData, addUser } = props;
  /* Trabajar con un select o lista desplegable */
  const { Option } = Select;
  /* Formulario */
  return (
    <Form>
      <Form className="form-edit" onSubmit={addUser}>
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item>
              <Input
                prefix={<UserAddOutlined />}
                placeholder="Nombre"
                value={userData.name}
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item>
              <Input
                prefix={<UserAddOutlined />}
                placeholder="Apellidos"
                value={userData.lastname}
                onChange={(e) =>
                  setUserData({ ...userData, lastname: e.target.value })
                }
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={24}>
          <Col span={12}>
            <Form.Item>
              <Input
                prefix={<UserAddOutlined />}
                placeholder="Correo electronico"
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item>
              <Select
                placeholder="Seleccióna una rol"
                onChange={(e) => setUserData({ ...userData, role: e })}
                value={userData.role}
              >
                <Option value="admin">Administrador</Option>
                <Option value="editor">Editor</Option>
                <Option value="reviewr">Revisor</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={24}>
          <Col span={12}>
            <Form.Item>
              <Input
                prefix={<UserAddOutlined />}
                type="password"
                placeholder="Contraseña"
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item>
              <Input
                prefix={<UserAddOutlined />}
                type="password"
                placeholder="Repetir contraseña"
                onChange={(e) =>
                  setUserData({ ...userData, repeatPassword: e.target.value })
                }
              />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="btn-submit">
            Crear Usuario
          </Button>
        </Form.Item>
      </Form>
    </Form>
  );
};
