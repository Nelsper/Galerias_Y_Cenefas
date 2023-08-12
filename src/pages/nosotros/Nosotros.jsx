import './scss/nosotros.css';
import img from '../../assets/img/nosotros/empresa.png';

const Nosotros = () => {

    return(
        <>
            <div className='contenedorNosotros'>
                <div className="nosotrosImagen">
                    <img src={img} alt="Imagen Acerca de nosotros" />
                </div>
            </div>
            
            <div className="acerca">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero assumenda magni provident aperiam, unde quam doloribus rerum. Officiis, harum laborum, maxime ipsam repudiandae sunt eaque dolores quos, accusantium earum minus!</p>
            </div>
        </>
    );
};

export default Nosotros;