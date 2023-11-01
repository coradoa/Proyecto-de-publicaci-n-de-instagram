import React,{ useState } from "react"; //importamos react
import './publicacion.css' // importamos el css

//hacemos la funcion para llevar el un contador de likes y de las variables a pedir
function Publicacion({perfil,nombre,dia,lugar,foto,descripcion,like, coment,send}){
    const[conta,setConta]=useState(0);//creamos una constante inicializada en cero

    //Funcion que incrementa el valor de conta
    const inclike =() =>{
        setConta(conta + 1);
    }

    //hacemos el html y pasamos parametros
    return(
        <div className="post-container">
            <div>
                <div style={{textAlign:'left' , marginLeft: '5px'}}>
                    <div className="perfil">
                        <img id="imagen" src={perfil}/>
                    </div>
                    <div className="perfil">
                        <h2 className="componente">{nombre}</h2>
                        <h4 className="componente">{lugar}</h4> 
                    </div>  
                </div>
                <div>
                    <img src={foto} className="post-image"></img>
                </div>

                <div className="container">
                    <button onClick={inclike} className="like-button" ><img src={like} id="tamaño"></img></button>
                    <button className="like-button" ><img src={coment} id="tamaño"></img></button>
                    <button className="like-button" ><img src={send} id="tamaño"></img></button>
                </div>
                <h4 className="componente">Le gusta a {conta}</h4>
                <h5 className="componente" id="alapar">{nombre}</h5>
                <p className="componente" id="alapar">{descripcion}</p>
                <h5 className="componente">{dia}</h5>
            </div>
        </div>
    );
}
export default Publicacion;



