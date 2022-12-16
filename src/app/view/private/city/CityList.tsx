import { useState, useEffect } from "react";
import Citys from "../../../models/Citys";
import ServicePrivate from "../../../server/ServicePrivate";
import ApiBack from "../../../util/domins/ApiBack";

export const CityList = () => {
  const [arrayCity, setArrayCity] = useState<Citys[]>([]);

  const getMeCity = async () => {
    const result = await ServicePrivate.petitionGET(
      ApiBack.CITY_PRIVATE_VIEW

    );
    setArrayCity(result);
  };

  useEffect(() => {
    getMeCity();
    
    
  }, []);

  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Ciudades</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Inicio</a>
            </li>
            <li className="breadcrumb-item active">Listado de ciudades</li>
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
                {arrayCity.map((myCity, contador) => (
                  <tr key={contador}>
                    <td>{contador + 1}</td>
                    <td>{myCity.nameCity}</td>
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
