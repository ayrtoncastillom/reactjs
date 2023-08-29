import React from "react";
import styles from "./card.module.css";

const Card = (props) => {
    return (
        <div className={styles.card}>
            <img src={props.image} alt="Imagen" />
            <h2>{props.tittle}</h2>
            <p>{props.description}</p>
            <button className={styles.buyButton}>Comprar</button>
        </div>
    );
};

export default Card;
