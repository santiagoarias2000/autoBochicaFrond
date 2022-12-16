import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { ToastContainer } from "react-toastify";

import { useState } from "react";
import ServicePrivate from "../../../server/ServicePrivate";
import ApiBack from "../../../util/domins/ApiBack";
import { useForm } from "../../../util/hook/useForm";
import { MensajeToastify } from "../../../util/funtion/MensajeToastify";
import Vehicles from "../../../models/Vehicles";


export const VehiclesCreate = () => {
  
// Variables
const defaultValue = new Date().toISOString(); //yyyy-mm-dd
type formaHtml = React.FormEvent<HTMLFormElement>;
const [enProceso, setEnProceso] = useState<boolean>(false);
let { typeVehicle, licensePlate,dateSoat,dateTecnomecanical, doubleLink, myObject } = useForm<Vehicles>(
  new Vehicles(0,"","",new Date(),new Date())
);


// *******************************************************************

// Función flecha para limpiar cajas
const cleanBoxs = (formulario: HTMLFormElement) => {
  formulario.reset();

  myObject.typeVehicle = "";
  myObject.licensePlate = "";
  myObject.dateSoat = new Date();
  myObject.dateTecnomecanical = new Date();

  formulario.typeVehicle.value = "";
  formulario.licensePlate.value = "";
  formulario.dateSoat.value = "";
  formulario.dateTecnomecanical.value = "";

  formulario.classList.remove("was-validated");
};

// Crear el perfil
// *******************************************************************
const sendForm = async (fh: formaHtml) => {
  fh.preventDefault();
  setEnProceso(true);
  const formulario = fh.currentTarget;
  formulario.classList.add("was-validated");

  if (formulario.checkValidity() === false) {
    fh.preventDefault();
    fh.stopPropagation();
  } else {
    const restultado = await ServicePrivate.peticionPOST(
      ApiBack.VEHICLES_PRIVATE_CREATE,
      myObject
    );
    console.log(myObject);
    
    if (restultado) {
      setEnProceso(false);
      MensajeToastify("info", "Vehiculo creado con exito", 7000);
    }else{
      MensajeToastify("error", "El vehiculo no se creo con exito", 7000);
    }
    // cleanBoxs(formulario);
  }
};

//crear
  return (
    <main id="main" className="main">
      {/* Navegación estilo breadcrumb: Inicio */}
      <div className="pagetitle">
        <h1>Vehículo</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Inicio</a>
            </li>
            <li className="breadcrumb-item active">Crear vehículo</li>
          </ol>
        </nav>
      </div>
      {/* Navegación estilo breadcrumb: Fin */}

      {/* Ejemplo de formulario: Inicio */}
      <div className="col-lg-12">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-center">Formulario de creación para vehículos</h5>

            <Form noValidate validated={enProceso} onSubmit={sendForm}>
              <Form.Group as={Row} className="mb-3" controlId="typeVehicle">
                <Form.Label column sm={2}>
                  Tipo de vehiculo: 
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    required
                    type="text"
                    name="typeVehicle"
                    placeholder="Tipo de vehiculo"
                    className="form-control"
                    value={typeVehicle}
                    onChange={doubleLink}
                  />
                  <Form.Control.Feedback type="invalid">
                    El tipo de vehiculo es obligatorio
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="licensePlate">
                <Form.Label column sm={2}>
                  Placa: 
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    required
                    type="text"
                    name="licensePlate"
                    placeholder="Placa"
                    className="form-control"
                    defaultValue={licensePlate}
                    onChange={doubleLink}
                  />
                  <Form.Control.Feedback type="invalid">
                La placa es obligatoria
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="dateSoat">
                <Form.Label column sm={2}>
                  Fecha del SOAT: 
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    required
                    type="date"
                    name="dateSoat"
                    className="form-control"
                    value={dateSoat.valueOf()}
                    onChange={doubleLink}
                  />
                  <Form.Control.Feedback type="invalid">
                  Fecha del SOAT es obligatoria
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="dateTecnomecanical">
                <Form.Label column sm={2}>
                  Fecha del Tecnico mecanica: 
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    required
                    type="date"
                    name="dateTecnomecanical"
                    className="form-control"
                    value={dateTecnomecanical.valueOf()}
                    defaultValue={defaultValue}
                    onChange={doubleLink}
                  />
                  <Form.Control.Feedback type="invalid">
                  Fecha del Tecnico mecanica es obligatoria
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>



              <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                  <Button type="submit" className="bi bi-node-plus-fill" > Crear vehÍculo </Button>
                </Col>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
      {/* Ejemplo de formulario: Inicio */}

      {/* Requerido para presentar los mensajes Toast: Inicio */}
      <ToastContainer />
      {/* Requerido para presentar los mensajes Toast: Fin */}
    </main>
  );
};