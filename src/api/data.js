const URL = 'https://localhost:7072/api/'

export function loginProfesor(correo, contrasenia) {
    let datos = { Correo: correo, Contrasenia: contrasenia };
    return fetch(URL + 'profesor', {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(data => data.text())
}
export function loginAdministrador(correo, contrasenia) {
    let datos = { Correo: correo, Contrasenia: contrasenia };
    return fetch(URL + 'admin', {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(data => data.text())
}
export function getProfesores() {
    return fetch(URL + 'profesor', {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(data => data.json())
}
export function crearProfesor(profesor) {

    return fetch(URL + 'profesores', {
        method: 'POST',
        body: JSON.stringify(profesor),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(data => data.text())

}
export function eliminarProfesor(id) {
    return fetch(URL + 'profesor?id=' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(data => data.text())
}
export function obtenerProfesor(id) {
    return fetch(URL + 'prof?id=' + id, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(data => data.json())
}
export function editarProfesor(profesor) {
    return fetch(URL + 'profesor', {
        method: "PUT",
        body: JSON.stringify(profesor),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(data => data.text())
}
export function agregarCurso(curso) {
    return fetch(URL + 'curso', {
        method: "POST",
        body: JSON.stringify(curso),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(data => data.text())
}
export function getCursos() {
    return fetch(URL + 'cursos', {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(data => data.json())
}
export function eliminarCurso(id) {
    return fetch(URL + 'curso?id=' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(data => data.text());
}
export function obtenerCurso(id) {
    return fetch(URL + 'curso?id=' + id, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(data => data.json())
}
export function actualizarCurso(curso) {
    return fetch(URL + 'curso', {
        method: 'PUT',
        body: JSON.stringify(curso),
        headers: {
            'Content-Type': 'application/json'
        }

    }).then(data => data.text())
}
export function getEspacios(){
    return fetch(URL + 'espacios', {
        headers:
        {
            'Content-Type': 'application/json'
        }
    }).then(data => data.json())
}
export function obtenerEspacio(id){
    return fetch(URL + 'espacio?id=' + id,{
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(data => data.json())
}
export function agregarEspacio(espacio){
    
    return fetch(URL + 'espacio', {
        method:'POST',
        body: JSON.stringify(espacio),
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(data => data.text())
}
export function eliminarEspacio(id){
    return fetch(URL + 'espacio?id=' + id,{
        method:'DELETE',
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(data => data.text())
}
export function actualizarEspacio(espacio){
    return fetch(URL + 'espacio', {
        method:'PUT',
        body: JSON.stringify(espacio),
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(data => data.text())
}
export function getGrupos(id){
    return fetch(URL + "grupos?id=" + id, {
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(data => data.json())
}
export function agregarGrupo(grupo){
    return fetch(URL + "grupo",{
        method:'POST',
        body: JSON.stringify(grupo),
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(data => data.text())
}
export function eliminarGrupo(id){
    return fetch(URL + "grupo?id=" + id,{
        method:"DELETE",
        headers:{
            'Content-Type': 'application/json'
        }

    }).then(data => data.text())
}
export function obtenerGrupos(id){
    return fetch(URL + "grupoProf?id=" + id,{
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(data => data.json())
}
export function agregarHorario(horario){
    return fetch(URL + "grupoProf", {
        method:'POST',
        body:JSON.stringify(horario),
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(data => data.text())
}
export function getHorario(id){
    return fetch(URL + "horario?id=" + id,{
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(data => data.json());
}
export function getHorarioAula(id){
    return fetch(URL + "horarioEspacio?id=" + id,{
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(data => data.json())
}