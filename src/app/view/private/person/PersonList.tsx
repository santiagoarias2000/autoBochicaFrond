import { useState, useEffect } from "react";
import Person from "../../../models/Person";
import ServicePrivate from "../../../server/ServicePrivate";
import ApiBack from "../../../util/domins/ApiBack";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { getLocalDate } from "../../../util/funtion/FormatDate";
import PersonCRUD from "../../../models/PersonCRUD";
import { Link } from "react-router-dom";
import TypesDocuments from "../../../models/TypeDocument";
import Vehicles from "../../../models/Vehicles";
import Tuition from "../../../models/Tuition";
import Courses from "../../../models/Courses";
import Stratums from "../../../models/Stractum";
import Sisbens from "../../../models/Sisbens";
import CivilStatus from "../../../models/CivilStatus";
import EducationLevel from "../../../models/EducactionLevel";
import Citys from "../../../models/Citys";
import TypesGenders from "../../../models/TypeGender";
import TypesSanguineous from "../../../models/TypesSanguineous";

export const PersonList = () => {
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
      ApiBack.PERSON_PRIVATE_VIEW
    );
    setArrayPerson(result);
  };
  console.log(arrayPerson);

  useEffect(() => {
    getMePerson();
  }, []);

  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Personas</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Personas</a>
            </li>
            <li className="breadcrumb-item active">Listado de personas</li>
          </ol>
        </nav>
      </div>
      {/* Navegación estilo breadcrumb: Fin */}

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
                      <td>{myPerson.typeCivilStatu}</td>
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
                        <Link to={"/home/vehiclesdetails/" + myPerson.idPerson}>
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
                        <Link to={"/home/vehiclesupdate/" + myPerson.idPerson}>
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
          </div>
        </div>
      </div>
    </main>
  );
};
