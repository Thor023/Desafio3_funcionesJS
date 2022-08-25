function changeBkgcolor() {
    document.querySelector("#ele1").addEventListener("click", function (pintar) {
    if (pintar.target.style.backgroundColor == "") {
        pintar.target.style.backgroundColor = "green";
    } else if (pintar.target.style.backgroundColor == "green") {
        pintar.target.style.backgroundColor = "yellow";
    } else {
        pintar.target.style.backgroundColor = "green";
    }
    });
    const clickResetbutton = document.getElementById("reset-button");

    clickResetbutton.addEventListener("click", () => {
        document.getElementById("ele1").style.backgroundColor = "";
    });
}

changeBkgcolor();