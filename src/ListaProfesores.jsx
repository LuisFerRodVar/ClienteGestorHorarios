import { useEffect, useState } from 'react';
import {NavbarAdmin} from './NavbarAdmin';
import * as API from './api/data';
import { Link } from 'react-router-dom';


export function ListaProfesores() {
    const [profesores, setProfesores] = useState([]);
    const [nuevoProfesor, setNuevoProfesor] =  useState({nombre: '', apellidos: '', id:'', correo:'', contrasenia:''})

    useEffect(() => {
        API.getProfesores().then(setProfesores);
    })
    function eliminarProfesor(id){
        API.eliminarProfesor(id).then(result =>{
            if(result == "true"){
                alert("Profesor eliminado exitosamente");
            }else{
                alert("No se pudo eliminar");
            }
        })
    }
    function agregarProfesor(){
        
        let validar = nuevoProfesor.id.trim() !== "" && nuevoProfesor.nombre.trim() !== "" && nuevoProfesor.apellidos.trim() !== "" 
            && nuevoProfesor.correo.trim() !== "" && nuevoProfesor.contrasenia.trim() !== ""
        if(validar){
            API.crearProfesor(nuevoProfesor).then(result => {
                console.log(result);
                if(result == "true"){
                    alert("Profesor agregado con exito");
                    document.getElementById('cedula').value = "";
                    document.getElementById('nombre').value = "";
                    document.getElementById('apellidos').value = "";
                    document.getElementById('correo').value = "";
                    document.getElementById('contrasenia').value = "";
                }else{
                    alert("Error al agregar el profesor")
                }
            })
        }
    }
    return (
        <>
            <NavbarAdmin />
            <table>
                <thead>
                    <tr>
                        <th>Cédula</th>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Email</th>
                        <th>Contraseña</th>
                        <th></th>
                        <th></th>
                        
                    </tr>

                </thead>
                <tbody>
                    {
                        profesores?.map(profesor => {
                            return(
                            <tr key={profesor.id}>
                                <td>{profesor.id}</td>
                                <td>{profesor.nombre}</td>
                                <td>{profesor.apellidos}</td>
                                <td>{profesor.correo}</td>
                                <td>{profesor.contrasenia}</td>
                                <td><Link to= {'/editarProfesor/' + profesor.id}>✏️</Link></td>
                                <td onClick={() => eliminarProfesor(profesor.id)}>🗑️</td>
                            </tr>
                            );
                        })
                    }
                     <tr>
                        <td><input type='text' id='cedula' placeholder="Cedula" onChange={event => setNuevoProfesor({ ...nuevoProfesor, id: event.target.value })}></input></td>
                        <td><input type='text' id='nombre' placeholder="Nombre" onChange={event => setNuevoProfesor({ ...nuevoProfesor, nombre: event.target.value })}></input></td>
                        <td><input type='text' id='apellidos' placeholder="Apellidos" onChange={event => setNuevoProfesor({ ...nuevoProfesor, apellidos: event.target.value })}></input></td>
                        <td><input type='text' id='correo' placeholder="Correo" onChange={event => setNuevoProfesor({ ...nuevoProfesor, correo: event.target.value })}></input></td>
                        <td><input type='text' id='contrasenia' placeholder="Contraseña" onChange={event => setNuevoProfesor({ ...nuevoProfesor, contrasenia: event.target.value })}></input></td>
                        <td><button id='nueva' onClick={() => agregarProfesor()}>Agregar</button></td>
                    </tr>
                </tbody>
            </table>
        </>

    )
}