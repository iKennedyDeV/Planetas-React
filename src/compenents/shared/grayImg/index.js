import React from "react";
import "./index.css"


const GrayImg = (props) => {
    return (
        //verifica se o gray é true se for ira colocar o img-cinza como CLassName
        <img className={props.gray ? "img-cinza" : "color-img"} src={props.img} alt={props.name}></img>
    )
}

export default GrayImg