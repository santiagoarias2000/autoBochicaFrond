import Citys from "./Citys";
import CivilStatus from "./CivilStatus";
import Courses from "./Courses";
import EducationLevel from "./EducactionLevel";
import Sisbens from "./Sisbens";
import StateCertificate from "./StateCertificate";
import Stratums from "./Stractum";
import Tuition from "./Tuition";
import TypesDocuments from "./TypeDocument";
import TypesGenders from "./TypeGender";
import TypesSanguineous from "./TypesSanguineous";
import Vehicles from "./Vehicles";

class Person {
  public idPerson: number;
  public firstName: string;
  public secondName: string;
  public firstLastName: string;
  public secondLastName: string;
  public mail: string;
  public birthdat: string;
  public direction: string;
  public phoneNumber: string;
  public occupation: string;
  public idTypeDocument: TypesDocuments;
  public numbers: string;
  public issuedIn: string;
  public idStateCertificate: StateCertificate;
  public photo: string;
  public photoFingerprint: string;
  public dateTuition: Date;
  public idVehicle: Vehicles;
  public idTuition: Tuition;
  public idCourse: Courses;
  public idStratum: Stratums;
  public idSisben: Sisbens;
  public idCivilStatus: CivilStatus;
  public idEducationLevel: EducationLevel;
  public idCity: Citys;
  public idGender: TypesGenders;
  public idTypeSanguineou: TypesSanguineous;
  public valueReceipt: number;
  constructor(
    id:number,
    firstName: string,
    secondName: string,
    secondLastName: string,
    firstLastName: string,
    mail: string,
    dirth: string,
    occup: string,
    phone: string,
    direc: string,
    idTypeDo: TypesDocuments,
    numb: string,
    issued: string,
    state: StateCertificate,
    pho: string,
    photof: string,
    date: Date,
    idVeh: Vehicles,
    idTui: Tuition,
    idCour: Courses,
    idStra: Stratums,
    idSis: Sisbens,
    idCiSta: CivilStatus,
    idEducLevel: EducationLevel,
    idCi: Citys,
    idGend: TypesGenders,
    idTypSange: TypesSanguineous,
    valueR: number
  ) {
    this.idPerson = id;
    this.firstName = firstName;
    this.secondName = secondName;
    this.firstLastName = firstLastName;
    this.secondLastName = secondLastName;
    this.mail = mail;
    this.birthdat = dirth;
    this.occupation = occup;
    this.phoneNumber = phone;
    this.direction = direc;
    this.idStratum = idStra;
    this.idSisben = idSis;
    this.idCivilStatus = idCiSta;
    this.idEducationLevel = idEducLevel;
    this.idCity = idCi;
    this.idGender = idGend;
    this.idTypeSanguineou = idTypSange;
    this.idTypeDocument = idTypeDo;
    this.numbers = numb;
    this.issuedIn = issued;
    this.idStateCertificate = state;
    this.photo = pho;
    this.dateTuition = date;
    this.photoFingerprint = photof;
    this.idVehicle = idVeh;
    this.idTuition = idTui;
    this.idCourse = idCour;
    this.valueReceipt = valueR;
  }
}
export default Person;
