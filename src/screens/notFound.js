import React from "react"
import { Link } from "react-router-dom";

const NotFound = ()=>{
return(
    <div>
        <h3>Pagina não encontrada</h3>
        <Link to={"/"}>Voltar ao Home</Link>
    </div>
)

}

export default NotFound;
