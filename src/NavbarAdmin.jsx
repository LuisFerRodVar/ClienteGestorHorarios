import React from "react";
import { useNavigate } from "react-router-dom";
import './css/styles.css'


export function NavbarAdmin() {
  const navigate = useNavigate();

  function handleNavigate(route) {
    navigate(route);
  }

  function cerrarSesion() {
    sessionStorage.removeItem("usuario");
    navigate("/");
  }

  return (
    <nav className="main__navbar">
      <span className="navbar__option" onClick={() => handleNavigate("/listaCursos")}>Cursos</span>
      <span className="navbar__option" onClick={() => handleNavigate("/listaProfesores")}>Profesores</span>
      <span className="navbar__option" onClick={() => handleNavigate("/listaEspacios")}>Espacios</span>
      <span className="navbar__unlogin" id="cerrar-sesion" onClick={() => cerrarSesion()}>
        Cerrar sesión
      </span>
    </nav>
  );
}
