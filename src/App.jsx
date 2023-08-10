import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Promo from "./components/promo/Promo";
import NavBar from "./components/navBar/NavBar";
import Inicio from "./pages/inicio/Inicio";
import Contacto from "./pages/contacto/Contacto";
import Nosotros from "./pages/nosotros/Nosotros";
import Blog from "./pages/blog/Blog";

import Romana from "./pages/cortinas/romanas/Romanas";

import Footer from "./components/footer/Footer";

const App = () => {

  return(
    <>
      <Promo />

      <Router>
        <NavBar />
        <Routes>
          <Route path="/inicio" element={<Inicio/>} />
          <Route path="/contacto" element={<Contacto/>} />
          <Route path="/nosotros" element={<Nosotros/>} />
          <Route path="/blog" element={<Blog/>} />
          
          <Route path="/romana" element={<Romana/>} />
        </Routes>
      </Router>

      <Footer />

    </>
  );
};

export default App;