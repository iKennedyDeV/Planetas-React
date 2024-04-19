import React, { Fragment, useEffect, useState } from "react";
import Planet from "./planet";
import Form from "./form";

// Função assíncrona para buscar informações de todos os planetas
async function getPlanets() {
    const response = await fetch("http://localhost:3000/api/planets.json");
    const data = await response.json();
    return data;
}

const Planets = () => {
    // Define estado para os planetas
    const [planets, setPlanets] = useState([]);

    // useEffect para buscar os planetas quando o componente montar
    useEffect(() => {
        // Chama a função para buscar os planetas e atualiza o estado
        getPlanets().then(data => {
            setPlanets(data['planets']);
        });
    }, []);

    // Função para adicionar um novo planeta
    const addPlanet = (newPlanet) => {
        setPlanets([...planets, newPlanet]); // Adiciona o novo planeta ao estado
    };

    // Função para remover o último planeta da lista
    const removeLast = () => {
        let newPlanets = [...planets];
        newPlanets.pop(); // Remove o último planeta da lista
        setPlanets(newPlanets); // Atualiza o estado com a lista sem o último planeta
    };

    // Função para duplicar o último planeta da lista
    const duplicateLastPlanet = () => {
        const lastPlanet = planets[planets.length - 1]; // Obtém o último planeta da lista
        setPlanets([...planets, { ...lastPlanet }]); // Adiciona uma cópia do último planeta ao estado
    };

    return (
        <Fragment>
            {/* Botões para remover e duplicar o último planeta */}
            <button onClick={removeLast}>Remove Last Planet</button>
            <button onClick={duplicateLastPlanet}>Duplicate Last Planet</button>
            <h3>Planets List</h3>
            <hr/>
            {/* Componente Form para adicionar novos planetas */}
            <Form addPlanet={addPlanet} />
            <hr />
            {/* Mapeia os planetas e renderiza cada um usando o componente Planet */}
            {planets.map((planet, index) => (
                <Planet
                    id={planet.id}
                    key={index}
                    name={planet.name}
                    descricao={planet.description}
                    link={planet.link}
                    img={planet.img_url}
                />
            ))}
        </Fragment>
    );
}

export default Planets;