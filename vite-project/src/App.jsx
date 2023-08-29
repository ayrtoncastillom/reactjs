import React from "react";
import styles from "./App.module.css";
import Card from "./components/Card";
import Contador from "./components/Button";
import Navbar from "./components/navbar"; 

function App() {
  return (
    <><nav className={styles.navbar}>
      <div className={styles.navBrand}>Ayrhwks</div>
      <ul className={styles.navLinks}>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Acerca</a></li>
        <li><a href="#">Servicios</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </nav><div className="App">
        <h1>Probando props</h1>
        <Contador />
        <div className="row">
          <div className="col-4">
            <Card
              image="https://picsum.photos/id/1/500/500"
              tittle="Un título"
              description="Una descripción" />
          </div>
          <div className="col-4">
            <Card
              image="https://picsum.photos/id/2/500/500"
              tittle="Otro título"
              description="Otra descripción" />
          </div>
          <div className="col-4">
            <Card
              image="https://picsum.photos/id/3/500/500"
              tittle="Título adicional"
              description="Descripción adicional" />
          </div>
        </div>
      </div></>
  );
}

export default App;
