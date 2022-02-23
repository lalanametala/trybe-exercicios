import React, { Component } from 'react';

class Resume extends Component {
  render() {
    const {
      currentState: {
        name, email, cpf, address, city, state, resType, resumeSum, job, jobDescr
      }
    } = this.props;
    return (
      <div>
        <h2>Dados enviados</h2>
        <h3>Pessoal</h3>
        <div> Name: { name }</div>
        <div> Email: { email }</div>
        <div> CPF: { cpf }</div>
        <div> Endereço: { address }</div>
        <div> Cidade: { city }</div>
        <div> Estado: { state }</div>
        <div> Tipo de residência: { resType }</div>
        <h3>Profissional</h3>
        <div> Currículo: { resumeSum }</div>
        <div> Cargo: { job }</div>
        <div> Descrição do cargo: { jobDescr }</div>
      </div>
    );
  }
}

export default Resume;