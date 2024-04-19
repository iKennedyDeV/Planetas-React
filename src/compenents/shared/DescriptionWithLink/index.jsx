import React from "react";

const DescriptionWithLink = (props) => {
    if (!props.descricao) {
        return null;
    }
    if (props.link) { //if para se nao houver link 
        return (

            <div>
                <p>{props.descricao}</p>
                <a href={props.link}>Mais Informações</a>

            </div>
        )
    } else { //envia um resultado sem o link
        <div>
            <p><u>{props.descricao}</u></p>
        </div>
    }
}

export default DescriptionWithLink