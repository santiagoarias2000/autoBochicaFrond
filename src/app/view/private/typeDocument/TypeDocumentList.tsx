import { useState, useEffect } from "react";
import TypesDocuments from "../../../models/TypeDocument";
import ServicePrivate from "../../../server/ServicePrivate";
import ApiBack from "../../../util/domins/ApiBack";

export const TypeDocumentList = () => {
  const [arrayTypeDocument, setArrayTypeDocument] = useState<TypesDocuments[]>([]);

  const getMeCity = async () => {
    const result = await ServicePrivate.petitionGET(
      ApiBack.TYPEDOCUMENT_PRIVATE_VIEW

    );
    setArrayTypeDocument(result);
  };

  useEffect(() => {
    getMeCity();
    
    
  }, []);

  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Tipos de documento</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Inicio</a>
            </li>
            <li className="breadcrumb-item active">Listado de tipos de documentos</li>
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
                  <th style={{ width: "20%" }}>Tipo de domcumento</th>

                </tr>
              </thead>
              <tbody>
                {arrayTypeDocument.map((myTDocument, contador) => (
                  <tr key={contador}>
                    <td>{contador + 1}</td>
                    <td>{myTDocument.typeDocument}</td>
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
