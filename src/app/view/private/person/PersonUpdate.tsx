import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { ToastContainer } from "react-toastify";

import ApiBack from "../../../util/domins/ApiBack";
import noFoto from "../../../../assets/image/acercade.png";
import { useForm } from "../../../util/hook/useForm";
import ServicePrivate from "../../../server/ServicePrivate";
import { MensajeToastify } from "../../../util/funtion/MensajeToastify";
import { getLocalDate } from "../../../util/funtion/FormatDate";
import Person from "../../../models/Person";
import TypesDocuments from "../../../models/TypeDocument";
import StateCertificate from "../../../models/StateCertificate";
import Vehicles from "../../../models/Vehicles";
import Tuition from "../../../models/Tuition";
import Courses from "../../../models/Courses";
import Stratums from "../../../models/Stractum";
import Sisbens from "../../../models/Sisbens";
import CivilStatus from "../../../models/CivilStatus";
import EducationLevel from "../../../models/EducactionLevel";
import Citys from "../../../models/Citys";
import TypesGenders from "../../../models/TypeGender";
import TypesSanguineous from "../../../models/TypesSanguineous";
import { ConvertirBase64 } from "../../../util/funtion/ConvertirBase64";

export const PersonUpdate = () => {
  // Variables
  let { idPerson } = useParams();
  const [allFine, setAllFine] = useState<boolean>(false);
  const [allReady, setAllReady] = useState<boolean>(false);
  let chargerEnd = allReady !== false;
  const [imagenMiniatura, setImagenMiniatura] = useState(noFoto);
  type formaHtml = React.FormEvent<HTMLFormElement>;
  const [inProcess, setInProcess] = useState<boolean>(false); // *******************************************************************

  // Hook para formulario
  let {
    firstName,
    secondName,
    secondLastName,
    firstLastName,
    mail,
    birthdat,
    occupation,
    phoneNumber,
    direction,
    idTypeDocument,
    numbers,
    issuedIn,
    idStateCertificate,
    photo,
    photoFingerprint,
    dateTuition,
    idVehicle,
    idTuition,
    idCourse,
    idStratum,
    idSisben,
    idCivilStatus,
    idEducationLevel,
    idCity,
    idGender,
    idTypeSanguineou,
    valueReceipt,
    doubleLink,
    myObject,
  } = useForm<Person>(
    new Person(
      0,
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      new TypesDocuments(0, ""),
      "",
      "",
      new StateCertificate(0, ""),
      "",
      "",
      new Date(),
      new Vehicles(0, "", "", new Date(), new Date()),
      new Tuition(0, ""),
      new Courses(0, "", ""),
      new Stratums(0, ""),
      new Sisbens(0, ""),
      new CivilStatus(0, ""),
      new EducationLevel(0, ""),
      new Citys(0, ""),
      new TypesGenders(0, ""),
      new TypesSanguineous(0, "", ""),
      0
    )
  );
  // *******************************************************************

  const [arrayStratums, setArrayStratums] = useState<Stratums[]>([]);
  const [arrayCivilStatus, setArrayCivilStatus] = useState<CivilStatus[]>([]);
  const [arrayEducationLevel, setArrayEducationLevel] = useState<
    EducationLevel[]
  >([]);
  const [arrayCitys, setArrayCitys] = useState<Citys[]>([]);
  const [arraySisben, setArraySisben] = useState<Sisbens[]>([]);
  const [arrayTypeDocument, setArrayTypeDocument] = useState<TypesDocuments[]>(
    []
  );
  const [arrayVehicles, setArrayVehicles] = useState<Vehicles[]>([]);
  const [arrayTuition, setArrayTuition] = useState<Tuition[]>([]);
  const [arrayCourse, setArrayCourse] = useState<Courses[]>([]);
  const [arrayStateCertificate, setArrayStateCertificate] = useState<
    StateCertificate[]
  >([]);
  //code to create array for see foring key...
  const getMeStratum = async () => {
    const result = await ServicePrivate.petitionGET(
      ApiBack.STRACTUM_PRIVATE_VIEW
    );
    setArrayStratums(result);
    if (result) {
      setAllFine(true);
    }
  };
  const getMeSisben = async () => {
    const result = await ServicePrivate.petitionGET(
      ApiBack.SISBENS_PRIVATE_VIEW
    );
    setArraySisben(result);
    if (result) {
      setAllFine(true);
    }
  };
  const getMeCivilStatus = async () => {
    const result = await ServicePrivate.petitionGET(
      ApiBack.CIVILSTATUS_PRIVATE_VIEW
    );
    setArrayCivilStatus(result);
    if (result) {
      setAllFine(true);
    }
  };
  const getMeEducationLevel = async () => {
    const result = await ServicePrivate.petitionGET(
      ApiBack.EDUCATIONLEVEL_PRIVATE_VIEW
    );
    setArrayEducationLevel(result);
    if (result) {
      setAllFine(true);
    }
  };
  const getMeCity = async () => {
    const result = await ServicePrivate.petitionGET(ApiBack.CITY_PRIVATE_VIEW);
    setArrayCitys(result);
    if (result) {
      setAllFine(true);
    }
  };
  const getMeTypeDocument = async () => {
    const result = await ServicePrivate.petitionGET(
      ApiBack.TYPEDOCUMENT_PRIVATE_VIEW
    );
    setArrayTypeDocument(result);
    if (result) {
      setAllFine(true);
    }
  };
  const getMeVehicles = async () => {
    const result = await ServicePrivate.petitionGET(
      ApiBack.VEHICLES_PRIVATE_VIEW
    );
    setArrayVehicles(result);
    if (result) {
      setAllFine(true);
    }
  };
  const getMeTuition = async () => {
    const result = await ServicePrivate.petitionGET(
      ApiBack.TUITIONS_PRIVATE_VIEW
    );
    setArrayTuition(result);
    if (result) {
      setAllFine(true);
    }
  };
  const getMeCourse = async () => {
    const result = await ServicePrivate.petitionGET(
      ApiBack.COURSES_PRIVATE_VIEW
    );
    setArrayCourse(result);
    if (result) {
      setAllFine(true);
    }
  };
  const getMeStaCertificate = async () => {
    const result = await ServicePrivate.petitionGET(
      ApiBack.STATECERTIFICATE_PRIVATE_VIEW
    );
    setArrayStateCertificate(result);
    if (result) {
      setAllFine(true);
    }
  };
  //Converte base64 in the image for visualizate in the page
  const seeImagen = async (e: any) => {
      const archives = e.target.files;
      const imagen = archives[0];
      
      setImagenMiniatura(URL.createObjectURL(imagen));
      doubleLink(e);
      const base64 = await ConvertirBase64(imagen);
    };
  // Consult to the data for the person, use the idPerson
  // *******************************************************************
  const getMeOnePerson = async () => {
    const urlChargerOneVehicle =
      ApiBack.PERSON_PRIVATE_DETAILSUP + "/" + idPerson;
    const usuReceived = await ServicePrivate.petitionGET(urlChargerOneVehicle);
    if (usuReceived) {
      myObject.idPerson = usuReceived.idPerson;
      myObject.firstName= usuReceived.firstName;
      myObject.secondName= usuReceived.secondName;
      myObject.secondLastName= usuReceived.secondLastName;
      myObject.firstLastName= usuReceived.firstLastName;
      myObject.mail= usuReceived.mail;
      myObject.birthdat= usuReceived.birthdat;
      myObject.occupation= usuReceived.occupation;
      myObject.phoneNumber= usuReceived.phoneNumber;
      myObject.direction= usuReceived.direction;
      myObject.idTypeDocument= usuReceived.idTypeDocument;
      myObject.numbers= usuReceived.numbers;
      myObject.issuedIn= usuReceived.issuedIn;
      myObject.idStateCertificate= usuReceived.idStateCertificate;
      myObject.photo= usuReceived.photo;
      myObject.photoFingerprint= usuReceived.photoFingerprint;
      myObject.dateTuition= usuReceived.dateTuition;
      myObject.idVehicle= usuReceived.idVehicle;
      myObject.idTuition= usuReceived.idTuition;
      myObject.idCourse= usuReceived.idCourse;
      myObject.idStratum= usuReceived.idStratum;
      myObject.idSisben= usuReceived.idSisben;
      myObject.idCivilStatus= usuReceived.idCivilStatus;
      myObject.idEducationLevel= usuReceived.idEducationLevel;
      myObject.idCity= usuReceived.idCity;
      myObject.idGender= usuReceived.idGender;
      myObject.idTypeSanguineou= usuReceived.idTypeSanguineou;
      myObject.valueReceipt= usuReceived.valueReceipt;
      if (usuReceived) {
        setAllReady(true);
      }
    }
  };
  // *******************************************************************

  // ************************************************************************

  // send form to update person
  // *******************************************************************
  const sendForm = async (fh: formaHtml) => {
      fh.preventDefault();
      setInProcess(true);
      const formulario = fh.currentTarget;
      formulario.classList.add("was-validated");
      
      if (formulario.checkValidity() === false) {
          fh.preventDefault();
          fh.stopPropagation();
        } else {
            const urlUpdate = ApiBack.PERSON_PRIVATE_UPDATE;
            const objectUpdate = new Person(
                myObject.idPerson,
                myObject.firstName,
                myObject.secondName,
                myObject.secondLastName,
                myObject.firstLastName,
                myObject.mail,
                myObject.birthdat,
                myObject.occupation,
                myObject.phoneNumber,
                myObject.direction,
                myObject.idTypeDocument,
                myObject.numbers,
                myObject.issuedIn,
                myObject.idStateCertificate,
                myObject.photo,
                myObject.photoFingerprint,
                new Date(),
                myObject.idVehicle,
                myObject.idTuition,
                myObject.idCourse,
                myObject.idStratum,
                myObject.idSisben,
                myObject.idCivilStatus,
                myObject.idEducationLevel,
                myObject.idCity,
                myObject.idGender,
                myObject.idTypeSanguineou,
                myObject.valueReceipt       
                );
                console.log(objectUpdate);
                
                const resultado = await ServicePrivate.peticionPUT(
                    urlUpdate,
                    objectUpdate
      );

      if (resultado) {
          setInProcess(false);
          MensajeToastify("success", "Persona actualizado correctamente", 7000);
        } else {
            MensajeToastify(
                "error",
                "No se puede actualizar el persona. Verifique la información",
                7000
                );
            }
        }
    };
    // *******************************************************************
    
    //Hook for get information
    useEffect(() => {
      getMeStratum();
      getMeCivilStatus();
      getMeEducationLevel();
      getMeCity();
      getMeSisben();
      getMeTypeDocument();
      getMeVehicles();
      getMeTuition();
      getMeCourse();
      getMeStaCertificate();
      getMeOnePerson();
    }, []);
    // *****************************
    return (
    <main id="main" className="main">
      {/* Navegación estilo breadcrumb: Inicio */}
      <div className="pagetitle">
        <h1>Vehículos</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/home">Inicio</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/home/personview">Listado de personas</Link>
            </li>
            <li className="breadcrumb-item active">Actualizar</li>
          </ol>
        </nav>
      </div>
      {/* Navegación estilo breadcrumb: Fin */}

      {/* Ejemplo de formulario: Inicio */}
      <div className="col-lg-12">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-center">
              Formulario de Actualización
            </h5>

            {chargerEnd ? (
              <Form noValidate validated={inProcess} onSubmit={sendForm}>
                <Form.Group as={Row} className="mb-3" controlId="firstName">
                  <Form.Label column sm={2}>
                    Primer nombre:
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      required
                      type="text"
                      name="firstName"
                      className="form-control"
                      placeholder="Ingrese el primer nombre:"
                      value={firstName}
                      onChange={doubleLink}
                    />
                    <Form.Control.Feedback type="invalid">
                      Primer nombre es obligatorio
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="secondName">
                  <Form.Label column sm={2}>
                    Segundo nombre
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      required
                      type="text"
                      name="secondName"
                      className="form-control"
                      placeholder="Ingrese el segundo nombre:"
                      value={secondName}
                      onChange={doubleLink}
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="firstLastName">
                  <Form.Label column sm={2}>
                    Primer apellido
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      required
                      type="text"
                      name="firstLastName"
                      className="form-control"
                      placeholder="Ingrese el primer apellido:"
                      value={firstLastName}
                      onChange={doubleLink}
                    />
                    <Form.Control.Feedback type="invalid">
                      Primer apellido, es obligatorio
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="secondLastName"
                >
                  <Form.Label column sm={2}>
                    Segundo apellido
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      required
                      type="text"
                      name="secondLastName"
                      placeholder="Ingrese el segundo apellido:"
                      className="form-control"
                      value={secondLastName}
                      onChange={doubleLink}
                    />
                    <Form.Control.Feedback type="invalid">
                      Segundo nombre, es obligatorio
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="idTypeDocument"
                >
                  <Form.Label column sm={2}>
                    Tipo de documento:
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Select
                      required
                      name="idTypeDocument"
                      value={idTypeDocument.idTypeDocument}
                      onChange={doubleLink}
                    >
                      <option value="">Seleccione el Tipo de documento</option>
                      {arrayTypeDocument.map((miIden, index) => (
                        <option key={index} value={miIden.idTypeDocument}>
                          {miIden.typeDocument}
                        </option>
                      ))}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Seleccione la tipo de documento
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="numbers">
                  <Form.Label column sm={2}>
                    Numeros de identificación:
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      required
                      type="text"
                      name="numbers"
                      placeholder="Ingrese los numeros de la identificación:"
                      className="form-control"
                      value={numbers}
                      onChange={doubleLink}
                    />
                    <Form.Control.Feedback type="invalid">
                      Numero de identificación, es obligatorio
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="issuedIn">
                  <Form.Label column sm={2}>
                    Expedida en:
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      required
                      type="text"
                      name="issuedIn"
                      placeholder="Ingrese lugar de expedición:"
                      className="form-control"
                      value={issuedIn}
                      onChange={doubleLink}
                    />
                    <Form.Control.Feedback type="invalid">
                      Ocupaciíon, es obligatorio
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="mail">
                  <Form.Label column sm={2}>
                    Correo electrónico :
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      required
                      type="mail"
                      name="mail"
                      placeholder="Ingrese el correo electronico:"
                      className="form-control"
                      value={mail}
                      onChange={doubleLink}
                    />
                    <Form.Control.Feedback type="invalid">
                      Correo, es obligatorio
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="birthdat">
                  <Form.Label column sm={2}>
                    Fecha de nacimiento:
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      required
                      type="text"
                      name="birthdat"
                      placeholder="Ingrese el fecha nacimento(DD/MM/AAAA):"
                      className="form-control"
                      value={birthdat}
                      onChange={doubleLink}
                    />
                    <Form.Control.Feedback type="invalid">
                      Fecha de nacimento, es obligatorio
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="direction">
                  <Form.Label column sm={2}>
                    Dirección:
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      required
                      type="text"
                      name="direction"
                      placeholder="Ingrese la direccion:"
                      className="form-control"
                      value={direction}
                      onChange={doubleLink}
                    />
                    <Form.Control.Feedback type="invalid">
                      Direción, es obligatorio
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="phoneNumber">
                  <Form.Label column sm={2}>
                    Numero de teléfono:
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      required
                      type="text"
                      name="phoneNumber"
                      placeholder="Ingrese la numero de telefono:"
                      className="form-control"
                      value={phoneNumber}
                      onChange={doubleLink}
                    />
                    <Form.Control.Feedback type="invalid">
                      Numero de teléfono, es obligatorio
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="valueReceipt">
                  <Form.Label column sm={2}>
                    Valor del curso:
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      required
                      type="text"
                      name="valueReceipt"
                      placeholder="Ingrese el valor del curso:"
                      className="form-control"
                      value={valueReceipt}
                      onChange={doubleLink}
                    />
                    <Form.Control.Feedback type="invalid">
                      El valor del curso, es obligatorio
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="occupation">
                  <Form.Label column sm={2}>
                    Ocupación:
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      required
                      type="text"
                      name="occupation"
                      placeholder="Ingrese la ocupación:"
                      className="form-control"
                      value={occupation}
                      onChange={doubleLink}
                    />
                    <Form.Control.Feedback type="invalid">
                      Ocupacíon, es obligatorio
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="idSisben">
                  <Form.Label column sm={2}>
                    Tipo de sisben:
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Select
                      required
                      name="idSisben"
                      value={idSisben.idSisben}
                      onChange={doubleLink}
                    >
                      <option value="">Seleccione el tipo</option>
                      {arraySisben.map((miSisbe, index) => (
                        <option key={index} value={miSisbe.idSisben}>
                          {miSisbe.nameSisben}
                        </option>
                      ))}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Seleccione el tipo de siben
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="idStratum">
                  <Form.Label column sm={2}>
                    Estrato:
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Select
                      required
                      name="idStratum"
                      value={idStratum.idStratums}
                      onChange={doubleLink}
                    >
                      <option value="">Seleccione el estrato</option>
                      {arrayStratums.map((myStra, index) => (
                        <option key={index} value={myStra.idStratums}>
                          {myStra.nameStractum}
                        </option>
                      ))}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Seleccione el estrato
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="idCivilStatus">
                  <Form.Label column sm={2}>
                    Estado civil:
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Select
                      required
                      name="idCivilStatus"
                      value={idCivilStatus.idCivilStatus}
                      onChange={doubleLink}
                    >
                      <option value="">Seleccione el estado civil</option>
                      {arrayCivilStatus.map((miCivil, index) => (
                        <option key={index} value={miCivil.idCivilStatus}>
                          {miCivil.typeCivilStatus}
                        </option>
                      ))}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Seleccione el estado civil
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="idEducationLevel"
                >
                  <Form.Label column sm={2}>
                    Nivel educativo:
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Select
                      required
                      name="idEducationLevel"
                      value={idEducationLevel.idEducationLevel}
                      onChange={doubleLink}
                    >
                      <option value="">Seleccione el nivel educativo</option>
                      {arrayEducationLevel.map((miIden, index) => (
                        <option key={index} value={miIden.idEducationLevel}>
                          {miIden.nameEducationLevel}
                        </option>
                      ))}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Seleccione el nivel educativo
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="idCity">
                  <Form.Label column sm={2}>
                    Ciudad:
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Select
                      required
                      name="idCity"
                      value={idCity.idCity}
                      onChange={doubleLink}
                    >
                      <option value="">Seleccione el ciudad</option>
                      {arrayCitys.map((miIden, index) => (
                        <option key={index} value={miIden.idCity}>
                          {miIden.nameCity}
                        </option>
                      ))}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Seleccione la ciudad
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="idStateCertificate"
                >
                  <Form.Label column sm={2}>
                    Estado de certificado:
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Select
                      required
                      name="idStateCertificate"
                      value={idStateCertificate.idStateCertificate}
                      onChange={doubleLink}
                    >
                      <option value="">
                        Seleccione el Tipo de estado de certificado
                      </option>
                      {arrayStateCertificate.map((miIden, index) => (
                        <option key={index} value={miIden.idStateCertificate}>
                          {miIden.stateCertificate}
                        </option>
                      ))}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Seleccione el estado del certificación
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="idGender">
                  <Form.Label column sm={2}>
                    Tipo de genero:
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Select
                      required
                      name="idGender"
                      value={idGender.idTypeGender}
                      onChange={doubleLink}
                    >
                      <option value="">Seleccione el tipo</option>
                      <option value={1}>Masculino</option>
                      <option value={2}>Femenino</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Seleccione el tipo de genero
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="idTypeSanguineou"
                >
                  <Form.Label column sm={2}>
                    Tipo de sangre:
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Select
                      required
                      name="idTypeSanguineou"
                      value={idTypeSanguineou.idTypeSangui}
                      onChange={doubleLink}
                    >
                      <option value="">Seleccione el tipo</option>
                      <option value={1}>A+</option>
                      <option value={2}>A-</option>
                      <option value={3}>B+</option>
                      <option value={4}>B-</option>
                      <option value={5}>AB+</option>
                      <option value={6}>AB-</option>
                      <option value={7}>O+</option>
                      <option value={2}>OB-</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Seleccione el tipo de sangre
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="dateTuition">
                  <Form.Label column sm={2}>
                    Fecha del matrícula:
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      required
                      type="date"
                      name="dateTuition"
                      className="form-control"
                      value={dateTuition.valueOf()}
                      onChange={doubleLink}
                    />
                    <Form.Control.Feedback type="invalid">
                      Fecha del matrícula es obligatoria
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="idVehicle">
                  <Form.Label column sm={2}>
                    Vehículo:
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Select
                      required
                      name="idVehicle"
                      value={idVehicle.idVehicle}
                      onChange={doubleLink}
                    >
                      <option value="">Seleccione el vehículo</option>
                      {arrayVehicles.map((miIden, index) => (
                        <option key={index} value={miIden.idVehicle}>
                          {miIden.licensePlate}
                        </option>
                      ))}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Seleccione la Vehículo
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="idTuition">
                  <Form.Label column sm={2}>
                    Tipo de matricula:
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Select
                      required
                      name="idTuition"
                      value={idTuition.idTuition}
                      onChange={doubleLink}
                    >
                      <option value="">Seleccione la matricula</option>
                      {arrayTuition.map((miIden, index) => (
                        <option key={index} value={miIden.idTuition}>
                          {miIden.nameTuition}
                        </option>
                      ))}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Seleccione la matricula
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="idCourse">
                  <Form.Label column sm={2}>
                    Tipo de curso:
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Select
                      required
                      name="idCourse"
                      value={idCourse.idCourse}
                      onChange={doubleLink}
                    >
                      <option value="">Seleccione la curso</option>
                      {arrayCourse.map((miIden, index) => (
                        <option key={index} value={miIden.idCourse}>
                          {miIden.nameCourse} - {miIden.timeCourse}
                        </option>
                      ))}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Seleccione la matricula
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="photo">
                  <Form.Label column sm={2}>
                    <span>Seleccione foto:</span>
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      size="sm"
                      accept="image/png, image/jpeg"
                      type="file"
                      name="photo"
                      className="form-control"
                      value={photo}
                      onChange={seeImagen}
                    />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        fontSize: "2vw",
                      }}
                    >
                      <Link to={"/home/cameraview/"}>
                        <i className="fa-solid fa-camera fa-sm"></i>
                      </Link>
                    </div>
                    <Form.Control.Feedback type="invalid">
                      Debe seleccionar una imagen
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                  <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit" className="bi bi-node-plus-fill">
                      {" "}
                      Actualizar persona{" "}
                    </Button>
                  </Col>
                </Form.Group>
              </Form>
            ) : (
              <div>Cargando información de la persona seleccionada....</div>
            )}
          </div>
        </div>
      </div>
      {/* Ejemplo de formulario: Inicio */}

      {/* Requerido para presentar los mensajes Toast: Inicio */}
      <ToastContainer />
      {/* Requerido para presentar los mensajes Toast: Fin */}
    </main>
  );
};