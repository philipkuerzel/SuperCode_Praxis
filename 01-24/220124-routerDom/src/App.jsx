import {Route, Routes} from "react-router-dom"
import './App.css'
import Speisekarte from "./pages/speisekarte/Speisekarte"
import Kontakt from "./pages/kontakt/Kontakt"
import Galerie from "./pages/galerie/Galerie"
import Oeffnungszeiten from "./pages/öffnungszeiten/Öffnungszeiten"
import Home from "./pages/home/Home"

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/speisekarte" element={<Speisekarte />}/>
        <Route path="/kontakt" element={<Kontakt />}/>
        <Route path="/oeffnungszeiten" element={<Oeffnungszeiten />}/>
        <Route path="/galerie" element={<Galerie />}/>
      </Routes>
    </>
  )
}

export default App
