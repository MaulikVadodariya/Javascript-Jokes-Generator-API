const jokeBtn = document.querySelector("#jokeBtn");
const jokeElement = document.querySelector("#joke");

const setJoke = () => {

    var joke;

    fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => {
        // console.log("API : " , response.json());
        return response.json();
    })
    .then((data) => {
         joke = data.value;
         jokeElement.innerHTML = joke;
    })
    .catch();
    
}

jokeBtn.addEventListener("click" ,  setJoke);
