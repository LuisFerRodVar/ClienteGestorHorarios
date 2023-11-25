import { useEffect, useState } from "react"
import { NavbarAdmin } from "./NavbarAdmin"
import * as API from './api/data'
import { useParams } from "react-router-dom";
import './css/EditarEspacio.css'
export function EditarEspacio(){
    const params = useParams();
    const id = params.idEspacio;
    const [espacio, setEspacio] = useState([{"id":"","descripcion":"","capacidad":""}]);
    useEffect(() =>{
        API.obtenerEspacio(id).then(setEspacio);
    },[])
    function handleSubmit(e){
        e.preventDefault();
        API.actualizarEspacio(espacio).then(resultado => {
            if(resultado == "true"){
                alert("El espacio se actualizo correctamente")
            }else{
                alert("El espacio no se actualizo correctamente")
            }
        })
    }
    return(
        <>
            <NavbarAdmin />
            <form id='formulario' onSubmit={handleSubmit}>
                ID: <input type="text" id="id" required disabled value={espacio.id ?? ""} /><br></br>
                Descripcion: <input type="text" id="nombre" required value={espacio.descripcion ?? ""} onChange={event => setEspacio({...espacio,descripcion:event.target.value})}  /><br></br>
                Capacidad: <input type="text" id="carrera" required value={espacio.capacidad ?? ""} onChange={event => setEspacio({...espacio,capacidad:event.target.value})}  /><br></br>
                <input type="submit" id="editar" value="Editar" />
            </form>
        </>
    )
}