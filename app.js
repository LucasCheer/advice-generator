
const adviceButton = document.getElementById("btn-next");
const adviceParagraph = document.getElementById("quote-text");
const numberAdvice = document.getElementById("id-advice");

adviceButton.addEventListener("click", () => {
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(data => {
            adviceParagraph.textContent = `"${data.slip.advice}"`;
            numberAdvice.textContent = `${data.slip.id}`
            
        })
        .catch(error => {
            console.error("Error fetching advice:", error);
            adviceParagraph.textContent = "Sorry, could not fetch advice at the moment.";
        });
});