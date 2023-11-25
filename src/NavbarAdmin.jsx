import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/NavbarAdmin.css";

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
    <nav>
      <span onClick={() => handleNavigate("/listaCursos")}>Cursos</span>
      <span onClick={() => handleNavigate("/listaProfesores")}>Profesores</span>
      <span onClick={() => handleNavigate("/listaEspacios")}>Espacios</span>
      <span id="cerrar-sesion" onClick={() => cerrarSesion()}>
        Cerrar sesión
      </span>
    </nav>
  );
}
