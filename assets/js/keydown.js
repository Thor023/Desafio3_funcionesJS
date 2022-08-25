let color = "";

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        color = "lightcoral"
    } else if (event.key === 's') {
        color = "lightblue"
    } else if (event.key === 'd') {
        color = "lightgreen"
    }
});

function changeBkgcolor() {
    const cardList = document.querySelectorAll("#card-1, #card-2, #card-3, #card-4");
  
    for (let i = 0; i < cardList.length; i++) {
        cardList[i].addEventListener("click", function (background) {
            background.target.style.backgroundColor = color;
        });
    }

    const clickResetbutton = document.getElementById("reset-button");

    clickResetbutton.addEventListener("click", () => {
        console.log("Colores reseteados!")
        document.getElementById("card-1").style.backgroundColor = "red";
        document.getElementById("card-2").style.backgroundColor = "blue";
        document.getElementById("card-3").style.backgroundColor = "green";
        document.getElementById("card-4").style.backgroundColor = "yellow";
    });
}
  
changeBkgcolor();