const mainText = document.getElementById("mainText");
const button = document.getElementById("btn");

button.addEventListener("click", () => { 
    mainText.textContent = "You just clicked the button!";
    mainText.style.color = "red";
    mainText.style.fontWeight = "bold";
});
