const init = () => {
 
  const form = document.querySelector("form")
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input =  document.getElementById("searchByID")
    fetch(`http://localhost:3000/movies/${input.value}`)
    .then(res => res.json())
    .then(data => {
        const title = document.querySelector("section#movieDetails h4")
        const paragraph = document.querySelector("section#movieDetails p")

        title.innerHTML = data.title;
        paragraph.innerHTML = data.summary
    });
});
}

document.addEventListener('DOMContentLoaded', init);