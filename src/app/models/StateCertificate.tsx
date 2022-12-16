class StateCertificate {
    public idStateCertificate: number;
    public stateCertificate:string;
    constructor(id:number, state: string){
        this.idStateCertificate = id;
        this.stateCertificate = state;
    }
}
export default StateCertificate;