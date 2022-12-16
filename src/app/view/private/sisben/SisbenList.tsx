import { useState, useEffect } from "react";
import Sisbens from "../../../models/Sisbens";
import ServicePrivate from "../../../server/ServicePrivate";
import ApiBack from "../../../util/domins/ApiBack";

export const SisbenList = () => {
  const [arraySisben, setArraySisben] = useState<Sisbens[]>([]);

  const getMeSisben = async () => {
    const result = await ServicePrivate.petitionGET(
      ApiBack.SISBENS_PRIVATE_VIEW
    );
    setArraySisben(result);
  };

  useEffect(() => {
    getMeSisben();
  }, []);

  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Sisben</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Inicio</a>
            </li>
            <li className="breadcrumb-item active">Listado de sisben</li>
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

                </tr>
              </thead>
              <tbody>
                {arraySisben.map((mySisben, contador) => (
                  <tr key={contador}>
                    <td>{contador + 1}</td>
                    <td>{mySisben.nameSisben}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};
