import Roles from "./Roles";

class UserRole{
public idUserRole: number;
public nameRol: string;
public documentUser: string;
public typeUser: number;
public nameUser:string;
public phoneUser: string;
public stateUser: number;

constructor(idSR: number, nameR:string, docu:string, type:number, name: string, phone:string,state:number){
    this.idUserRole = idSR;
    this.nameRol = nameR;
    this.documentUser = docu;
    this.typeUser = type;
    this.nameUser = name;
    this.phoneUser =  phone;
    this.stateUser = state;
}
}
export default UserRole;