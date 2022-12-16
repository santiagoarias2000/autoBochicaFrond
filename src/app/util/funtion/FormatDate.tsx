
  // ************************************************************************
  export const getLocalDate = (Dates: Date | string) => {
    const dateList = new Date(Dates);
    return dateList.toLocaleDateString();
  };
  export const getLocalDates = (Dates: Date | string) => {
    const dateLists = new Date(Dates);
    return dateLists.toDateString();
  };
  // ************************************************************************


  // ************************************************************************
  export const getMeHour = (fecha: Date | string) => {
    const dateList = new Date(fecha);
    return dateList.toLocaleTimeString();
  };
  // ************************************************************************