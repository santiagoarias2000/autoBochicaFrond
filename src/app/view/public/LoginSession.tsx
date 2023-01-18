import { useState } from "react";
import Form from "react-bootstrap/Form";
import { useForm } from "../../util/hook/useForm";

import { Link, useNavigate } from "react-router-dom";
import User from "../../models/User";

// import * as encriptar from "js-sha512";
import UserLogin from "../../server/UserLogin";
import ApiBack from "../../util/domins/ApiBack";
import "../../../assets/css/styleLogin.css";
import { MensajeToastify } from "../../util/funtion/MensajeToastify";
import { ToastContainer } from "react-toastify";

export const LoginSession = () => {
  //variables
  type formitHtml = React.FormEvent<HTMLFormElement>;
  const [inProcess, setInProcess] = useState<boolean>(false);
  const myNavegation = useNavigate();
  //myObject from tu useform
  let { mail, password, doubleLink, myObject } = useForm<User>(
    new User("", "")
  );

  //funtion clean box and variables
  const cleanBox = (miForm: HTMLFormElement) => {
    miForm.reset();
    myObject.password = "";
    myObject.mail = "";

    miForm.mail.value = "";
    miForm.password.value = "";

    miForm.classList.remove("was-validated");
  };

  const processForm = async (fh: formitHtml) => {
    fh.preventDefault();
    setInProcess(true);
    const formActual = fh.currentTarget;
    formActual.classList.add("was-validated");
    if (formActual.checkValidity() === false) {
      fh.preventDefault();
      fh.stopPropagation();
    } else {
      //   const passwordEncript = encriptar.sha512(myObject.password);
      //   myObject.password = passwordEncript;
      const urlInit = ApiBack.URL + ApiBack.USER_PUBLIC_LOGIN;
      const result = await UserLogin.UseServer(urlInit, myObject);

      if (result.miToken) {
        localStorage.setItem("tokenUsta", result.miToken);
        // console.log("Aca nos falta colocar el context");
        // console.log(result);
        // console.log('si entra esta verga');
        setInProcess(false);
        myNavegation("/home");
      } else {
        MensajeToastify("error", "Usuario o contraseña incorrectos", 7000);
        cleanBox(formActual);

      }
    }
  };
  return (
    <div>
      <div className="principal_color">
        <div className="container_login">
          <div className="icon_login">
            <i className="fa-regular fa-user"></i>
          </div>

          <Form
            className="row g-3"
            noValidate
            validated={inProcess}
            onSubmit={processForm}
          >
            <div className="col-12">
              <Form.Group controlId="mail" />
              <Form.Label className="text_login">Usuario*</Form.Label>
              <div className="input_login">
                <span>
                  <i className="fa-regular fa-user"></i>
                </span>
                <Form.Control
                  required
                  type="text"
                  placeholder="Usuario"
                  name="mail"
                  className="form-control "
                  value={mail}
                  onChange={doubleLink}
                />
              </div>

              <Form.Control.Feedback type="invalid">
                Debe digitar el usuario
              </Form.Control.Feedback>
            </div>

            <div className="col-12">
              <Form.Group controlId="password" />
              <Form.Label className="text_login">Contraseña*</Form.Label>
              <div className="input_login">
                <span>
                  <i className="fa-solid fa-lock"></i>
                </span>
                <Form.Control
                  required
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                  className="form-control"
                  value={password}
                  onChange={doubleLink}
                />
              </div>
              <Form.Control.Feedback type="invalid">
                Debe digitar la contraseña
              </Form.Control.Feedback>
            </div>

            <div className="col-12 button_d">
              <button className="button_login text_login" type="submit">
                Iniciar sesiòn
              </button>
            </div>
          </Form>
        </div>
      </div>
        {/* Requerido para presentar los mensajes Toast: Inicio */}
        <ToastContainer />
    </div>
  );
};
