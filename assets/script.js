function ShowPage1() {
    document.getElementById("picture1").style.display = "flex";
    document.getElementById("picture2").style.display = "none";
    document.getElementById("picture3").style.display = "none";

}

function ShowPage2() {
    document.getElementById("picture1").style.display = "none";
    document.getElementById("picture2").style.display = "flex";
    document.getElementById("picture3").style.display = "none";

}

function ShowPage3() {
    document.getElementById("picture1").style.display = "none";
    document.getElementById("picture2").style.display = "none";
    document.getElementById("picture3").style.display = "flex";

}

window.onload = ShowPage1;