function generateRandomJoke() {
  fetch("https://api.chucknorris.io/jokes/random")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    var joke = data.value;
    console.log("JOKE:", joke);
    const q = document.querySelector(".q");
    const h4 = document.createElement("h4");
    h4.classList.add("card-title");
    h4.classList.add("display-4");
    const jokeText = document.createTextNode(joke);
    h4.appendChild(jokeText);
    q.appendChild(h4);
  })
  .catch();
}

const btn = document.querySelector(".btn");
btn.addEventListener("click", () =>{
  generateRandomJoke();
})