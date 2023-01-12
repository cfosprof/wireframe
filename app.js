// let userDog = prompt("What is your favorite dog?");
//       if (userDog) {
//         document.write(`I love ${userDog} too!`);
//       } else {
//         alert(`That's not a valid answer, please reload the page again because I don't want to handle a bunch of conditionals to make this work right now`)
//       }

// let userAnswer = prompt("What is your favorite outdoor dog?");
// document.write(`${userAnswer}'s' are awesome!`);


// function getName() {
//     let userDog = prompt("What is your favorite dog?");
//     if (userDog) {
//         document.write(`I love ${userDog} too!`);
//     } else {
//         alert(`That's not a valid answer, please reload the page again because I don't want to handle a bunch of conditionals to make this work right now`)
//     }
// }

function getName() {
    let userDog = prompt("What is your favorite dog?");
    while (!userDog) {
        userDog = prompt("It looks like you left that blank,, do you want to plug your keyboard in and try again?")
    }
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

// function repeatImage() {
//     let userNumber = prompt("How many times do you want to see griffey on the couch?");
//     userNumber = parseInt(userNumber)
//     for (let i = 0; i < userNumber; i++) {
//         document.write('<img src="images/39B523CB-42C9-4D35-AACE-79C832479756.jpg" alt="Outdoor Dog">')
//     }
// }

function repeatImage() {
    let userNumber = prompt("How many times do you want to see griffey on the couch?");
    userNumber = parseInt(userNumber)
    for (let i = 0; i < userNumber && userNumber < 8; i++) {
        document.write('<img src="images/39B523CB-42C9-4D35-AACE-79C832479756.jpg" alt="Outdoor Dog">')
    }
}