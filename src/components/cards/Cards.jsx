import React from 'react'
import styles from "./Cards.module.css"

    const Cards = (props) => {
  return (
        <div className={styles.card}>
            <div>
                <p className={styles.titulo}>{props.Titulo}</p>
                <img src={props.Print} alt="" />
                <p className={styles.titulo}><a href={props.Link}>Link Projeto</a></p>
            </div>
        </div>
  )
}

export default Cards
