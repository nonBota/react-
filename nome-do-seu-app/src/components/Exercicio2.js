import React from 'react';

function Capitulo({ numero, nome, conteudo }) {
  return (
    <div>
      <h3>{nome}</h3>
      <p>{conteudo}</p>
    </div>
  );
}

function Livro() {
  const capitulos = [
    { numero: null, nome: "Sumário", conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { numero: "1", nome: "Introdução", conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { numero: "2", nome: "Desenvolvimento", conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
    { numero: "3", nome: "Conclusão", conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { numero: null, nome: "Referências", conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  ];

  return (
    <div>
      <h1>Livro</h1>
      {capitulos.map((capitulo, index) => (
        <Capitulo key={"capitulo-" + index} numero={capitulo.numero} nome={capitulo.nome} conteudo={capitulo.conteudo} />
      ))}
    </div>
  );
}

export default Livro;
