import React, { useState } from "react";
import { Form, Input, Select, Button, Row, Col, notification } from "antd";
import {} from "@ant-design/icons";
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
  return <Form>
      {/* Crear formulario que cumple con el diseño */}
  </Form>;
};
