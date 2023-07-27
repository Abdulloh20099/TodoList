import Home from "./Home"
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Update from "./Update"
import Create from "./Create"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Home/>} path="/"/>
      <Route element={<Create/>}path="/Create"/>
      <Route path="/edit/:id" element={<Update/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
