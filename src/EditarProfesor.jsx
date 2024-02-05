import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as API from "./api/data";
import { NavbarAdmin } from "./NavbarAdmin";


export function EditarProfesor(){
    const params = useParams();
    const id = params.idProfesor;
    const [profesor,setProfesor] = useState([]);
    useEffect(() => {
        API.obtenerProfesor(id).then(setProfesor);
    },[])
    function handleSubmit(e){
        e.preventDefault();
        console.log(profesor.toString());
        API.editarProfesor(profesor).then(result => {
            if(result ==  "true"){
                alert("Editado correctamente")
            }else{
                alert("Error al editar")
            }
        })
    }
    return(
        <>
            <NavbarAdmin />
            <form id='formulario' onSubmit={handleSubmit}>
                Cédula: <input type="text" id="id" required disabled value={profesor.id ?? ""} /><br></br>
                Nombre: <input type="text" id="nombre" required value={profesor.nombre ?? ""} onChange={event => setProfesor({...profesor,nombre:event.target.value})}  /><br></br>
                Apellidos: <input type="text" id="apellidos" required value={profesor.apellidos ?? ""} onChange={event => setProfesor({...profesor,apellidos:event.target.value})} /><br></br>
                Correo: <input type="text" id="correo" required value={profesor.correo ?? ""} onChange={event => setProfesor({...profesor,correo:event.target.value})} /><br></br>
                Contraseña: <input type="text" id="contrasenia" required value={profesor.contrasenia ?? ""}  onChange={event => setProfesor({...profesor,contrasenia:event.target.value})} /><br></br>
                <input type="submit" id="editar" value="Editar" />

            </form>
        </>
        
    )
}