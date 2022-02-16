import React from "react";

class Content extends React.Component {
  render() {
    const conteudos = [
      {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
      },
      {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo',
      },
      {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei'
      },
      {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
      },
    ];
    return(
      conteudos.map((obj) => <div className='parent-div'><p>O conteúdo é: {obj.conteudo}</p><p>Status: {obj.status}</p><p>Bloco: {obj.bloco}</p></div>)
    );
  }
}

export default Content;