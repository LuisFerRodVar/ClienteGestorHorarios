import { useParams } from "react-router-dom"
import { NavbarAdmin } from "./NavbarAdmin"
import { useEffect, useState } from "react";
import * as API from './api/data'
import './css/EditarCurso.css'
export function EditarCurso(){
    const params = useParams();
    const id = params.idCurso;
    const [curso,setCurso] =  useState([{
        id: "",
        nombre: "",
        carrera: "",
        ciclo: "",
      }
    ]);
    useEffect(() =>{
        API.obtenerCurso(id).then(setCurso);
    }, [])

    function handleSubmit(e){
        e.preventDefault();
        API.actualizarCurso(curso).then(resultado => {
            if(resultado == 'true'){
                alert("El curso actualizo correctamente");
            }else{
                alert("Error")
            }
        })
    }
    return(
        <>
            <NavbarAdmin />
            <form id='formulario' onSubmit={handleSubmit}>
                Sigla: <input type="text" id="id" required disabled value={curso.id ?? ""} /><br></br>
                Nombre: <input type="text" id="nombre" required value={curso.nombre ?? ""} onChange={event => setCurso({...curso,nombre:event.target.value})}  /><br></br>
                Carrera: <input type="text" id="carrera" required value={curso.carrera ?? ""} onChange={event => setCurso({...curso,carrera:event.target.value})}  /><br></br>
                Ciclo: <input type="number" min={1} id="ciclo" required value={curso.ciclo ?? ""} onChange={event => setCurso({...curso,ciclo:event.target.value})}  /><br></br>
                <input type="submit" id="editar" value="Editar" />

            </form>
            
        </>
        
    )
}