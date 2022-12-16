const optionAdmin = [
    { nombre: "Cetificados", icono: "bi bi-grid", ruta: "/home/personcreate", hijos: [], },
    { nombre: "Creacion personas", icono: "bi bi-clipboard-data", ruta: "", hijos: [
        { nombre: "identificacion", icono: "bi bi-circle", ruta: "/home/personcreate", },
        { nombre: "Listado de personas", icono: "bi bi-circle", ruta: "/home/personview", },
        { nombre: "Administración", icono: "bi bi-circle", ruta: "/home/profilAdmin", },
      ]
    },
    { nombre: "Creación de utilidades", icono: "bi bi bi-save", ruta: "", hijos: [
        { nombre: "Vehículos", icono: "bi bi-circle", ruta: "/home/vehiclescreate", },
      ]
    },
    { nombre: "Recursos de la aplicación", icono: "bi bi-person-lines-fill", ruta: "", hijos: [
      { nombre: "Listado de estratos", icono: "bi bi-circle", ruta: "/home/stratumview", },
      { nombre: "Listado de siben", icono: "bi bi-circle", ruta: "/home/sisbenview", },
      { nombre: "Listado de ciudades", icono: "bi bi-circle", ruta: "/home/cityview", },
      { nombre: "Listado de niveles educativos", icono: "bi bi-circle", ruta: "/home/edulevelview", },
      { nombre: "Listado de tipos de documento", icono: "bi bi-circle", ruta: "/home/tdocumentview", },
      { nombre: "Listado de tipos de genero", icono: "bi bi-circle", ruta: "/home/tgenderview", },
      { nombre: "Listado de tipos de sangre", icono: "bi bi-circle", ruta: "/home/tsanguiview", },
      { nombre: "Listado de identificaciones", icono: "bi bi-circle", ruta: "/home/identificationview", },
      { nombre: "Listado de Cursos", icono: "bi bi-circle", ruta: "/home/coursesview", },
      { nombre: "Listado de Matriculas", icono: "bi bi-circle", ruta: "/home/tuitionview", },
      { nombre: "Listado de vehiculos", icono: "bi bi-circle", ruta: "/home/vehiclesview", },
      { nombre: "Listado de personas", icono: "bi bi-circle", ruta: "/home/personview", },
      { nombre: "Listado de estado de certificado", icono: "bi bi-circle", ruta: "/home/statecertificateview", },
    ]
    },
  ];
  
  // *********************************************************************************
  
  const optionInvited = [
    { nombre: "Acerca de", icono: "bi bi-grid", ruta: "/home/about", hijos: [], },
    { nombre: "Compras", icono: "bi bi-clipboard-data", ruta: "", hijos: [
        { nombre: "Pendientes", icono: "bi bi-circle", ruta: "/home/admuser", },
        { nombre: "Productos", icono: "bi bi-circle", ruta: "/home/admuser" },
        { nombre: "Antiguas", icono: "bi bi-circle", ruta: "/home/admuser", }
      ]
    }
  ];
  
  export { optionAdmin, optionInvited };