const prettyPrint = ({ results }) => {
  console.groupCollapsed('Data [green => alive | red => dead]:');
  for (const character of results) {
    console.groupCollapsed('%c %c' + character.name, 'background-color: ' + (character.status === 'Dead' ? 'red' : character.status === 'Alive' ? 'green' : 'grey') + '; margin-right: 10px', 'background-color: transparent');
    console.table({
      Nombre: {value: character.name},
      Estado:   {value: character.status},
      Especie: {value: character.species},
      Genero: {value: character.gender}
    });
    console.groupEnd();
  }
  console.groupEnd();
}

const getCharactersPromise = () => {
  console.time('getCharactersPromise');
  fetch('https://rickandmortyapi.com/api/character')
    .then((response) => {
      return response.json()
        .then((data) => {
          prettyPrint(data);
          // console.timeEnd('getCharactersPromise');
        });
    })
  console.timeEnd('getCharactersPromise');
};

const getCharactersAwait = async () => {
  console.time('getCharactersAwait');
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const data = await response.json();
  prettyPrint(data);
  console.timeEnd('getCharactersAwait');
};

getCharactersPromise();
getCharactersAwait();