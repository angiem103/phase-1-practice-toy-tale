let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

function renderOneToy(toys) {
  toys.forEach(toy => {
  let card = document.createElement('div')
  card.className = 'card'
  card.innerHTML =`
    <h4>${toy.name}</h4>
    <img src="${toy.image}" class='toy-avatar'>
    <p>${toy.likes}</p>
    <button class='like-button' id=${toy.id}>
`
  console.log(toy)
  //console.log(card.innerHTML)
  //console.log(toys.id)
  })
}

document.addEventListener("DOMContentLoaded", fetchingToys)

function fetchingToys() {
  fetch("http://localhost:3000/toys")
  .then(res =>res.json())
  .then(toys => {renderOneToy(toys)});
}