var diceOneNumber = Math.floor(Math.random() *6) + 1;
var diceTwoNumber = Math.floor(Math.random() *6) + 1;

if (diceOneNumber > diceTwoNumber) {
    document.getElementsByTagName("h1")[0].innerHTML = "Player 1 Wins!";
} else if (diceTwoNumber > diceOneNumber) {
    document.getElementsByTagName("h1")[0].innerHTML = "Player 2 Wins!";
} else {
    document.getElementsByTagName("h1")[0].innerHTML = "It's a Draw!";
}

var imageOneString = "images/dice"+diceOneNumber+".png";
document.getElementById("img1").setAttribute("src",imageOneString);

var imageTwoString = "images/dice"+diceTwoNumber+".png";
document.getElementById("img2").setAttribute("src", imageTwoString);

//At first, I used this logic
// changeImageOne(diceOneNumber);
// changeImageTwo(diceTwoNumber);

// function changeImageOne(dice) {
//     switch (dice) {
//         case 1: document.getElementById("img1").setAttribute("src", "images/dice1.png");
//             break;
//         case 2: document.getElementById("img1").setAttribute("src", "images/dice2.png");
//             break;
//         case 3: document.getElementById("img1").setAttribute("src", "images/dice3.png");
//             break;
//         case 4: document.getElementById("img1").setAttribute("src", "images/dice4.png");
//             break;
//         case 5: document.getElementById("img1").setAttribute("src", "images/dice5.png");
//             break;
//         case 6: document.getElementById("img1").setAttribute("src", "images/dice6.png");
//             break;
//     }
// }

// function changeImageTwo(dice) {
//     switch (dice) {
//         case 1: document.getElementById("img2").setAttribute("src", "images/dice1.png");
//             break;
//         case 2: document.getElementById("img2").setAttribute("src", "images/dice2.png");
//             break;
//         case 3: document.getElementById("img2").setAttribute("src", "images/dice3.png");
//             break;
//         case 4: document.getElementById("img2").setAttribute("src", "images/dice4.png");
//             break;
//         case 5: document.getElementById("img2").setAttribute("src", "images/dice5.png");
//             break;
//         case 6: document.getElementById("img2").setAttribute("src", "images/dice6.png");
//             break;
//     }
// }


