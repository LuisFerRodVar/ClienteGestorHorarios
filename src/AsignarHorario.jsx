import { useNavigate, useParams } from "react-router-dom";
import { NavbarProfesor } from "./NavbarProfesor";
import { useEffect, useState } from "react";
import * as API from './api/data'


export function AsignarHorario() {
    const params = useParams();
    const id = params.idGrupo;
    const [horario, setHorario] = useState([{ "idGrupo": "", "dia": "", "espacio": "", "horaEntrada": "", "horaSalida": "" }]);
    const [espacios, setEspacios] = useState([]);
    const navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();
        setHorario({ ...horario, idGrupo: id });
        API.agregarHorario(horario).then(resultado => {
            if (resultado == 'true') {
                alert("El horario fue asignado correctamente");
            } else {
                alert("Error no se asigno el horario");
            }
        })
    }
    useEffect(() => {
        API.getEspacios().then(setEspacios);
    })
    function verHorario(idAula) {
        navigate('/aulaHorario/' + idAula);
    }

    return (
        <>
            <NavbarProfesor />
            <form onSubmit={handleSubmit}>
                Espacio:<select id='espacio' onChange={event => setHorario({ ...horario, espacio: event.target.value })}>
                    <option value="">------------</option>
                    {
                        espacios?.map(espacio => {
                            return (
                                <option key={espacio.id} value={espacio.id}>{espacio.descripcion + ' ' + espacio.id}</option>
                            )
                        })
                    }
                </select><button id='btnHorario' value='Ver horario' onClick={() => verHorario(horario.espacio)}>Ver Horario</button><br></br>
                Dia:<select id='dia' onChange={event => setHorario({ ...horario, dia: event.target.value })}>
                    <option value=''>------------</option>
                    <option value='0'>Lunes</option>
                    <option value='1'>Martes</option>
                    <option value='2'>Miercoles</option>
                    <option value='3'>Jueves</option>
                    <option value='4'>Viernes</option>
                    <option value='5'>Sabado</option>
                    <option value='6'>Domingo</option>


                </select><br></br>

                Hora de entrada:<select id='horaEntrada' onChange={event => setHorario({ ...horario, horaEntrada: event.target.value })}>
                    <option value=''>-----</option>
                    <option value='0'>7:00</option>
                    <option value='1'>8:00</option>
                    <option value='2'>9:00</option>
                    <option value='3'>10:00</option>
                    <option value='4'>11:00</option>
                    <option value='5'>12:00</option>
                    <option value='6'>13:00</option>
                    <option value='7'>14:00</option>
                    <option value='8'>15:00</option>
                    <option value='9'>16:00</option>
                    <option value='10'>17:00</option>
                    <option value='11'>18:00</option>
                    <option value='12'>19:00</option>
                    <option value='13'>20:00</option>
                    <option value='14'>21:00</option>
                    <option value='15'>22:00</option>
                </select><br></br>
                Hora de salida:<select id='horaSalida' onChange={event => setHorario({ ...horario, horaSalida: event.target.value })}>
                    <option value=''>-----</option>
                    <option value='0'>7:50</option>
                    <option value='1'>8:50</option>
                    <option value='2'>9:50</option>
                    <option value='3'>10:50</option>
                    <option value='4'>11:50</option>
                    <option value='5'>12:50</option>
                    <option value='6'>13:50</option>
                    <option value='7'>14:50</option>
                    <option value='8'>15:50</option>
                    <option value='9'>16:50</option>
                    <option value='10'>17:50</option>
                    <option value='11'>18:50</option>
                    <option value='12'>19:50</option>
                    <option value='13'>20:50</option>
                    <option value='14'>21:50</option>
                    <option value='15'>22:50</option>
                </select><br></br>
                <input type='submit' id='agregar' value="Agregar" />


            </form>

        </>


    )
}