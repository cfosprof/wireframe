// let userDog = prompt("What is your favorite dog?");
//       if (userDog) {
//         document.write(`I love ${userDog} too!`);
//       } else {
//         alert(`That's not a valid answer, please reload the page again because I don't want to handle a bunch of conditionals to make this work right now`)
//       }

// let userAnswer = prompt("What is your favorite outdoor dog?");
// document.write(`${userAnswer}'s' are awesome!`);


function getName() {
    let userDog = prompt("What is your favorite dog?");
    if (userDog) {
        document.write(`I love ${userDog} too!`);
    } else {
        alert(`That's not a valid answer, please reload the page again because I don't want to handle a bunch of conditionals to make this work right now`)
    }
}

function getUserAnswer() {
    let userAnswer = prompt("What is your favorite outdoor dog?");
    if (userAnswer) {
        document.write(`${userAnswer}'s' are awesome!`);
    } else {
        alert(`That's not a valid answer, please reload the page again because I don't want to handle a bunch of conditionals to make this work right now`)
    }
}

function getUserAnswer2() {
    let userAnswer2 = prompt("What is your favorite indoor dog?");
    if (userAnswer2) {
        document.write(`${userAnswer2}'s' are awesome too!`);
    } else {
        alert(`That's not a valid answer, please reload the page again because I don't want to handle a bunch of conditionals to make this work right now`)
    }
}