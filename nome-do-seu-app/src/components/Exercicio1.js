import React from 'react';

function Capitulo({ numero, nome }) {
  return (
    <div>
      {numero !== null ? <p>Capítulo #{numero}: {nome}</p> : <p>{nome}</p>}
    </div>
  );
}

function Livro() {
  const capitulos = [
    { numero: null, nome: "Sumário" },
    { numero: "1", nome: "Introdução" },
    { numero: "2", nome: "Desenvolvimento" },
    { numero: "3", nome: "Conclusão" },
    { numero: null, nome: "Referências" },
  ];

  return (
    <div>
      <h1>Livro</h1>
      {capitulos.map((capitulo, index) => (
        <Capitulo key={"capitulo-" + index} numero={capitulo.numero} nome={capitulo.nome} />
      ))}
    </div>
  );
}

export default Livro;
