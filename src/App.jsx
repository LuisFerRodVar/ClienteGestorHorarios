import { Route, Routes } from "react-router-dom";
import { Login }  from "./Login"
import {ListaCursos} from "./ListaCursos";
import {ListaProfesores} from "./ListaProfesores";
import { EditarProfesor } from "./EditarProfesor";
import { Dashboard} from "./Dashboard";
import { EditarCurso } from "./EditarCurso";
import { ListaEspacios } from "./ListaEspacios";
import { EditarEspacio } from "./EditarEspacio";
import { Grupos } from "./Grupos";
import { ListaGrupos } from "./ListaGrupos";
import { AsignarHorario } from "./AsignarHorario";
import { HorarioAula } from "./HorarioAula";
export function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/listaProfesores' element={<ListaProfesores />}/>
      <Route path='/listaCursos' element={<ListaCursos />} />
      <Route path='/editarProfesor/:idProfesor' element={<EditarProfesor />}/>
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/editarCurso/:idCurso' element={<EditarCurso />} />
      <Route path='/listaEspacios' element={<ListaEspacios />} />
      <Route path='/editarEspacio/:idEspacio' element={<EditarEspacio />} />
      <Route path='/grupos/:idCurso' element={<Grupos />} />
      <Route path='/listaGrupos' element={<ListaGrupos />} />
      <Route path='/asignarHorario/:idGrupo' element={<AsignarHorario />} />
      <Route path='/aulaHorario/:idAula' element={<HorarioAula />} />
      
    </Routes>
  )
}


