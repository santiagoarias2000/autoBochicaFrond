import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { ToastContainer } from "react-toastify";

import ApiBack from "../../../util/domins/ApiBack";
import { useForm } from "../../../util/hook/useForm";
import ServicePrivate from "../../../server/ServicePrivate";
import { MensajeToastify } from "../../../util/funtion/MensajeToastify";
import { getLocalDate } from "../../../util/funtion/FormatDate";
import Vehicles from "../../../models/Vehicles";

export const VehiclesUpdate = () => {
  // Variables
  let { idVehicle } = useParams();

  const [allReady, setAllReady] = useState<boolean>(false);
  let chargerEnd = allReady !== false;

  type formaHtml = React.FormEvent<HTMLFormElement>;
  const [inProcess, setInProcess] = useState<boolean>(false); // *******************************************************************

  // Hook para formulario
  let {
    typeVehicle,
    licensePlate,
    dateSoat,
    dateTecnomecanical,
    doubleLink,
    myObject,
  } = useForm<Vehicles>(new Vehicles(0, "", "", new Date(), new Date()));
  // *******************************************************************

  // Consulta los datos de un usuario por su _id
  // *******************************************************************
  const getMeOneVehicle = async () => {
    const urlChargerOneVehicle =
      ApiBack.VEHICLES_PRIVATE_DETAILS + "/" + idVehicle;
    const usuReceived = await ServicePrivate.petitionGET(urlChargerOneVehicle);
    if (usuReceived) {
        myObject.idVehicle = usuReceived.idVehicle  
      myObject.typeVehicle = usuReceived.typeVehicle;
      myObject.licensePlate = usuReceived.licensePlate;
      myObject.dateSoat = usuReceived.dateSoat;
      myObject.dateTecnomecanical = usuReceived.dateTecnomecanical;
      if (usuReceived) {
        setAllReady(true);
      }
    }
  };
  // *******************************************************************

  // ************************************************************************

  // Actualizar el perfil
  // *******************************************************************
  const sendForm = async (fh: formaHtml) => {
    fh.preventDefault();
    setInProcess(true);
    const formulario = fh.currentTarget;
    formulario.classList.add("was-validated");

    if (formulario.checkValidity() === false) {
      fh.preventDefault();
      fh.stopPropagation();
    } else {
      const urlUpdate = ApiBack.VEHICLES_PRIVATE_UPDATE;
      const objectUpdate = new Vehicles(
        myObject.idVehicle,
        myObject.typeVehicle,
        myObject.licensePlate,
        new Date(),
        new Date()
      );
      console.log(objectUpdate);

      const resultado = await ServicePrivate.peticionPUT(
        urlUpdate,
        objectUpdate
      );

      if (resultado) {
        setInProcess(false);
        MensajeToastify("success", "Vehículo actualizado correctamente", 7000);
      } else {
        MensajeToastify(
          "error",
          "No se puede actualizar el Vehículo. Verifique la información",
          7000
        );
      }
    }
  };
  // *******************************************************************

  // Hook para cargar información una vez renderizado el componente
  useEffect(() => {
    getMeOneVehicle();
  }, []);
  // *****************************
  return (
    <main id="main" className="main">
      {/* Navegación estilo breadcrumb: Inicio */}
      <div className="pagetitle">
        <h1>Vehículos</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/home">Inicio</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/home/vehiclesview">Listado de vehículos</Link>
            </li>
            <li className="breadcrumb-item active">Actualizar</li>
          </ol>
        </nav>
      </div>
      {/* Navegación estilo breadcrumb: Fin */}

      {/* Ejemplo de formulario: Inicio */}
      <div className="col-lg-12">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-center">Formulario de Actualización</h5>

            {chargerEnd ? (
              <Form noValidate validated={inProcess} onSubmit={sendForm}>
                <Form.Group as={Row} className="mb-3" controlId="idVehicle">
                  <Form.Label column sm={2}>
                    Tipo de vehiculo:
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      required
                      type="text"
                      name="idVehicle"
                      className="form-control"
                      value={idVehicle}
                      onChange={doubleLink}
                    />
                    <Form.Control.Feedback type="invalid">
                      El tipo de vehiculo es obligatorio
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>

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

                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="dateTecnomecanical"
                >
                  <Form.Label column sm={2}>
                    Fecha del Tecnico mecánica:
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      required
                      type="date"
                      name="dateTecnomecanical"
                      className="form-control"
                      value={dateTecnomecanical.valueOf()}
                      onChange={doubleLink}
                    />
                    <Form.Control.Feedback type="invalid">
                    Fecha del Tecnico mecánica es obligatoria
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                  <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit" className="bi bi-node-plus-fill">
                      {" "}
                      Actualizar vehículo{" "}
                    </Button>
                  </Col>
                </Form.Group>
              </Form>
            ) : (
              <div>Cargando información de los perfiles....</div>
            )}
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
