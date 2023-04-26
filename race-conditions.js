
const getCharacterById = async (id) => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.json())
    .then((data) => data);
};


const insertLiDomElement = (data) => {
  const ul = document.getElementById('list');
  const li = document.createElement('li');
  li.setAttribute('class', 'list-item');
  li.innerHTML = `
    <p>ID: ${data.id}</p>
    <p>Name: ${data.name}</p>
    <img src="${data.image}" alt="${data.image}" width="200px" height="auto">
  `;

  ul.appendChild(li);
}


const init = (numCharacters) => {
  for (let i = 1; i < numCharacters; i++) {
    getCharacterById(i)
      .then(data => insertLiDomElement(data));
  }
}

// const init = (numCharacters) => {
//   const promiseList = []
//   for (let i = 1; i < numCharacters; i++) {
//     promiseList.push(getCharacterById(i));
//   }
//   Promise.all(promiseList)
//     .then(responseList => responseList.forEach(data => insertLiDomElement(data)));
// }

// const init = async (numCharacters) => {
//   for (let i = 1; i < numCharacters; i++) {
//     const data = await getCharacterById(i);
//     insertLiDomElement(data);
//   }
// }

const numCharacters = 10;
init(numCharacters);