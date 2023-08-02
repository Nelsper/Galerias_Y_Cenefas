import './scss/inicio.css';
import Carrusel from '../../components/carrusel/Carrusel';
import flayer from '../../assets/img/carrusel/Cyber.jpg';

const Inicio = () => {

    return(
        <>
            <Carrusel />
            <div className="bloque"></div>
            <img src={flayer} alt="Flayer" className='flayer d-block w-100'/>
        </>
    );
};

export default Inicio;