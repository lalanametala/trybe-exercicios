import React, { Component } from "react";
import InputRender from "./Input";
import Option from "./Option";

class PersonalFieldset extends Component {
  render() {
    const states = [
      { value: 'AC', label: 'Acre' },
      { value: 'AL', label: 'Alagoas' },
      { value: 'AP', label: 'Amapá' },
      { value: 'AM', label: 'Amazonas' },
      { value: 'BA', label: 'Bahia' },
      { value: 'CE', label: 'Ceará' },
      { value: 'DF', label: 'Distrito Federal' },
      { value: 'ES', label: 'Espírito Santo' },
      { value: 'GO', label: 'Goías' },
      { value: 'MA', label: 'Maranhão' },
      { value: 'MT', label: 'Mato Grosso' },
      { value: 'MS', label: 'Mato Grosso do Sul' },
      { value: 'MG', label: 'Minas Gerais' },
      { value: 'PA', label: 'Pará' },
      { value: 'PB', label: 'Paraíba' },
      { value: 'PR', label: 'Paraná' },
      { value: 'PE', label: 'Pernambuco' },
      { value: 'PI', label: 'Piauí' },
      { value: 'RJ', label: 'Rio de Janeiro' },
      { value: 'RN', label: 'Rio Grande do Norte' },
      { value: 'RS', label: 'Rio Grande do Sul' },
      { value: 'RO', label: 'Rondônia' },
      { value: 'RR', label: 'Roraíma' },
      { value: 'SC', label: 'Santa Catarina' },
      { value: 'SP', label: 'São Paulo' },
      { value: 'SE', label: 'Sergipe' },
      { value: 'TO', label: 'Tocantins' },
    ];

    const { name, email, cpf, address, city, state, handleChange } = this.props;

    return(
      <fieldset>
        <legend>Dados Pessoais</legend>
        <InputRender 
          name="name" 
          label="Nome" 
          value={name}
          handleChange={handleChange}
        />
        <InputRender 
          name="email" 
          label="E-mail" 
          value={email} 
          handleChange={handleChange}
        />
        <InputRender 
          name="cpf" 
          label="CPF" 
          value={cpf} 
          handleChange={handleChange}
        />
        <InputRender 
          name="address" 
          label="Endereço" 
          value={address} 
          handleChange={handleChange}
        />
        <InputRender 
          name="city" 
          label="Cidade" 
          value={city} 
          handleChange={handleChange}
        />
        <select 
          value={state}
          onChange={handleChange}
          name="state"
        >
          <Option 
            value='' 
            text="Selecione um estado" 
            key='30'
          />
          {states.map(({ value, label }, index) => (
            <Option 
              value={value} 
              text={label} 
              key={index}
            />
          ))}

        </select>
        <label htmlFor="house">
          <input
            type="radio"
            id="house"
            name="resType"
            value="house"
            onChange={handleChange}
          />
          Casa
        </label>
        <label htmlFor="apart">
          <input
            type="radio"
            id="apart"
            name="resType"
            value="apartment"
            onChange={handleChange}
          />
          Apartamento
        </label>

      </fieldset>
    );
  }
}

export default PersonalFieldset;