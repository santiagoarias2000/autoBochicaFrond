import { useState, useEffect } from "react";
import Stratums from "../../../models/Stractum";
import ServicePrivate from "../../../server/ServicePrivate";
import ApiBack from "../../../util/domins/ApiBack";

export const StratumList = () => {
  const [arrayStratum, setArrayStratum] = useState<Stratums[]>([]);

  const getMeStratum = async () => {
    const result = await ServicePrivate.petitionGET(
      ApiBack.STRACTUM_PRIVATE_VIEW
    );
    setArrayStratum(result);
  };

  useEffect(() => {
    getMeStratum();
  }, []);

  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Estratos sociales</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Inicio</a>
            </li>
            <li className="breadcrumb-item active">Listado de estratos sociales</li>
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
                {arrayStratum.map((myStratum, contador) => (
                  <tr key={contador}>
                    <td>{contador + 1}</td>
                    <td>{myStratum.nameStractum}</td>
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
