import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button } from 'react-bootstrap';
import "./usuario.css";
import Agregarcontactos from "./agregarcontactos";


function App() {
  const [Contactos, setContactos] = useState([]);

  const getcontactos = async () => {
    axios.get("https://kpw1ch0aa1.execute-api.us-east-2.amazonaws.com/dev/project")
        .then(response => {
          console.log(response);
          setContactos(response.data);
        })
        .catch(error => {
          console.error("Error al llamar los contactos:", error);
        });
    
  };

  useEffect(() => {
    getcontactos();
  }, []);

  return (
    <div>
      <addcontacts/>
      <h2>Contactos usuarios</h2>
      <div className="container">
        {Contactos?.map((data) => (
          <div className="card-container" key={data.identify}>
            <img src={data.image} class="card-img-top " alt="card" />
            <div class="card-body">
              <h5 class="card-title">Names: {data.names}</h5>
              <p class="card-text">telephone: {data.telephone}</p>
              <p class="card-text">telephone: {data.identify}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
