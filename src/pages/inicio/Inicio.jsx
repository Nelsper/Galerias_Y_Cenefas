import './scss/inicio.css';
import Carrusel from '../../components/carrusel/Carrusel';
import flayer from '../../assets/img/carrusel/Cyber.jpg';
import Tarjetas from '../../components/tarjetas/Tarjetas';
const Inicio = () => {

    return(
        <>
            <Carrusel />
            <div className="bloque"></div>
            <img src={flayer} alt="Flayer" className='flayer d-block w-100'/>
            <Tarjetas />
        </>
    );
};

export default Inicio;