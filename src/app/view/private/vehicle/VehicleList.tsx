import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Vehicles from "../../../models/Vehicles";
import ServicePrivate from "../../../server/ServicePrivate";
import ApiBack from "../../../util/domins/ApiBack";
import { getLocalDate, getLocalDates } from "../../../util/funtion/FormatDate";
import { MensajeToastify } from "../../../util/funtion/MensajeToastify";
import { Button, Modal } from "react-bootstrap";
import { ToastContainer } from "react-toastify";


export const VehiclesList = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [objVehi, setObjVehi] = useState<Vehicles>( new Vehicles(0,"", "", new Date(), new Date()));

  const [arrayVehicles, setArrayVehicles] = useState<Vehicles[]>([]);

  const getMeVehicles = async () => {
    const result = await ServicePrivate.petitionGET(
      ApiBack.VEHICLES_PRIVATE_VIEW
    );
    setArrayVehicles(result);
    
  };

  const deleteVehicle = async (idVehicle: number) => {
    const urlDelete = ApiBack.VEHICLES_PRIVATE_DELETE + "/" + idVehicle;
    const result = await ServicePrivate.peticionDELETE(urlDelete);
    console.log(result);
    if (typeof result === "undefined") {
      MensajeToastify("error", "No se puede eliminar el vehiculo.", 7000);
    } else {
      MensajeToastify( "success", "El vehiculo con placa: " + objVehi.licensePlate + " ha sido eliminado", 7000 );
    }
    getMeVehicles();
  };
  useEffect(() => {
    getMeVehicles();
  }, []);

  
  
  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Vehículos</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Inicio</a>
            </li>
            <li className="breadcrumb-item active">Listado de vehículos</li>
          </ol>
        </nav>
      </div>
      {/* Navegación estilo breadcrumb: Fin */}

      {/* Ejemplo de una tabla para presentación de datos: Inicio */}
      <div className="col-lg-12">
        <div className="card">
          <div className="card-body">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th style={{ width: "5%" }}>id</th>
                  <th style={{ width: "20%" }}>Nombre</th>
                  <th style={{ width: "20%" }}>Tiempo del curso</th>
                  <th style={{ width: "20%" }}>Fecha del soat</th>
                  <th style={{ width: "20%" }}>Fecha de la Tecnico Mecánica</th>
                  <th style={{ width: "10%" }}>Administración</th>

                </tr>
              </thead>
              <tbody>
                {arrayVehicles.map((myVehicle, contador) => (
                  <tr key={contador}>
                    <td>{contador + 1}</td>
                    <td>{myVehicle.licensePlate}</td>
                    <td>{myVehicle.typeVehicle}</td>
                    <td>{getLocalDate(myVehicle.dateSoat)}</td>
                    <td>{getLocalDate(myVehicle.dateTecnomecanical)}</td>
                    <td className="text-center align-middle">
                      <Link to={"/home/vehiclesdetails/" + myVehicle.idVehicle}>
                        <i className="fa-solid fa-magnifying-glass fa-sm"></i>
                      </Link>{" "}
                      <a
                        href="/#"
                        onClick={(e) => {
                          e.preventDefault();
                          setShow(true);
                          setObjVehi(myVehicle);
                        }}
                      >
                        <i
                          className="fa-solid fa-trash-can fa-sm"
                          style={{ color: "#990000" }}
                        ></i>
                      </a>{" "}
                      <Link to={"/home/vehiclesupdate/" + myVehicle.idVehicle}>
                        <i
                          className="fa-regular fa-pen-to-square"
                          style={{ color: "#006600" }}
                        ></i>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Modal to delete Vehicles */}
            {/* *********************************************************************************/}
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Eliminar vehículo</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                ¿Realmente desea eliminar el vehículo con placa?
                <br />
                <strong className="center">
                 &nbsp; {objVehi.licensePlate} 
                </strong>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="secondary"
                  onClick={(e) => {
                    setShow(false);
                  }}
                >
                  Cancelar
                </Button>
                <Button
                  variant="danger"
                  onClick={(e) => {
                    deleteVehicle(objVehi.idVehicle);
                    setShow(false);
                  }}
                >
                  Eliminar
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
      <ToastContainer />
    </main>
  );
};