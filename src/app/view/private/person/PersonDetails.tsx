import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import ApiBack from "../../../util/domins/ApiBack";
import ServicePrivate from "../../../server/ServicePrivate";
import { getLocalDate } from "../../../util/funtion/FormatDate";

import "../../../../assets/css/styleBody.css";
import PersonCRUD from "../../../models/PersonCRUD";

export const PersonDetails = () => {
  let { idPerson } = useParams();
  const regresar = useNavigate();
  const [allFine, setAllFine] = useState<boolean>(false);
  let chagerEnd = allFine !== undefined;
  const [objPerson, setObjPerson] = useState<PersonCRUD>();
  useEffect(() => {
    // *******************************************************************
    const getOnePerson = async () => {
      const urlChargerPerson = ApiBack.PERSON_PRIVATE_DETAILS + "/" + idPerson;
      const usuReceived = await ServicePrivate.petitionGET(urlChargerPerson);
      if (usuReceived) {
        setObjPerson(usuReceived);
        setAllFine(true);
      }
    };
    // *******************************************************************
    getOnePerson();
  }, [idPerson]);

  const getRoutePDf =async () => {
    const urlPDF = ApiBack.CREATE_PDF;
    const useReceived = await ServicePrivate.petitionGET(urlPDF);
    if (useReceived) {
      console.log("ñalnsdlfna")
    }
  }
  useEffect(()=>{
    getRoutePDf();
  },[])
  return (
    <main id="main" className="main">
      {chagerEnd ? (
        <div className="d-flex justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header detail_title">
                Información del vehículo
              </div>
              <img
                src={objPerson?.photo}
                className="card-img-top"
                alt={objPerson?.photo}
              />

              <div className="card-body">
                <h5 className="card-title detail_title">
                  Nombre: {objPerson?.firstName} {objPerson?.secondName}{" "}
                  {objPerson?.firstLastName} {objPerson?.secondLastName}
                  <br />
                  {objPerson?.stateCertificate}
                </h5>
                <p className="card-text">
                  <strong>Documento: </strong>
                  {objPerson?.typeDocument}-{objPerson?.numbers}
                  <br />
                  <strong>Tipo de sangre: </strong>
                  {objPerson?.type}
                  {objPerson?.rh}
                  <br />
                  <strong>Correo Electrónico: </strong>
                  {objPerson?.mail}
                  <br />
                  <strong>Fecha de nacimiento: </strong>
                  {objPerson?.birthdat}
                  <br />
                  <strong>Direccion: </strong> {objPerson?.direction}
                  <br />
                  <strong>Teléfono: </strong>
                  {objPerson?.phoneNumber}
                  <br />
                  <strong>Ocupación: </strong>
                  {objPerson?.occupation}
                  <br />
                  <strong>Fecha de matrícula: </strong> {objPerson?.dateTuition}
                  <br />
                  <strong>Curso: </strong>
                  {objPerson?.nameCourse}
                  <br />
                  <strong>Tiempo del curso: </strong> {objPerson?.timeCourse}
                  <br />
                  <strong>Estrato: </strong>
                  {objPerson?.nameStractum}
                  <br />
                  <strong>Sisben: </strong>
                  {objPerson?.nameSisben}
                  <br />
                  <strong>Estado civil: </strong>
                  {objPerson?.typeCivilStatus}
                  <br />
                  <strong>Nivel de estudios: </strong>
                  {objPerson?.nameEducationLevel}
                  <br />
                  <strong>Ciudad de origen: </strong>
                  {objPerson?.nameCity}
                  <br />
                  <strong>Género: </strong>
                  {objPerson?.typeGender}
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
                <a onClick={getRoutePDf} className="btn btn-danger btn-sm">
                  <i className="fa fa-file-pdf"></i>
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Cargando información de la persona que se seleccionó</div>
      )}
    </main>
  );
};
