class PersonCRUD {
  public idPerson:number;
  public firstName: string;
  public secondName: string;
  public firstLastName: string;
  public secondLastName: string;
  public mail: string;
  public birthdat: string;
  public direction: string;
  public phoneNumber: string;
  public occupation: string;
  public numbers: string;
  public issuedIn: string;
  public typeDocument: string;
  public stateCertificate: string;
  public valueReceipt: string;
  public photo: string;
  public photoFingerprint: string;
  public dateTuition: string;
  public licensePlate: string;
  public nameTuition: string;
  public nameCourse: string;
  public timeCourse: string;
  public typeGender: string;
  public type: string;
  public rh: string;
  public nameStractum: string;
  public nameSisben: string;
  public typeCivilStatus: string;
  public nameEducationLevel: string;
  public nameCity:string;
  constructor(
    id:number,
    fn: string,
    sd: string,
    fln: string,
    sln: string,
    mail: string,
    birt: string,
    dire: string,
    phonNu: string,
    occu: string,
    num: string,
    isu: string,
    tyDo:string,
    staCer: string,
    valRe: string,
    pho:string,
    phofin:string,
    daTi:string,
    linpla:string,
    namTui:string,
    namCou:string,
    timeCou:string,
    tyGen:string,
    ty:string,
    rh:string,
    naStr:string,
    naSis:string,
    tyCiSt:string,
    naEdLe:string,
    cit:string 
  ) {
    this.firstName = fn;
    this.secondName = sd;
    this.firstLastName = fln;
    this.secondLastName = sln;
    this.mail = mail;
    this.birthdat = birt;
    this.direction = dire;
    this.phoneNumber = phonNu;
    this.occupation = occu;
    this.numbers = num;
    this.issuedIn = isu;
    this.typeDocument = tyDo;
    this.stateCertificate = staCer;
    this.valueReceipt = valRe;
    this.photo = pho;
    this.photoFingerprint = phofin;
    this.dateTuition = daTi;
    this.licensePlate = linpla;
    this.nameTuition = namTui;
    this.nameCourse = namCou;
    this.timeCourse = timeCou;
    this.typeGender = tyGen;
    this.type = ty;
    this.rh = rh;
    this.nameStractum = naStr;
    this.nameSisben = naSis;
    this.typeCivilStatus = tyCiSt;
    this.nameEducationLevel = naEdLe;
    this.nameCity =cit;
    this.idPerson = id;
  }
}
export default PersonCRUD;
