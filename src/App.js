import logo from './logo.svg';
import './App.css';
import Publicacion from './Publicación/publicacion';
import img from './imagenes/post.jpg';
import img2 from './imagenes/corazon.png';
import come from './imagenes/coment.png';
import env from './imagenes/enviar.png';
import per from './imagenes/Foto para ingles.jpg';

function App() {
  return (
    <div className="">
      <header className="">
        <Publicacion perfil={per} nombre="Andrea Corado"  lugar="Canadá" 
        foto={img} descripcion=" Trabajando ordenadamente" dia="22/09/2023" like={img2} coment={come} send={env} />
      </header>
    </div>
  );
}

export default App;
