import { useParams } from "react-router-dom"
import { NavbarAdmin } from "./NavbarAdmin"
import { useEffect, useState } from "react";
import * as API from './api/data'
export function HorarioAula(){
    const params = useParams();
    const id = params.idAula;
    const [hoarios, setHorarios] = useState([]);
    const [celdas, setCeldas] = useState([]);
    const horas = ["7:00 - 7:50",
    "8:00 - 8:50",
    "9:00 - 9:50",
    "10:00 - 10:50",
    "11:00 - 11:50",
    "12:00 - 12:50",
    "13:00 - 13:50",
    "14:00 - 14:50",
    "15:00 - 15:50",
    "16:00 - 16:50",
    "17:00 - 17:50",
    "18:00 - 18:50",
    "19:00 - 19:50",
    "20:00 - 20:50",
    "21:00 - 21:50",
    "22:00 - 22:50"]
    useEffect(() => {
        const fetchData = async () => {
            const fetchedHorarios = await API.getHorarioAula(id);
            setHorarios(fetchedHorarios);

            const updatedCeldas = [
                ["", "", "", "", "", "", ""],
                ["", "", "", "", "", "", ""],
                ["", "", "", "", "", "", ""],
                ["", "", "", "", "", "", ""],
                ["", "", "", "", "", "", ""],
                ["", "", "", "", "", "", ""],
                ["", "", "", "", "", "", ""],
                ["", "", "", "", "", "", ""],
                ["", "", "", "", "", "", ""],
                ["", "", "", "", "", "", ""],
                ["", "", "", "", "", "", ""],
                ["", "", "", "", "", "", ""],
                ["", "", "", "", "", "", ""],
                ["", "", "", "", "", "", ""],
                ["", "", "", "", "", "", ""],
                ["", "", "", "", "", "", ""]
            ];
            console.log(fetchedHorarios);
            fetchedHorarios.forEach(horario => {
                for (let i = horario.horaEntrada; i <= horario.horaSalida; i++) {
                    updatedCeldas[i][horario.dia] = `${horario.idCurso} ${horario.espacio} ${horario.grupo}`;
                }
            });

            setCeldas(updatedCeldas);
        };

        fetchData();
    }, []);
    return(
        <>
            <NavbarAdmin />
            <table>
                <thead>
                    <tr>
                        <th>Hora</th>
                        <th>Lunes</th>
                        <th>Martes</th>
                        <th>Miercoles</th>
                        <th>Jueves</th>
                        <th>Viernes</th>
                        <th>Sabado</th>
                        <th>Domingo</th>
                    </tr>
                </thead>
                <tbody>
                    {celdas.map((fila, index) => (
                        <tr key={index}>
                            <td>{horas[index]}</td>
                            {fila.map((celda, celdaIndex) => (
                                <td key={celdaIndex}>{celda}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}