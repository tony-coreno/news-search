import React from "react";
import PropTypes from "prop-types";
import styles from "./Formulario.module.css";
import useSelect from "../hooks/useSelect";

const Formulario = ({ guardarCategoria }) => {
  const opciones = [
    { value: "general", label: "General" },
    { value: "business", label: "Negocios" },
    { value: "entertaiment", label: "Entretenimiento" },
    { value: "health", label: "Salud" },
    { value: "science", label: "Ciencia" },
    { value: "sports", label: "Deportes" },
    { value: "technology", label: "Tecnología" },
  ];

  //Utilizar Custom hook

  const [categoria, SelectNoticias] = useSelect("general", opciones);

  // submit al form, pasar categoría a app.js
  const buscarNoticias = (e) => {
    e.preventDefault();
    guardarCategoria(categoria);
  };

  return (
    <div className={`${styles.buscador} row`}>
      <div className="col s12 m8 offset-m2">
        <form onSubmit={buscarNoticias}>
          <h2 className={styles.heading}>Encuentra noticias por categoría</h2>
          <SelectNoticias />
          <hr />
          <div className="input-field col s12">
            <input
              type="submit"
              className={`${styles["btn-block"]} btn-large amber darken-2`}
              value="Buscar"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

Formulario.propTypes = {
  guardarCategoria: PropTypes.func.isRequired,
};

export default Formulario;
