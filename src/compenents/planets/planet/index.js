import React, { Fragment} from "react";
import GrayImg from "../../shared/grayImg";
import DescriptionWithLink from "../../shared/DescriptionWithLink";


import { Link } from "react-router-dom";


const Planet = (props) => {
    
    // Determina o título com ou sem sublinhado, dependendo da propriedade title_with_underline
    let title;
    if (props.title_with_underline) {
        title = <h4><u>{props.name}</u></h4>;
    } else {
        title = <h4>{props.name}</h4>;
    }

    return (
        <Fragment>
            <Link to={`/planet/${props.id}`}>{title}</Link>
            <DescriptionWithLink descricao={props.descricao} link={props.link} />
            <GrayImg img={props.img} name={props.name} gray={props.gray} />  
            
        </Fragment>
    );
}

export default Planet;