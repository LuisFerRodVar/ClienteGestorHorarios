import { Link, useNavigate } from "react-router-dom";
import './css/NavbarAdmin.css'
export function NavbarProfesor(){
    const navigate = useNavigate();
    function cerrarSesion(){
        sessionStorage.removeItem('usuario');
        navigate('/');
    }
    return(
        <>
            <Link to={'/dashboard'}><span>Horario</span></Link>
            <Link to={'/listaGrupos'}><span>Grupos</span></Link>
            <span onClick={() => cerrarSesion()}>Cerrar sesion</span>
        </>
    )
}