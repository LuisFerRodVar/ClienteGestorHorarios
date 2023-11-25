import { useEffect, useState } from "react";
import { NavbarProfesor } from "./NavbarProfesor";
import * as API from './api/data'
import { Link } from "react-router-dom";
import './css/ListaGrupos.css'
export function ListaGrupos() {
    const [grupos, setGrupos] = useState([]);
    useEffect(() => {
        API.obtenerGrupos(sessionStorage.getItem('usuario')).then(setGrupos);
    })
    return (
        <>
            <NavbarProfesor />
            <table>
                <thead>
                    <tr>
                        <td>Curso</td>
                        <td>Grupo</td>
                        <td></td>
                    </tr>

                </thead>
                <tbody>
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