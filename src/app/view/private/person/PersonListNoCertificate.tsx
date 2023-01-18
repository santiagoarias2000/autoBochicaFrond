import { useState, useEffect } from "react";
import Person from "../../../models/Person";
import ServicePrivate from "../../../server/ServicePrivate";
import ApiBack from "../../../util/domins/ApiBack";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { getLocalDate } from "../../../util/funtion/FormatDate";
import PersonCRUD from "../../../models/PersonCRUD";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { MensajeToastify } from "../../../util/funtion/MensajeToastify";
import { ToastContainer } from "react-toastify";

import "../../../../assets/css/styleBody.css";

export const PersonListNoCertificate = () => {
  const [arrayPerson, setArrayPerson] = useState<PersonCRUD[]>([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [objPers, setObjPers] = useState<PersonCRUD>(
    new PersonCRUD(
      0,
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    )
  );

  const getMePerson = async () => {
    const result = await ServicePrivate.petitionGET(
      ApiBack.PERSON_PRIVATE_FILTERNOCERTIFI
    );
    setArrayPerson(result);
  };
  console.log(arrayPerson);

  const deletePerson = async (idPerson: number) => {
    const urlDelete = ApiBack.PERSON_PRIVATE_DELETE + "/" + idPerson;
    const result = await ServicePrivate.peticionDELETE(urlDelete);
    console.log(result);
    if (typeof result === "undefined") {
      MensajeToastify("error", "No se puede eliminar la persona.", 7000);
    } else {
      MensajeToastify(
        "success",
        "La persona con número de cedula: " +
          objPers.numbers +
          " ha sido eliminado",
        7000
      );
    }
    getMePerson();
  };

  useEffect(() => {
    getMePerson();
  }, []);
  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Personas</h1>
        <nav>
          <ol className="breadcrumb">
            <li>
            <a>
            <Link to={"/home/personview/"} className="breadcrumb-item"> Listado de personas</Link>
            </a>
            </li>
            
          </ol>
        </nav>
      </div>
      {/* Navegación estilo breadcrumb: Fin */}
      <div className="filter_list">
        <Link to={"/home/personfilterCerti/"}>
          <button className="css-button css-button-3d css-button-3d--sand">
            Personas certificadas
          </button>
        </Link>
        <Link to={"/home/personfilterNoCerti/"}>
          <button className="css-button css-button-3d css-button-3d--sand">
            Personas no certificadas
          </button>
        </Link>
      </div>

      {/* Ejemplo de una tabla para presentación de datos: Inicio */}
      <div className="col-lg-12">
        <div className="card">
          <div className="card-body">
            <ScrollMenu>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th style={{ width: "5%" }}>id</th>
                    {/* <th style={{ width: "40%" }}>Fotos</th>
                    <th style={{ width: "40%" }}>huella</th> */}
                    <th style={{ width: "40%" }}>Nombres</th>
                    <th style={{ width: "40%" }}>Apellidos</th>
                    <th style={{ width: "40%" }}>Correo</th>
                    <th style={{ width: "20%" }}>Fecha de nacimento</th>
                    <th style={{ width: "15%" }}>Genero</th>
                    <th style={{ width: "20%" }}>Tipo de sangre</th>
                    <th style={{ width: "20%" }}>Documento</th>
                    <th style={{ width: "20%" }}>Expedido en</th>
                    <th style={{ width: "20%" }}>Dirección</th>
                    <th style={{ width: "20%" }}>Fecha de titulacion</th>
                    <th style={{ width: "20%" }}>Estado del certificado</th>
                    <th style={{ width: "20%" }}>Ocupación</th>
                    <th style={{ width: "20%" }}>Telefono</th>
                    <th style={{ width: "20%" }}>Estrato</th>
                    <th style={{ width: "20%" }}>Sisben</th>
                    <th style={{ width: "20%" }}>Estado civil</th>
                    <th style={{ width: "20%" }}>Educación</th>
                    <th style={{ width: "20%" }}>Ciudad</th>
                    <th style={{ width: "20%" }}>Vehículo</th>
                    <th style={{ width: "20%" }}>Curso</th>
                    <th style={{ width: "20%" }}>Valor</th>
                    <th style={{ width: "20%" }}>Ciudad</th>
                    <th style={{ width: "20%" }}>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {arrayPerson.map((myPerson, contador) => (
                    <tr key={contador}>
                      <td>{contador + 1}</td>
                      <td>
                        {" "}
                        {myPerson.firstName} {myPerson.secondName}{" "}
                      </td>
                      <td>
                        {" "}
                        {myPerson.firstLastName} {myPerson.secondLastName}{" "}
                      </td>
                      <td>{myPerson.mail}</td>
                      <td>{myPerson.birthdat}</td>
                      <td>{myPerson.typeGender}</td>
                      <td>
                        {myPerson.type}
                        {myPerson.rh}
                      </td>
                      <td>
                        {myPerson.numbers} {myPerson.typeDocument}
                      </td>
                      <td>{myPerson.issuedIn}</td>
                      <td>{myPerson.direction}</td>
                      <td>{getLocalDate(myPerson.dateTuition)}</td>
                      <td>{myPerson.stateCertificate}</td>
                      <td>{myPerson.occupation}</td>
                      <td>{myPerson.phoneNumber}</td>
                      <td>{myPerson.nameStractum}</td>
                      <td>{myPerson.nameSisben}</td>
                      <td>{myPerson.typeCivilStatus}</td>
                      <td>{myPerson.nameEducationLevel}</td>
                      <td>{myPerson.nameCity}</td>
                      <td>{myPerson.licensePlate}</td>
                      <td>
                        {myPerson.nameCourse} - {myPerson.timeCourse}
                      </td>
                      <td>{myPerson.valueReceipt}</td>
                      <td>{myPerson.nameCity}</td>
                      <td>
                        {" "}
                        <Link to={"/home/persondetails/" + myPerson.idPerson}>
                          <i className="fa-solid fa-magnifying-glass fa-sm"></i>
                        </Link>{" "}
                        <a
                          href="/#"
                          onClick={(e) => {
                            e.preventDefault();
                            setShow(true);
                            setObjPers(myPerson);
                          }}
                        >
                          <i
                            className="fa-solid fa-trash-can fa-sm"
                            style={{ color: "#990000" }}
                          ></i>
                        </a>{" "}
                        <Link to={"/home/personupdate/" + myPerson.idPerson}>
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
            </ScrollMenu>
            {/* Modal to delete Person */}
            {/* *********************************************************************************/}
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Eliminar persona</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                ¿Realmente desea eliminar a la persona del sistema?
                <br />
                <strong className="center">
                  &nbsp; {objPers.firstName} {objPers.secondName}{" "}
                  {objPers.firstLastName} {objPers.secondLastName}
                  <br />
                  &nbsp; Identificación: {objPers.numbers}
                  <br />
                  &nbsp; Curso actual: {objPers.nameCourse}
                </strong>
                <br />
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
                    deletePerson(objPers.idPerson);
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