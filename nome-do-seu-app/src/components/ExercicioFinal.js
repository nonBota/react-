import React, { useState } from 'react';

function Livro({ titulo, capitulos }) {
  const [visivel, setVisivel] = useState(false);

  const handleClick = () => {
    setVisivel(!visivel);
  };

  return (
    <div>
      <h1>{titulo}</h1>
      <button onClick={handleClick}>{visivel ? 'Esconder Conteúdo' : 'Mostrar Conteúdo'}</button>
      {visivel && (
        <div>
          <h2>Capítulos</h2>
          {capitulos.map((capitulo, index) => (
            <div key={"capitulo-" + index}>
              <h3>{capitulo.nome}</h3>
              <p>{capitulo.conteudo}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Biblioteca() {
  const livros = [
    {
      titulo: "Livro 1",
      capitulos: [
        { numero: null, nome: "Sumário", conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { numero: "1", nome: "Introdução", conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        { numero: "2", nome: "Desenvolvimento", conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
        { numero: "3", nome: "Conclusão", conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { numero: null, nome: "Referências", conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Etiam euismod metus felis, ut commodo justo scelerisque nec. Sed eleifend eget odio nec lacinia." }
      ]
    },
    {
      titulo: "Livro 2",
      capitulos: [
        { numero: null, nome: "Sumário", conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { numero: "1", nome: "Introdução", conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        { numero: "2", nome: "Desenvolvimento", conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
        { numero: null, nome: "Referências", conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Etiam euismod metus felis, ut commodo justo scelerisque nec. Sed eleifend eget odio nec lacinia." }
      ]
    },
    {
      titulo: "Livro 3",
      capitulos: [
        { numero: null, nome: "Sumário", conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { numero: "1", nome: "Introdução", conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        { numero: null, nome: "Referências", conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Etiam euismod metus felis, ut commodo justo scelerisque nec. Sed eleifend eget odio nec lacinia." }
      ]
    }
  ];

  return (
    <div>
      <h1>Biblioteca</h1>
      {livros.map((livro, index) => (
        <Livro key={"livro-" + index} titulo={livro.titulo} capitulos={livro.capitulos} />
      ))}
    </div>
  );
}

export default Biblioteca;
