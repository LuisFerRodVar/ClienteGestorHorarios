import { Link, useNavigate } from "react-router-dom";

export function NavbarProfesor() {
    const navigate = useNavigate();
    function cerrarSesion() {
        sessionStorage.removeItem('usuario');
        navigate('/');
    }
    return (
        <>
            <nav className="main__navbar">
                <Link to={'/dashboard'}><span className="navbar__option" >Horario</span></Link>
                <Link to={'/listaGrupos'}><span className="navbar__option">Grupos</span></Link>
                <span className="navbar__unlogin" onClick={() => cerrarSesion()}>Cerrar sesion</span>

            </nav>

        </>
    )
}