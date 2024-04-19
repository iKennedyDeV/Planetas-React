import React, { Fragment, useState } from "react";

// Estado inicial para os campos do formulário
const initialState = {
    name: '',
    description: '',
    link: '',
    img_url: ''
}

const Form = (props) => {
    // Define o estado para os campos do formulário
    const [fields, setFields] = useState(initialState);

    // Função para lidar com mudanças nos campos de input
    const handleFieldsChange = e => setFields({
        ...fields,
        [e.currentTarget.name]: e.currentTarget.value
    });

    // Função para lidar com o envio do formulário
    const handleSubmit = e => {
        // Chama a função addPlanet do componente pai passando os campos do formulário
        props.addPlanet(fields);
        
        // Evita o comportamento padrão de envio do formulário (recarregar a página)
        e.preventDefault();
        
        // Reseta os campos do formulário para o estado inicial após o envio
        setFields(initialState);
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={fields.name} onChange={handleFieldsChange}></input>
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <input type="text" id="description" name="description" value={fields.description} onChange={handleFieldsChange}></input>
                </div>
                <div>
                    <label htmlFor="link">Link:</label>
                    <input type="text" id="link" name="link" value={fields.link} onChange={handleFieldsChange}></input>
                </div>
                <div>
                    <label htmlFor="img_url">Image URL:</label>
                    <input type="text" id="img_url" name="img_url" value={fields.img_url} onChange={handleFieldsChange}></input>
                </div>
                <br />
                <input type="submit" value="Adicionar" />
            </form>
        </Fragment>
    );
}

export default Form;