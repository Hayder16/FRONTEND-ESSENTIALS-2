topFilms = [
    "The Godfather",
    "The Shawshank Redemption",
    "Schindler's List",
    "Raging Bull",
    "Casablanca",
    "Citizen Kane",
    "Gone with the Wind",
    "The Wizard of Oz",
    "One Flew Over the Cuckoo's Nest",
    "Lawrence of Arabia"
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
document.querySelector(".film6-ranking").innerHTML = 6;
document.querySelector(".film6-naam").innerHTML = topFilms[5];
document.querySelector(".film7-ranking").innerHTML = 7;
document.querySelector(".film7-naam").innerHTML = topFilms[6];
document.querySelector(".film8-ranking").innerHTML = 8;
document.querySelector(".film8-naam").innerHTML = topFilms[7];
document.querySelector(".film9-ranking").innerHTML = 9;
document.querySelector(".film9-naam").innerHTML = topFilms[8];
document.querySelector(".film10-ranking").innerHTML = 10;
document.querySelector(".film10-naam").innerHTML = topFilms[9];

function kiesFavorieteFilm(){
    answer = prompt('Wat is de nummer van je favoriete film?');
    if(answer < 0) {
        alert('Dit getal is te klein');
        return false;
    } else if(answer > 10) {
        alert('Dit getal is te groot');
        return false;
    } else if(answer === null) {
        return false;
    }
    if(answer == 1) {
        console.log(alert = 'The Godfather')
        document.querySelector(".film1-naam").style.backgroundColor = "Blue";
        document.querySelector(".film1-naam").style.color = 'White';
    } else if(answer == 2) {
        console.log(alert = 'The Shawshank Redemption')
        document.querySelector(".film2-naam").style.backgroundColor = "Blue";
        document.querySelector(".film2-naam").style.color = 'White';
    } else if(answer == 3) {
        console.log(alert = 'Schindlers List')
        document.querySelector(".film3-naam").style.backgroundColor = "Blue";
        document.querySelector(".film3-naam").style.color = 'White';
    } else if(answer == 4) {
        console.log(alert = 'Raging Bull')
        document.querySelector(".film4-naam").style.backgroundColor = "Blue";
        document.querySelector(".film4-naam").style.color = 'White';
    } else if(answer == 5) {
        console.log(alert = 'Casablanca')
        document.querySelector(".film5-naam").style.backgroundColor = "Blue";
        document.querySelector(".film5-naam").style.color = 'White';
    } else if(answer == 6) {
        console.log(alert = 'Citizen Kane')
        document.querySelector(".film6-naam").style.backgroundColor = "Blue";
        document.querySelector(".film6-naam").style.color = 'White';
    } else if(answer == 7) {
        console.log(alert = 'Gone with the Wind')
        document.querySelector(".film7-naam").style.backgroundColor = "Blue";
        document.querySelector(".film7-naam").style.color = 'White';
    } else if(answer == 8) {
        console.log(alert = 'The Wizard of Oz')
        document.querySelector(".film8-naam").style.backgroundColor = "Blue";
        document.querySelector(".film8-naam").style.color = 'White';
    } else if(answer == 9) {
        console.log(alert = 'One Flew Over the Cuckoos Nest')
        document.querySelector(".film9-naam").style.backgroundColor = "Blue";
        document.querySelector(".film9-naam").style.color = 'White';
    } else if(answer == 10) {
        console.log(alert = 'Lawrence of Arabia')
        document.querySelector(".film10-naam").style.backgroundColor = "Blue";
        document.querySelector(".film10-naam").style.color = 'White';
    }
}

kiesFavorieteFilm();
