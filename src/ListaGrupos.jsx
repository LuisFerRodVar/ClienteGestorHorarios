import { useEffect, useState } from "react";
import { NavbarProfesor } from "./NavbarProfesor";
import * as API from './api/data'
import { Link } from "react-router-dom";

export function ListaGrupos() {
    const [grupos, setGrupos] = useState([]);
    useEffect(() => {
        API.obtenerGrupos(sessionStorage.getItem('usuario')).then(setGrupos);
    })
    return (
        <>
            <NavbarProfesor />
            <table className="main__table">
                <thead className="table__header">
                    <tr className="header__row">
                        <td className="header__square">Curso</td>
                        <td className="header__square">Grupo</td>
                        <td className="header__invisible"></td>
                    </tr>

                </thead>
                <tbody className="table__body">
                    {
                        grupos?.map(grupo => {
                            return (
                                <tr key={grupo.id}>
                                    <td>{grupo.idCurso}</td>
                                    <td>{grupo.grupo}</td>
                                    <td><Link to={'/asignarHorario/' + grupo.id}>Asignar horario</Link></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}