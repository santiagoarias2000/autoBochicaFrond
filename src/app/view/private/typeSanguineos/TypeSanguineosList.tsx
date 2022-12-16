import { useState, useEffect } from "react";
import TypesSanguineous from "../../../models/TypesSanguineous";
import ServicePrivate from "../../../server/ServicePrivate";
import ApiBack from "../../../util/domins/ApiBack";

export const TypeSanguineousList = () => {
  const [arrayTypeSanguineous, setArrayTypeSanguineous] = useState<TypesSanguineous[]>([]);

  const getMeTSanguie = async () => {
    const result = await ServicePrivate.petitionGET(
      ApiBack.TYPESANGUINEOS_PRIVATE_VIEW

    );
    setArrayTypeSanguineous(result);
  };

  useEffect(() => {
    getMeTSanguie();
    
    
  }, []);

  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Tipos de sangre</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Inicio</a>
            </li>
            <li className="breadcrumb-item active">Listado de tipos de sangre</li>
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
                  <th style={{ width: "20%" }}>Tipo</th>
                  <th style={{ width: "20%" }}>Rh</th>

                </tr>
              </thead>
              <tbody>
                {arrayTypeSanguineous.map((myTSangi, contador) => (
                  <tr key={contador}>
                    <td>{contador + 1}</td>
                    <td>{myTSangi.type}</td>
                    <td>{myTSangi.rh}</td>
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
