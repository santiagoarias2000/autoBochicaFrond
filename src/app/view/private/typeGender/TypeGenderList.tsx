import { useState, useEffect } from "react";
import TypesGenders from "../../../models/TypeGender";
import ServicePrivate from "../../../server/ServicePrivate";
import ApiBack from "../../../util/domins/ApiBack";

export const TypeGenderList = () => {
  const [arrayTypeGender, setArrayTypeGender] = useState<TypesGenders[]>([]);

  const getMeTGender = async () => {
    const result = await ServicePrivate.petitionGET(
      ApiBack.TYPEGENDER_PRIVATE_VIEW

    );
    setArrayTypeGender(result);
  };

  useEffect(() => {
    getMeTGender();
    
    
  }, []);

  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Tipos de genero</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Inicio</a>
            </li>
            <li className="breadcrumb-item active">Listado de tipos de genero</li>
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
                  <th style={{ width: "20%" }}>Tipo de genero</th>

                </tr>
              </thead>
              <tbody>
                {arrayTypeGender.map((myTGender, contador) => (
                  <tr key={contador}>
                    <td>{contador + 1}</td>
                    <td>{myTGender.typeGender}</td>
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
