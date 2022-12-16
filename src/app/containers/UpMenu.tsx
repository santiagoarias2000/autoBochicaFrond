import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import ServicePrivate from "../server/ServicePrivate";
import ApiBack from "../util/domins/ApiBack";
import { useEffect, useState } from "react";
import UserRole from "../models/UserRole";
import imagenpng from "../../assets/image/autobochica_png.png";
export const UpMenu = () => {
  const down = ()=>{
    document.body.classList.toggle('toggle-sidebar');
  }

  const navegar = useNavigate();
  const [arrayRole, setArrayRole] = useState<UserRole[]>([]);
  const singOut = (event: MouseEvent<HTMLElement>)=>{
    
    event.preventDefault();
    localStorage.removeItem("tokenUsta")
    navegar("/");
  };

  const getMeRoles = async () => {
    const result = await ServicePrivate.petitionGET(ApiBack.USER_PUBLIC_VIEW);
    setArrayRole(result);
  };

  useEffect(() => {
    getMeRoles();
  }, []);

  let rol = arrayRole.find(p=>p.nameRol === "administrador")
  return (
    <div>
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        <div className="d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            <img src={imagenpng} alt="" />
            <span className="d-none d-lg-block">Auto Bochica</span>
          </a>
          <i className="fa-solid fa-list toggle-sidebar-btn" onClick={down}></i>
        </div>

        <div className="search-bar">
          <form
            className="search-form d-flex align-items-center"
            method="POST"
            action="#"
          >
            <input
              type="text"
              name="query"
              placeholder="Buscar"
              title="Enter search keyword"
            />
            <button type="submit" title="Search">
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div>
      
      <nav className="header-nav ms-auto">
        <ul className="d-flex align-items-center">
          <li className="nav-item d-block d-lg-none">
            <a className="nav-link nav-icon search-bar-toggle " href="#">
              <i className="bi bi-search"></i>
            </a>
          </li>


          <li className="nav-item dropdown pe-3">
            <a
              className="nav-link nav-profile d-flex align-items-center pe-0"
              href="#"
              data-bs-toggle="dropdown"
            >
              <img
                src="assets/img/profile-img.jpg"
                alt="Perfil"
                className="rounded-circle"
              />
              <span className="d-none d-md-block dropdown-toggle ps-2">
                {" "}{rol?.nameRol}
              </span>
            </a>

            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
              <li className="dropdown-header">
                <h6>{rol?.nameRol}</h6>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>

              <li>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="users-profile.html"
                >
                  <i className="bi bi-person"></i>
                  <span>Mi Perfil</span>
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>

              <li>
                {/* <a
                  className="dropdown-item d-flex align-items-center"
                  href="users-profile.html"
                >
                  <i className="bi bi-gear"></i>
                  <span>Account Settings</span>
                </a> */}
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>

              <li>
                <a className="dropdown-item d-flex align-items-center" onClick={singOut} href="#">
                  <i className="bi bi-box-arrow-right"></i>
                  <span>Sign Out</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      </header>

    </div>
  );
};
