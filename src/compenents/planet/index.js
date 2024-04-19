import React, { Fragment, useEffect, useState } from "react";
import GrayImg from "../shared/grayImg";
import DescriptionWithLink from "../shared/DescriptionWithLink";
import Form from "../planet/form";

import { useParams, useHistory, Redirect } from "react-router-dom";

// Função assíncrona para buscar informações de um planeta pelo ID
async function getPlanet(id) {
    const response = await fetch(`http://localhost:3000/api/${id}.json`);
    const data = await response.json();
    return data;
}

const Planet = () => {
    // Define estado para os satélites
    const [satelites, setSatelites] = useState([]);
    const [planet, setPlanet] = useState([]); // Estado para armazenar informações do planeta
    const [redirect, setRedirect] = useState(false); // Estado para redirecionamento
    let { id } = useParams(); // Obtém o parâmetro de rota 'id'
    let history = useHistory(); // Permite navegar na história do navegador

    // useEffect para buscar os satélites quando o componente montar ou o ID mudar
    useEffect(() => {
        // Chama a função para buscar os satélites e atualiza o estado
        getPlanet(id).then(data => {
            setSatelites(data['satellites']);
            setPlanet(data['data']);
        }).catch(error => {
            setRedirect(true); // Define o redirecionamento em caso de erro
        });
    }, [id]); // Dependência planet.id para que a busca seja refeita quando o ID mudar

    // Função para redirecionar de volta para a página inicial
    const goToPlanets = () => {
        history.push("/");
    }

    // Função para adicionar um novo satélite
    const addSatelite = (newSatelite) => {
        setSatelites([...satelites, newSatelite]); // Adiciona o novo satélite ao estado
    };

    // Determina o título com ou sem sublinhado, dependendo da propriedade title_with_underline
    let title;
    if (planet.title_with_underline) {
        title = <h4><u>{planet.name}</u></h4>;
    } else {
        title = <h4>{planet.name}</h4>;
    }

    // Verifica se há necessidade de redirecionamento
    if (redirect) {
        return <Redirect to="/" />;
    }

    // Renderiza o componente Planet
    return (
        <Fragment>
            {title}
            <DescriptionWithLink descricao={planet.descricao} link={planet.link} />
            <GrayImg img={planet.img_url} name={planet.name} gray={planet.gray} />
            <h4>Satélite</h4>
            <hr />
            {/* Renderiza o formulário para adicionar satélites */}
            <Form addSatelite={addSatelite} />
            <hr />
            <ul>
                {/* Mapeia os satélites e renderiza cada um como um item de lista */}
                {satelites.map((satelite, index) =>
                    <li key={index}>{satelite.name}</li>
                )}
            </ul>

            <button type="button" onClick={goToPlanets}>Voltar a Listagem </button>
        </Fragment>
    );
}

export default Planet;