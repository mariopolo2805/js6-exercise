
const fetchCharacter = (id) => {
  getCharacter(id, callbackFunction);
};

const getCharacter = (id, callback) => {
  const url = `https://rickandmortyapi.com/api/character/${id}`;
  const request = new XMLHttpRequest();

  request.onreadystatechange = function () {
    if (request.readyState === 4) {
      callback(request);
    }
  };

  request.open("GET", url);
  request.send();
};

const callbackFunction = (request) => {
  if (request.status == 200) {
    const { episode, ...character } = JSON.parse(request.response);
    console.log('Data of: ' + character.name);
    console.table(character);
  } else {
    console.error("Oops! WTF!");
  }
};

fetchCharacter(1);