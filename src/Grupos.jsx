import { useParams } from "react-router-dom"
import { NavbarAdmin } from "./NavbarAdmin";
import { useEffect, useState } from "react";
import * as API from './api/data';
import './css/Grupos.css'

export function Grupos() {
    const params = useParams();
    const id = params.idCurso;
    const [profesores, setProfesores] = useState([]);
    const [grupos, setGrupos] = useState([]);
    const [nuevoGrupo, setNuevoGrupo] = useState([{"idCurso":"", "idProfesor":"","grupo":""}]);

    useEffect(() => {
        API.getProfesores().then(setProfesores);
        API.getGrupos(id).then(setGrupos);

    })
    function agregarGrupo(){
        setNuevoGrupo({...nuevoGrupo,idCurso:id});
        console.log(nuevoGrupo.idProfesor);
        let validar = nuevoGrupo.idProfesor.trim() !== "" && nuevoGrupo.grupo.trim() !== "";
        if(validar){
            API.agregarGrupo(nuevoGrupo).then(resultado => {
                if(resultado == 'true'){
                    alert("El grupo ha sido agregado correctamente")
                }else{
                    alert("Error al agregar el grupo")
                }
            })
            
        }
    }
    function eliminarGrupo(idGrupo){
        API.eliminarGrupo(idGrupo).then(resultado => {
            if(resultado == 'true'){
                alert("El grupo fue eliminado correctamente")
            }else{
                alert("El grupo no se elimino")
            }
        })
    }

    return (
        <>
            <NavbarAdmin />
            <table>
                <thead>
                    <td>Numero</td>
                    <td>Profesor</td>
                    <td>Grupo</td>
                    <td></td>
                </thead>
                <tbody>
                    {
                        grupos?.map(grupo => {
                            return (
                                <tr id={grupo.id}>
                                    <td>{grupo.idCurso}</td>
                                    <td>{grupo.idProfesor}</td>
                                    <td>{grupo.grupo}</td>
                                    <td onClick={() =>eliminarGrupo(grupo.id)}>Eliminar</td>
                                </tr>

                            );
                        })
                    }
                    <tr>
                        <td><input type='text' id='curso' placeholder="Curso" required disabled value={id} ></input></td>
                        <td id="combo"><select id='profesor'onChange={event => setNuevoGrupo({...nuevoGrupo, idProfesor:event.target.value})} >
                            <option value="" >--------------</option>
                            {
                                profesores?.map(profesor => {
                                    return(
                                        <option value={profesor.id}>{profesor.nombre}</option>
                                    )
                                })
                            }
                            </select></td>
                        <td><input type='number' id='grupo' placeholder="Grupo" onChange={event => setNuevoGrupo({ ...nuevoGrupo, grupo:event.target.value })}></input></td>
                        <td><button id='nueva' onClick={() => agregarGrupo()}>Agregar</button></td>
                    </tr>
                </tbody>



            </table>
        </>

    )
}