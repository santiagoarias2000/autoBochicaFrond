import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { ToastContainer } from "react-toastify";
import noFoto from "../../../../assets/image/acercade.png";

import { useState, useEffect } from "react";
import ServicePrivate from "../../../server/ServicePrivate";
import ApiBack from "../../../util/domins/ApiBack";
import { useForm } from "../../../util/hook/useForm";
import { MensajeToastify } from "../../../util/funtion/MensajeToastify";
import Stratums from "../../../models/Stractum";
import CivilStatus from "../../../models/CivilStatus";
import EducationLevel from "../../../models/EducactionLevel";
import Citys from "../../../models/Citys";
import Person from "../../../models/Person";
import Sisbens from "../../../models/Sisbens";
import TypesSanguineous from "../../../models/TypesSanguineous";
import TypesGenders from "../../../models/TypeGender";
import TypesDocuments from "../../../models/TypeDocument";
import Vehicles from "../../../models/Vehicles";
import Tuition from "../../../models/Tuition";
import Courses from "../../../models/Courses";
import { Link } from "react-router-dom";
import { ConvertirBase64 } from "../../../util/funtion/ConvertirBase64";

export const PersonCreate = () => {
  // Variables
  const [allFine, setAllFine] = useState<boolean>(false);
  type formaHtml = React.FormEvent<HTMLFormElement>;
  const [inProcess, setInProcess] = useState<boolean>(false);
  const [imagenMiniatura, setImagenMiniatura] = useState(noFoto);
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
    stateCertificate,
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
      "",
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
      new TypesSanguineous(0, "", "")
    )
  );

  //const for array foring key
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

  //******************************Code for photo
  const seeImagen = async (e: any) => {
    const archives = e.target.files;
    const imagen = archives[0];

    setImagenMiniatura(URL.createObjectURL(imagen));
    doubleLink(e);
    const base64 = await ConvertirBase64(imagen);
  };

  // *******************************************************************
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

  // Función flecha para limpiar cajas
  const cleanBoxs = (formulario: HTMLFormElement) => {
    formulario.reset();

    myObject.firstName = "";
    myObject.secondName = "";
    myObject.firstLastName = "";
    myObject.secondLastName = "";
    myObject.mail = "";
    myObject.birthdat = "";
    myObject.direction = "";
    myObject.phoneNumber = "";
    myObject.occupation = "";
    // myObject.idStratum = 0;
    // myObject.idCivilStatus = 0;
    // myObject.idEducationLevel = 0;
    // myObject.idCity = 0;
    // myObject.idGender = 0;
    // myObject.idTypeSanguineou = 0;

    formulario.firstName.value = "";
    formulario.secondName.value = "";
    formulario.firstLastName.value = "";
    formulario.secondLastName.value = "";
    formulario.mail.value = "";
    formulario.birthdat.value = "";
    formulario.direction.value = "";
    formulario.phoneNumber.value = "";
    formulario.occupation.value = "";
    formulario.idStratum.value = "";
    formulario.idCivilStatus.value = "";
    formulario.idEducationLevel.value = "";
    formulario.idCity.value = "";
    formulario.idGender.value = "";
    formulario.idTypeSanguineou.value = "";

    formulario.classList.remove("was-validated");
  };

  // *******************************************************************
  //Code funtion to send petition on the service, and send information to back
  const sendForm = async (fh: formaHtml) => {
    fh.preventDefault();
    setInProcess(true);
    const formulario = fh.currentTarget;
    formulario.classList.add("was-validated");

    if (formulario.checkValidity() === false) {
      fh.preventDefault();
      fh.stopPropagation();
    } else {
      const result = await ServicePrivate.peticionPOST(
        ApiBack.PERSON_PRIVATE_CREATE,
        myObject
      );
      if (result) {
        setInProcess(false);
        MensajeToastify("info", "Identificacion creada", 7000);
      } else {
        MensajeToastify(
          "error",
          "La identificacion no se creo con exito",
          7000
        );
      }
      //cleanBoxs(formulario);
    }
  };
  //Hook for get information
  useEffect(() => {
    getMeStratum();
    getMeCivilStatus();
    getMeEducationLevel();
    getMeCity();
    getMeSisben();
    getMeTypeDocument();
    getMeVehicles();
  }, []);

  //Camera funtion

  //crear
  return (
    <main id="main" className="main">
      {/* Navegación estilo breadcrumb: Inicio */}
      <div className="pagetitle">
        <h1>Personas</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Inicio</a>
            </li>
            <li className="breadcrumb-item active">Crear Personas</li>
          </ol>
        </nav>
      </div>
      {/* Navegación estilo breadcrumb: Fin */}

      {/* Ejemplo de formulario: Inicio */}
      <div className="col-lg-12">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-center">
              Formulario de creación de personas
            </h5>

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

              <Form.Group as={Row} className="mb-3" controlId="secondLastName">
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
                    Expedida en, es obligatorio
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="mail">
                <Form.Label column sm={2}>
                  Correo electronico :
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
                  Direción:
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
                  Numero de telefono:
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
                    Numero de telefono, es obligatorio
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
                    Ocupaciíon, es obligatorio
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

              <Form.Group as={Row} className="mb-3" controlId="idTypeDocument">
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
                  Numeros de identificacion:
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
                    Ocupaciíon, es obligatorio
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

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="stateCertificate"
              >
                <Form.Label column sm={2}>
                  Estado de certificación:
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    required
                    type="text"
                    name="stateCertificate"
                    placeholder="Ingrese lugar de expedición:"
                    className="form-control"
                    value={stateCertificate}
                    onChange={doubleLink}
                  />
                  <Form.Control.Feedback type="invalid">
                    Ocupaciíon, es obligatorio
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

              <Form.Group as={Row} className="mb-3" controlId="photo">
                <Form.Label column sm={2}>
                  <span>
                    Seleccione foto:
                  </span>
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    size="sm"
                    accept="image/png, image/jpeg"
                    required
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
                  <Button type="submit"> Crear Persona</Button>
                </Col>
              </Form.Group>
            </Form>
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
