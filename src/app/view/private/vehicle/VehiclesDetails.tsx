import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import ApiBack from "../../../util/domins/ApiBack";
import ServicePrivate from "../../../server/ServicePrivate";
import { getLocalDate } from "../../../util/funtion/FormatDate";
import Vehicles from "../../../models/Vehicles";

import "../../../../assets/css/styleBody.css";

export const VehiclesDetails = () => {
    let { idVehicle } = useParams();
    const regresar = useNavigate();
    const [allFine, setAllFine] = useState<boolean>(false);
    let chagerEnd = allFine !== undefined;
    const [objVehicle, setObjVehicle] = useState<Vehicles>();
    console.log(objVehicle)
    useEffect(() => {
      // *******************************************************************
      const getOneVehicle = async () => {
        const urlChargerVehicle = ApiBack.VEHICLES_PRIVATE_DETAILS + "/" + idVehicle;
        const usuReceived = await ServicePrivate.petitionGET(urlChargerVehicle);
        if (usuReceived) {
          setObjVehicle(usuReceived);
          setAllFine(true);
        }
      };
      // *******************************************************************
      getOneVehicle();
    }, [idVehicle]);
    return (
        <main id="main" className="main">
        {chagerEnd ? (
          <div className="d-flex justify-content-center">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header detail_title">Información del vehículo</div>
                <div className="card-body detail_main">
                  <h5 className="card-title">
                    Placa: {objVehicle?.licensePlate}
                  </h5>
                  <p className="card-text">
                    Tipo de vehículo: {objVehicle?.typeVehicle}
                    <br/>
                    Fecha Soat:{" "}
                    {getLocalDate(String(objVehicle?.dateSoat))}
                    <br />
                    Fecha tecnico mecánica:{" "}
                    {getLocalDate(String(objVehicle?.dateTecnomecanical))}
                    <br />
                  </p>
                </div>
                <div className="card-footer details_button">
                  <button
                    onClick={() => regresar(-1)}
                    className="btn btn-info btn-sm"
                  >
                    Regresar
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>Carga de vehiclo en proceso</div>
        )}
      </main>
    );
  };