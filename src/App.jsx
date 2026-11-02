import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Havenova from "./pages/Havenova"
import IntelliPhoenix from "./pages/IntelliPhoenix"

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/projects/intelliphoenix' element={<IntelliPhoenix/>}/>
      <Route path='/projects/havenova' element={<Havenova/>}/>
    </Routes>
  )
}

export default App
