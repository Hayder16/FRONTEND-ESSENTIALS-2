    topFilms = [
    "The Godfather",
    "The Shawshank Redemption",
    "Schindler's List",
    "Raging Bull",
    "Casablanca"
];

document.querySelector(".film1-ranking").innerHTML = 1;
document.querySelector(".film1-naam").innerHTML = topFilms[0];
document.querySelector(".film2-ranking").innerHTML = 2;
document.querySelector(".film2-naam").innerHTML = topFilms[1];
document.querySelector(".film3-ranking").innerHTML = 3;
document.querySelector(".film3-naam").innerHTML = topFilms[2];
document.querySelector(".film4-ranking").innerHTML = 4;
document.querySelector(".film4-naam").innerHTML = topFilms[3];
document.querySelector(".film5-ranking").innerHTML = 5;
document.querySelector(".film5-naam").innerHTML = topFilms[4];

function moveup(nummer) {
    if(nummer == 1) {
        null;
    } else if(nummer == 2) {
        document.querySelector('.film1-naam').innerHTML = topFilms[1];
        document.querySelector('.film2-naam').innerHTML = topFilms[0];
    } else if(nummer == 3) {
        document.querySelector('.film2-naam').innerHTML = topFilms[2];
        document.querySelector('.film3-naam').innerHTML = topFilms[1];
    } else if(nummer == 4) {
        document.querySelector('.film3-naam').innerHTML = topFilms[3];
        document.querySelector('.film4-naam').innerHTML = topFilms[2];
    } else if(nummer == 5) {
        document.querySelector('.film4-naam').innerHTML = topFilms[4];
        document.querySelector('.film5-naam').innerHTML = topFilms[3];
    }
}

function movedown(nummer) {
    if(nummer == 1) {
        document.querySelector('.film1-naam').innerHTML = topFilms[1];
        document.querySelector('.film2-naam').innerHTML = topFilms[0];
    } else if(nummer == 2) {
        document.querySelector('.film2-naam').innerHTML = topFilms[2];
        document.querySelector('.film3-naam').innerHTML = topFilms[1];
    } else if(nummer == 3) {
        document.querySelector('.film3-naam').innerHTML = topFilms[3];
        document.querySelector('.film4-naam').innerHTML = topFilms[2];
    } else if(nummer == 4) {
        document.querySelector('.film4-naam').innerHTML = topFilms[4];
        document.querySelector('.film5-naam').innerHTML = topFilms[3];
    } else if(nummer == 5) {
        null;
    }
}

function resetList() {
    document.querySelector('.film1-naam').innerHTML = topFilms[0];
    document.querySelector('.film2-naam').innerHTML = topFilms[1];
    document.querySelector('.film3-naam').innerHTML = topFilms[2];
    document.querySelector('.film4-naam').innerHTML = topFilms[3];
    document.querySelector('.film5-naam').innerHTML = topFilms[4];
}
