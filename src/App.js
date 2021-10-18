import React, { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoNoticias from "./components/ListadoNoticias";

function App() {
  //Definir categoría y noticias
  const [categoria, guardarCategoria] = useState("");
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=adae9c75cab442ab9749a363accb2d83`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      //Cuando se obtenga la consulta se asigna a noticias
      const {articles} = noticias
      guardarNoticias(articles);
      console.log(noticias);
    };
    consultarAPI();
  }, [categoria]);

  return (
    <>
      <Header titulo="Buscador de Noticias" />
      <div className="container white">
        <Formulario guardarCategoria={guardarCategoria} />
        <ListadoNoticias noticias={noticias} />
      </div>
    </>
  );
}

export default App;
