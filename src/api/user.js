import { basePath, apiVersion } from "./config";

export function signUpApi(data) {
  const url = `${basePath}/${apiVersion}/signup`;
  /*  http://localhost:3977/api/v1/signup  */
  console.log(url);
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  /* Cuando se crea el usuario se devuelve un objeto user_creado */
  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      if (result.user) {
        return {
          user_creado: true,
          message: "Usuario creado correctamente",
        };
      }
      return {
        user_creado: false,
        message: result.message,
      };
    })
    .catch((err) => {
      return {
        user_creado: false,
        message: err.message,
      };
    });
}


export function signIn(data) {
  const url = `${basePath}/${apiVersion}/signin`;
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((err) => {
      return err.message;
    });
}
