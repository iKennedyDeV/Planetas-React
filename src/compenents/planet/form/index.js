import React, { Fragment, useState } from "react";

// Estado inicial do formulário
const initialState = {
    name: ''
}

const Form = (props) => {
    // Define o estado para os campos do formulário
    const [fields, setFields] = useState(initialState);

    // Função para lidar com mudanças nos campos de input
    const handleFieldsChange = e => {
        // Atualiza o estado dos campos com o valor do campo atual
        setFields({
            ...fields,
            [e.currentTarget.name]: e.currentTarget.value
        });
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = e => {
        // Chama a função addSatelite do componente pai passando os campos do formulário
        props.addSatelite(fields);
        
        // Evita o comportamento padrão de envio do formulário (recarregar a página)
        e.preventDefault();
        
        // Reseta os campos do formulário para o estado inicial após o envio
        setFields(initialState);
    };

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" name="name" value={fields.name} onChange={handleFieldsChange}></input>
                </div>
                <br/>
                <input type="submit" value="Adicionar" />
            </form>
        </Fragment>
    );
}

export default Form;