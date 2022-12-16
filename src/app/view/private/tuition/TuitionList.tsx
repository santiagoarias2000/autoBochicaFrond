import { useState, useEffect } from "react";
import Tuition from "../../../models/Tuition";
import ServicePrivate from "../../../server/ServicePrivate";
import ApiBack from "../../../util/domins/ApiBack";
import { getLocalDate, getLocalDates } from "../../../util/funtion/FormatDate";


export const TuitionList = () => {
  const [arrayTuition, setArrayTuiton] = useState<Tuition[]>([]);

  const getMeTuition = async () => {
    const result = await ServicePrivate.petitionGET(
      ApiBack.TUITIONS_PRIVATE_VIEW
    );
    setArrayTuiton(result);
    console.log(result);
    
  };

  useEffect(() => {
    getMeTuition();
  }, []);

  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Niveles educativos</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Inicio</a>
            </li>
            <li className="breadcrumb-item active">Listado de niveles educativos</li>
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
                  <th style={{ width: "20%" }}>Nombre marticulas</th>

                </tr>
              </thead>
              <tbody>
                {arrayTuition.map((myTuition, contador) => (
                  <tr key={contador}>
                    <td>{contador + 1}</td>
                    <td>{myTuition.nameTuition}</td>

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