import { useState } from "react";
import * as API from './api/data';
import { useNavigate } from "react-router-dom";


export function Login() {
  const [credenciales, setCredenciales] = useState({ Correo: '', Contrasenia: '' });
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    if ((await API.loginAdministrador(credenciales.Correo, credenciales.Contrasenia)).length != 0) {
      sessionStorage.setItem('usuario',"ADMIN");
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
      <form onSubmit={handleSubmit}>
        Correo:<input type='text' id='correo' onChange={event => setCredenciales({ ...credenciales, Correo: event.target.value })} /><br></br>
        Contraseña:<input type='password' id='contrasenia' onChange={event => setCredenciales({ ...credenciales, Contrasenia: event.target.value })} /><br></br>
        <input type='submit' value='Ingresar' />
      </form>
    </>
  )
}