import ApiBack from "../util/domins/ApiBack";

class ServicePrivate {
  // Servicio con bearer para hacer peticiones GET
  // *******************************************************************
  public static async petitionGET(urlService: string) {
    // const bearer = "Bearer " + String(localStorage.getItem("tokenAutoBochica"));

    const dataSend = {
      method: "GET",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
    };

    const url = ApiBack.URL + urlService;
    const response = fetch(url, dataSend)
      .then((response) => response.json())
      .then((datos) => {
        return datos;
      })
      .catch((miError) => {
        return miError;
      });
    return response;
  }

  //Servicio con bearer para hacer peticiones POST
  //*******************************************************************
  public static async peticionPOST(urlServicio: string, miJSON: any) {
    const bearer = "Bearer " + String(localStorage.getItem("tokenUsta"));

    const datosEnviar = {
      method: "POST",
      body: JSON.stringify(miJSON),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        authorization: bearer,
      },
    };

    const url = ApiBack.URL + urlServicio;
    const respuesta = fetch(url, datosEnviar)
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        return datos;
      })
      .catch((miError) => {
        return miError;
      });
    return respuesta;
  }

  // Servicio con bearer para hacer peticiones DELETE
  // *******************************************************************
  public static async peticionDELETE(urlServicio: string) {
    const bearer = "Bearer " + String(localStorage.getItem("tokenUsta"));

    const datosEnviar = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        authorization: bearer,
      },
    };

    const url = ApiBack.URL + urlServicio;
    const respuesta = fetch(url, datosEnviar)
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        return datos;
      })
      .catch((miError) => {
        return miError;
      });
    return respuesta;
  }

    // Servicio con bearer para hacer peticiones PUT
    // *******************************************************************
    public static async peticionPUT(urlServicio: string, miJSON: any) {
      const bearer = "Bearer " + String(localStorage.getItem("tokenUsta"));

      const datosEnviar = {
        method: "PUT",
        body: JSON.stringify(miJSON),
        headers: { "Content-Type": "application/json; charset=UTF-8", authorization: bearer }
      };

      const url = ApiBack.URL + urlServicio;
      const respuesta = fetch(url, datosEnviar)
        .then((respuesta) => respuesta.json())
        .then((datos) => { return datos; })
        .catch((miError) => { return miError; });
      return respuesta;
  }
}

export default ServicePrivate;
