import { useState, useEffect } from "react";
import ServicePrivate from "../../../server/ServicePrivate";
import ApiBack from "../../../util/domins/ApiBack";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { getLocalDate } from "../../../util/funtion/FormatDate";
import { Link } from "react-router-dom";
import StateCertificate from "../../../models/StateCertificate";

export const StateCertificateList = () => {
  const [arrayCertificate, setArrayCertificate] = useState<StateCertificate[]>([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [objCerti, setObjCerti] = useState<StateCertificate>(
    new StateCertificate(0, "")
  );

  const getMeCertificate = async () => {
    const result = await ServicePrivate.petitionGET(
      ApiBack.STATECERTIFICATE_PRIVATE_VIEW
    );
    setArrayCertificate(result);
    console.log(result);
    
  };


  useEffect(() => {
    getMeCertificate();
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
                    <th style={{ width: "40%" }}>Estado</th>
                    <th style={{ width: "20%" }}>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {arrayCertificate.map((myStaCert, contador) => (
                    <tr key={contador}>
                      <td>{contador + 1}</td>
                      <td>
                        {myStaCert.stateCertificate}
                      </td>
                      <td>
                        {" "}
                        <Link to={"/home/vehiclesdetails/" + myStaCert.idStateCertificate}>
                          <i className="fa-solid fa-magnifying-glass fa-sm"></i>
                        </Link>{" "}
                        <a
                          href="/#"
                          onClick={(e) => {
                            e.preventDefault();
                            setShow(true);
                            setObjCerti(myStaCert);
                          }}
                        >
                          <i
                            className="fa-solid fa-trash-can fa-sm"
                            style={{ color: "#990000" }}
                          ></i>
                        </a>{" "}
                        <Link to={"/home/vehiclesupdate/" + myStaCert.idStateCertificate}>
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
