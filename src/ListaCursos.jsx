import { useEffect, useState } from "react";
import { NavbarAdmin } from "./NavbarAdmin";
import * as API from "./api/data"
import { Link } from "react-router-dom";


import Swal from "sweetalert2";
export function ListaCursos() {
    const [cursos, setCursos] = useState([]);
    const [nuevoCurso, setNuevoCurso] = useState({ "id": "", "nombre": "", "carrera": "", "ciclo": "" });

    useEffect(() => {
        API.getCursos().then(setCursos);
    })
    function eliminarCurso(id) {
        console.log("Eliminando el curso: " + id);
    }
    function agregarCurso() {
        let validar = nuevoCurso.id.trim() !== "" && nuevoCurso.nombre.trim() !== "" && nuevoCurso.carrera.trim() !== ""
            && nuevoCurso.ciclo.trim() !== "";
        if (validar) {
            API.agregarCurso(nuevoCurso).then(resultado => {
                if (resultado == "true") {
                    Swal.fire({
                        title: "Logrado",
                        text: "El curso se ha agregado correctamente",
                        icon: "success"
                    })
                    
                    document.getElementById('id').value = "";
                    document.getElementById('nombre').value = "";
                    document.getElementById('carrera').value = "";
                    document.getElementById('ciclo').value = "";
                } else {
                    Swal.fire({
                        title: "Error",
                        text: "El curso no se ha agregado",
                        icon: "error"
                    })
                }
            })
        } else {
            Swal.fire({
                title: "Error",
                text: "El curso no se ha agregado",
                icon: "error",
                footer: '<p>Debe indicar un valor en cada espacio<p/>'
            })
        }

    }
    function eliminarCurso(id) {
        Swal.fire({
            title: "¿Está seguro de que desea eliminar el curso?",
            text: "La acción será definitiva",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Eliminar",
            cancelButtonText: "Cancelar"
        }).then(result => {
            if (result.isConfirmed) {
                API.eliminarCurso(id).then(resultado => {
                    if (resultado == "true") {
                        Swal.fire({
                            title: "Logrado",
                            text: "El curso se ha eliminado correctamente",
                            icon: "success"
                        })
                      
                    } else {
                        Swal.fire({
                            title: "Error",
                            text: "El curso no se ha eliminado",
                            icon: "error"
                        })
                    }
                })
            }
        })

    }
    return (
        <>
            <NavbarAdmin />
            <table className="main__table">
                <thead className="table__header">
                    <tr className="header__row">
                        <th className="header__square">Sigla</th>
                        <th className="header__square">Nombre</th>
                        <th className="header__square">Carrera</th>
                        <th className="header__square">Ciclo</th>
                        <th className="header__invisible"></th>
                        <th className="header__invisible"></th>
                        <th className="header__invisible"></th>

                    </tr>

                </thead>
                <tbody className="table__body">
                    {
                        cursos?.map(curso => {
                            return (
                                <tr className="body__row" key={curso.id}>
                                    <td className="body__square" >{curso.id}</td>
                                    <td className="body__square">{curso.nombre}</td>
                                    <td className="body__square">{curso.carrera}</td>
                                    <td className="body__square">{curso.ciclo}</td>
                                    <td className="body__square"><Link to={'/grupos/' + curso.id}>📚</Link></td>
                                    <td className="body__square"><Link to={'/editarCurso/' + curso.id}>✏️</Link></td>
                                    <td className="body__square" onClick={() => eliminarCurso(curso.id)}>🗑️</td>
                                </tr>
                            );
                        })
                    }
                    <tr className="body__new">
                        <td className="body__square"><input className="body__input" type='text' maxLength={30} id='id' placeholder="Sigla" onChange={event => setNuevoCurso({ ...nuevoCurso, id: event.target.value })}></input></td>
                        <td className="body__square"><input className="body__input" type='text' maxLength={30} id='nombre' placeholder="Nombre" onChange={event => setNuevoCurso({ ...nuevoCurso, nombre: event.target.value })}></input></td>
                        <td className="body__square"><input className="body__input" type='text' maxLength={30} id='carrera' placeholder="Carrera" onChange={event => setNuevoCurso({ ...nuevoCurso, carrera: event.target.value })}></input></td>
                        <td className="body__square"><input className="body__input" type='number' max={10} min={1} id='ciclo' placeholder="Ciclo" onChange={event => setNuevoCurso({ ...nuevoCurso, ciclo: event.target.value })}></input></td>
                        <td className="body__square"><button className="body__button" id='nueva' onClick={() => agregarCurso()}>Agregar</button></td>
                    </tr>
                </tbody>
            </table>
        </>

    )
}