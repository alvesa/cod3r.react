import React from "react";

export default ({min, max}) => {
const aleatorio = parseInt(Math.random() * (max - min ) + min);
return (
        <>
            <h3>Número Aleatório</h3>
            <span>Mínimo {min}</span>
            <span> Máximo {max}</span><br />
            <span>{ aleatorio }</span> 
        </>
    )
}