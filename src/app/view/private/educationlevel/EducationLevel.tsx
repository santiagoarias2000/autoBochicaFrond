import { useState, useEffect } from "react";
import EducationLevel from "../../../models/EducactionLevel";
import ServicePrivate from "../../../server/ServicePrivate";
import ApiBack from "../../../util/domins/ApiBack";


export const EduLevelList = () => {
  const [arrayEducactionLevel, setArrayEducationLevel] = useState<EducationLevel[]>([]);

  const getMeEducationLevel = async () => {
    const result = await ServicePrivate.petitionGET(
      ApiBack.EDUCATIONLEVEL_PRIVATE_VIEW

    );
    setArrayEducationLevel(result);
  };

  useEffect(() => {
    getMeEducationLevel();
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
                  <th style={{ width: "20%" }}>Nombre</th>

                </tr>
              </thead>
              <tbody>
                {arrayEducactionLevel.map((myEduLevel, contador) => (
                  <tr key={contador}>
                    <td>{contador + 1}</td>
                    <td>{myEduLevel.nameEducationLevel}</td>
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