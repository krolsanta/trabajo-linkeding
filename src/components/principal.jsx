import imagen from  '../assets/imagen.jpg';
import Formulario from './formulario';
import "./estilos.css"

function Principal(){
    return <>   
        <div className="container">
            <div className='bienvenida'>
                <h1>¡TE DAMOS LA BIENVENIDA A TU COMUNIDAD PROFECIONAL!</h1>
                <div>
                    <Formulario />
                </div>
            </div>

            <div className='imagen'>       
                <img  src={imagen} alt="logo"/>  
            </div>
        </div>
    
    </>
}
 export default Principal;