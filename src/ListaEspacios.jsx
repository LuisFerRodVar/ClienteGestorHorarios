import { useEffect, useState } from "react";
import { NavbarAdmin } from "./NavbarAdmin";
import * as API from './api/data';
import { Link } from "react-router-dom";

export function ListaEspacios(){
    const [nuevoEspacio, setNuevoEspacio] = useState([{"id":"","descripcion":"","capacidad":""}]);
    const [espacios, setEspacios] = useState([]);

    useEffect(() =>{
        API.getEspacios().then(setEspacios);
    })
    function agregarEspacio(){
        let validar = nuevoEspacio.id.trim() !== "" && nuevoEspacio.descripcion.trim() !== "" && nuevoEspacio.capacidad.trim() !== "";
        if(validar){
            API.agregarEspacio(nuevoEspacio).then(resultado => {
                if( resultado == "true"){
                    alert("Nuevo espacio agregado correctamente");
                    document.getElementById("id").value = "";
                    document.getElementById("descripcion").value = "";
                    document.getElementById("cantidad").value = "";
                }else{
                    alert("Error al agregar el espacio");
                }
            })
        }
    }
    function eliminarEspacio(id){
        API.eliminarEspacio(id).then(resultado => {
            if(resultado == "true"){
                alert("El espacio se ha eliminado correctamente");
            }else{
                alert("Error al eliminar el espacio");
            }
        })
    }

    return(
        <>
            <NavbarAdmin />
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Descripcion</th>
                        <th>Capacidad</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>

                </thead>
                <tbody>
                    {
                        espacios?.map(espacio => {
                            return (
                                <tr key={espacio.id}>
                                    <td>{espacio.id}</td>
                                    <td>{espacio.descripcion}</td>
                                    <td>{espacio.capacidad}</td>
                                    <td><Link to={'/aulaHorario/' + espacio.id}>📅</Link></td>
                                    <td><Link to={'/editarEspacio/' + espacio.id}>✏️</Link></td>
                                    <td onClick={() => eliminarEspacio(espacio.id)}>🗑️</td>
                                </tr>
                            );
                        })
                    }
                    <tr>
                        <td><input type='number' id='id' placeholder="ID" onChange={event => setNuevoEspacio({ ...nuevoEspacio, id: event.target.value })}></input></td>
                        <td><input type='text' id='descripcion' placeholder="Descripcion" onChange={event => setNuevoEspacio({ ...nuevoEspacio, descripcion: event.target.value })}></input></td>
                        <td><input type='number' id='cantidad' placeholder="Capacidad" onChange={event => setNuevoEspacio({ ...nuevoEspacio, capacidad: event.target.value })}></input></td>
                        <td><button id='nueva' onClick={() => agregarEspacio()}>Agregar</button></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}