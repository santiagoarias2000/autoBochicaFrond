import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// Test special entry points

import PersonCRUD from "../../../models/PersonCRUD";
import { useParams } from "react-router-dom";
import ApiBack from "../../../util/domins/ApiBack";
import ServicePrivate from "../../../server/ServicePrivate";

import { Document as DocumentEsmWebpack, Page as PageEsmWebpack } from 'react-pdf/dist/esm/entry.webpack';
import { Document as DocumentUmdWebpack, Page as PageUmdWebpack } from 'react-pdf/dist/umd/entry.webpack';
import { Document as DocumentEsmWebpack5, Page as PageEsmWebpack5 } from 'react-pdf/dist/esm/entry.webpack5';
import { Document as DocumentUmdWebpack5, Page as PageUmdWebpack5 } from 'react-pdf/dist/umd/entry.webpack5';
import { Document as DocumentEsmParcel, Page as PageEsmParcel } from 'react-pdf/dist/esm/entry.parcel';
import { Document as DocumentUmdParcel, Page as PageUmdParcel } from 'react-pdf/dist/umd/entry.parcel';
import { Document as DocumentEsmParcel2, Page as PageEsmParcel2 } from 'react-pdf/dist/esm/entry.parcel2';
import { Document as DocumentUmdParcel2, Page as PageUmdParcel2 } from 'react-pdf/dist/umd/entry.parcel2';
import { Document as DocumentEsmVite, Page as PageEsmVite } from 'react-pdf/dist/esm/entry.vite';
import { Document as DocumentUmdVite, Page as PageUmdVite } from 'react-pdf/dist/umd/entry.vite';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const PdfRenderPerson = () => {
  let { idPerson } = useParams();
  const [objPerson, setObjPerson] = useState<PersonCRUD>();
  const [allFine, setAllFine] = useState<boolean>(false);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);


  
  function onDocumentLoadSuccess({}) {
    setNumPages(numPages);
  }
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
  return (
    <div>
      <main id="main">
        <Document
          file="somefile.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          imageResourcesPath="/public"
          externalLinkRel="noopener noreferrer nofollow"
        >
          <Page pageNumber={pageNumber}></Page>
          </Document>
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
                
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
