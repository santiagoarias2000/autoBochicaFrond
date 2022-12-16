class Vehicles {
    public idVehicle: number;
    public typeVehicle: string;
    public licensePlate: string;
    public dateSoat: Date;
    public dateTecnomecanical: Date;
  
    constructor(
      id: number,
      typeV: string,
      licenPa: string,
      dateS: Date,
      dateTM: Date
    ) {
      this.idVehicle = id;
      this.typeVehicle = typeV;
      this.licensePlate = licenPa;
      this.dateSoat = dateS;
      this.dateTecnomecanical = dateTM;
    }
  }
  export default Vehicles;