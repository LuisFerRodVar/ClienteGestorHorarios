import { useEffect, useState } from "react";
import { NavbarAdmin } from "./NavbarAdmin";
import * as API from "./api/data"
import { Link } from "react-router-dom";
import './assets/grupo.png'
import './css/ListaCursos.css'

export function ListaCursos() {
    const [cursos, setCursos] = useState([]);
    const [nuevoCurso, setNuevoCurso] = useState({ "id": "", "nombre": "", "carrera": "", "ciclo": "" });

    useEffect(() => {
        API.getCursos().then(setCursos);
    })
    function eliminarCurso(id){
        console.log("Eliminando el curso: " + id);
    }
    function agregarCurso(){
        console.log(nuevoCurso.carrera.trim() !== "" );
        let validar = nuevoCurso.id.trim() !== "" && nuevoCurso.nombre.trim() !== "" && nuevoCurso.carrera.trim() !== "" 
            && nuevoCurso.ciclo.trim() !== "";
        if(validar){
            API.agregarCurso(nuevoCurso).then(resultado => {
                if(resultado == "true"){
                    alert("Curso agregado correctamente");
                    document.getElementById('id').value = "";
                    document.getElementById('nombre').value = "";
                    document.getElementById('carrera').value = "";
                    document.getElementById('ciclo').value = "";
                }else{
                    alert("Error al agregar el curso");
                }
            })
        }else{
            alert("No puede insertar con datos vacios");
        }
        
    }
    function eliminarCurso(id){
        API.eliminarCurso(id).then(resultado => {
            if(resultado == "true"){
                alert("Curso eliminado correctamente");
            }else{
                alert("No se pudo eliminar el curso");
            }
        })
    }
    return (
        <>
            <NavbarAdmin />
            <table>
                <thead>
                    <tr>
                        <th>Sigla</th>
                        <th>Nombre</th>
                        <th>Carrera</th>
                        <th>Ciclo</th>
                        <th></th>
                        <th></th>
                        <th></th>

                    </tr>

                </thead>
                <tbody>
                    {
                        cursos?.map(curso => {
                            return (
                                <tr key={curso.id}>
                                    <td>{curso.id}</td>
                                    <td>{curso.nombre}</td>
                                    <td>{curso.carrera}</td>
                                    <td>{curso.ciclo}</td>
                                    <td><Link to={'/grupos/'+ curso.id}>📚</Link></td>
                                    <td><Link to={'/editarCurso/' + curso.id}>✏️</Link></td>
                                    <td onClick={() => eliminarCurso(curso.id)}>🗑️</td>
                                </tr>
                            );
                        })
                    }
                    <tr>
                        <td><input type='text' id='id' placeholder="Sigla" onChange={event => setNuevoCurso({ ...nuevoCurso, id: event.target.value })}></input></td>
                        <td><input type='text' id='nombre' placeholder="Nombre" onChange={event => setNuevoCurso({ ...nuevoCurso, nombre: event.target.value })}></input></td>
                        <td><input type='text' id='carrera' placeholder="Carrera" onChange={event => setNuevoCurso({ ...nuevoCurso, carrera: event.target.value })}></input></td>
                        <td><input type='number' min={1} id='ciclo' placeholder="Ciclo" onChange={event => setNuevoCurso({ ...nuevoCurso, ciclo: event.target.value })}></input></td>
                        <td><button id='nueva' onClick={() => agregarCurso()}>Agregar</button></td>
                    </tr>
                </tbody>
            </table>
        </>

    )
}