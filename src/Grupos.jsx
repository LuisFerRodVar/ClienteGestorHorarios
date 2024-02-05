import { useParams } from "react-router-dom"
import { NavbarAdmin } from "./NavbarAdmin";
import { useEffect, useState } from "react";
import * as API from './api/data';


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
            <table className="main__table">
                <thead className="table__header">
                    <td className="header__square">Numero</td>
                    <td className="header__square">Profesor</td>
                    <td className="header__square">Grupo</td>
                    <td className="header__invisible"></td>
                </thead>
                <tbody className="table__body">
                    {
                        grupos?.map(grupo => {
                            return (
                                <tr className="body__row" id={grupo.id}>
                                    <td className="body__square">{grupo.idCurso}</td>
                                    <td className="body__square">{grupo.idProfesor}</td>
                                    <td className="body__square">{grupo.grupo}</td>
                                    <td className="body__button" onClick={() =>eliminarGrupo(grupo.id)}>Eliminar</td>
                                </tr>

                            );
                        })
                    }
                    <tr className="body__add">
                        <td className="add__option"><input className="add__disabled" type='text' id='curso' placeholder="Curso" required disabled value={id} ></input></td>
                        <td className="add__option" id="combo"><select className="add__combo" id='profesor'onChange={event => setNuevoGrupo({...nuevoGrupo, idProfesor:event.target.value})} >
                            <option value="" >--------------</option>
                            {
                                profesores?.map(profesor => {
                                    return(
                                        <option className="combo__option" value={profesor.id}>{profesor.nombre}</option>
                                    )
                                })
                            }
                            </select></td>
                        <td className="add__option"><input className="add__enabled" type='number' id='grupo' placeholder="Grupo" onChange={event => setNuevoGrupo({ ...nuevoGrupo, grupo:event.target.value })}></input></td>
                        <td className="add__option"><button className="add__button" id='nueva' onClick={() => agregarGrupo()}>Agregar</button></td>
                    </tr>
                </tbody>



            </table>
        </>

    )
}