import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Roles from "../models/Roles";
import "../../assets/css/styleMenu.css";
import UserRole from "../models/UserRole";
import ServicePrivate from "../server/ServicePrivate";
import ApiBack from "../util/domins/ApiBack";
import { optionAdmin, optionInvited } from "../util/domins/OptionSistem";

export const SideMenu = () => {
  const [arrayRole, setArrayRole] = useState<UserRole[]>([]);

  const getMeRoles = async () => {
    const result = await ServicePrivate.petitionGET(ApiBack.USER_PUBLIC_VIEW);
    setArrayRole(result);
  };

  useEffect(() => {
    getMeRoles();
  }, []);

  let opciones: any[] = [];
  arrayRole.forEach((myRole) => {  
    opciones = optionAdmin;
    if(myRole.nameRol === "administrador"){
      opciones = optionInvited
      console.log(myRole.nameRol);
    }
  }); 
  let rol = arrayRole.find(p=>p.nameRol === "administrador")

  return (
    <aside id="sidebar" className="sidebar ">
      <Link
        to="/home"
        className="d-flex align-items-center pb-3 mb-3 link-dark border-bottom"
      >
        {/*<img src={logoReact} alt="noLogo" className="bi pe-none me-1" width="40px" height="auto" />*/}
        <div>
          <span className="fs-5 fw-semibold">{rol?.nameRol}</span>
        </div>
      </Link>

      <ul className="sidebar-nav" id="sidebar-nav">
        {opciones.map((opcion, indice) =>
          opcion.hijos.length ? (
            <li className="nav-item" key={"li" + indice}>
              <a
                className="nav-link collapsed"
                data-bs-target={"#menu" + indice}
                data-bs-toggle="collapse"
                href="/#"
              >
                <i className={opcion.icono}></i>
                <span>{opcion.nombre}</span>
                <i className="bi bi-chevron-down ms-auto"></i>
              </a>
              <ul
                id={"menu" + indice}
                className="nav-content collapse "
                data-bs-parent="#sidebar-nav"
              >
                {opcion.hijos.map((subMenu: any, otroIndice: number) => (
                  <li key={"sub" + otroIndice}>
                    <Link to={subMenu.ruta}>
                      <i className={subMenu.icono}></i>
                      <span>{subMenu.nombre}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li className="nav-item" key={indice}>
              <Link to={opcion.ruta} className="nav-link collapsed">
                <i className={opcion.icono}></i>
                <span>{opcion.nombre}</span>
              </Link>
            </li>
          )
        )}
      </ul>
    </aside>
  );
};
