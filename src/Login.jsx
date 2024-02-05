import { useState } from "react";
import * as API from './api/data';
import { useNavigate } from "react-router-dom";
import './css/styles.css'


export function Login() {
  const [credenciales, setCredenciales] = useState({ Correo: '', Contrasenia: '' });
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    if ((await API.loginAdministrador(credenciales.Correo, credenciales.Contrasenia)).length != 0) {
      sessionStorage.setItem('usuario', "ADMIN");
      navigate('/listaCursos');

    } else {
      let usuario = await API.loginProfesor(credenciales.Correo, credenciales.Contrasenia);
      if (usuario.length != 0) {
        sessionStorage.setItem('usuario', usuario);
        navigate('/dashboard');
      } else {
        alert('No login');
      }
    }


  }
  return (
    <>
      <div className="login__container">
        <form className="login__form" onSubmit={handleSubmit}>
          <span className="login__text">Correo:</span><input className="login__input" type='text' id='correo' onChange={event => setCredenciales({ ...credenciales, Correo: event.target.value })} /><br></br>
          <span className="login__text">Contraseña:</span><input className="login__input" type='password' id='contrasenia' onChange={event => setCredenciales({ ...credenciales, Contrasenia: event.target.value })} /><br></br>
          <input className="login__button" type='submit' value='Ingresar' />
        </form>
      </div>
    </>

  )
}