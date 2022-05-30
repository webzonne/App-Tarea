import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';
import frecodecamlogo from './imagenes/freecodecamp-logo.png';



function App() {
  return (
    <div className="Aplicacion-tareas">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' src={frecodecamlogo} alt='logo' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
