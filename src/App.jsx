import Header from "./Header";
import "./App.css";
import { useEffect, useState } from "react";
import { ContainerCards } from "./ComicCard";



function App() {
  const [text, setText] = useState("");
  const [agentesValorant, setAgentesValorant] = useState([]);

  useEffect(() => {
    console.log("Se ejecuta el use Effect");
    
    fetch("https://valorant-api.com/v1/agents?isPlarayable=true")
      .then((respuesta) => respuesta.json())
      .then((data) => {
        setAgentesValorant(data.data || []);
      });
  }, []);

  console.log("Se renderiza App");
  

  function handleChangeText(value) {
    setText(value);
  }

  return (
    <>
      <Header text={text} handleChangeText={handleChangeText}></Header>
      <ContainerCards text={text} agentes={agentesValorant}></ContainerCards>
    </>
  );
}

export default App;
