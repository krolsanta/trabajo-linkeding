function Formulario () {
return<>
<form className="formulario"> 


    <label>Email o Telefono:</label>
    <input type="text" id="email o telefono"/>        
    <br/>
    <label>Contraseña: </label>  
    <input type="text" name="contraseña" id="contraseña"/>  
    <br/> 
    <a href="">¿has olvidado tu contraseña?</a>
     
<button>iniciar sesion</button>
</form> 
</>
}
export default Formulario;

//Este es el formulario que se mostrara en la pagina, este recibe los datos del usuario por medio de un input y luego estos son enviados a
//import React from 'react';
//class Formulario extends React.Component  
    
    
