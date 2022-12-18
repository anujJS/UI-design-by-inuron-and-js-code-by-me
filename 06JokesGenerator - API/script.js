const joke = document.querySelector(".joke");
const btn = document.querySelector("#jokeBtn");


function generate() {
    btn.textContent = "Loding quote..."
    fetch("https://api.Quotable.io/random").then(res => res.json()).then(result => {
        joke.textContent = result.content;
        btn.textContent = "Get Another Joke";
        });
}


btn.addEventListener("click", generate);