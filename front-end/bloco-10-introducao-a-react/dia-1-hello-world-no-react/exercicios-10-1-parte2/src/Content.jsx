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
      <div className='envelope'>
        {conteudos.map((obj) => <div className='parent-div'><p><span>O conteúdo é:</span> {obj.conteudo}</p><p><span>Status:</span> {obj.status}</p><p><span>Bloco:</span> {obj.bloco}</p></div>)}
      </div>
    );
  }
}

export default Content;