// // Create a new Button element. Give it a text "Click Me!", background Color "red"
// // & text color "White".

// // let newBtn = document.createElement("button");
// // newBtn.innerHTML = "ClickMe";
// // newBtn.style.backgroundColor = "red";
// // newBtn.style.color = "white";

// // document.querySelector("body").prepend(newBtn);


// // Events Portion 

// // let btn1 = document.querySelector("#btn1");

// // btn1.onclick = () =>{
// //     console.log("Btn was clicked");
// //     let a= 341;
// //     a++;
// //     console.log(a);
    
// // };

// // let div = document.querySelector("div");
// // div.onmouseover = () =>{
// //     console.log("You are insdie the div");
    
// // };


// // Using EventListner  to use a one function proprerty IN many Time.
// // let btn1 = document.querySelector("#btn1");

// // btn1.addEventListener("click", (evt)=>{
// //     console.log("Button was clicked - handler 1"); 
// // });

// // btn1.addEventListener("click",()=>{
// //     console.log("Button was  clicked  - handler 2");
// // });

// // const handler3 =()=>{
// //     console.log("Button was  clicked  - handler 3");
// // }
// // btn1.addEventListener("click",handler3);


// // btn1.addEventListener("click",()=>{
// //     console.log("Button was  clicked  - handler 4");
// // });

// // btn1.removeEventListener("click", handler3);


// // Practice Question 
// // Create a toggle Button that changes the screen to dark-mood when clicked & light-mood
// // When clicked again 

// // let modeBtn = document.querySelector("#mood");
// // let currMood = "light"; // dark

// // modeBtn.addEventListener("click",()=>{
// //     if(currMood === "light"){
// //         currMood = "dark";
// //         document.querySelector("body").style.backgroundColor="black";
// //     }else{
// //         currMood = "light"; 
// //         document.querySelector("body").style.backgroundColor="white";

// //     }     
// //     console.log(currMood);
// // });


// let mouse = document.querySelector("#mouse");

// mouse.addEventListener("mouseover",(evt) =>{
//     onmouseover = (evt)=> {
//         console.log();
        
//     }
// });

// const button = document.querySelector('.btn');
//     const output = document.querySelector('.output');

//     // Add a mouseover event listener
//     button.addEventListener('mouseover', () => {
//       const value = button.value; // Get the button's value
//       output.textContent = `Button value: ${value}`; // Display the value
//       console.log(value); // Print the value in the console
//     });

// const box = document.getElementById('box');

// box.addEventListener('mouseover', ()=>{
//     // Change color on Hover
//     box.style.backgroundColor = "lightgreen"; 
// });
// // Add mouseout event to reset
// box.addEventListener('mouseover', ()=>{
//     box.style.backgroundColor = "lightblue";
//     // reset the color 
// });

//        Tic Tac To Game

// let boxes = document.querySelectorAll(".box"); // Fix: Use querySelectorAll to get all elements with the class "box"
// let resetBtn = document.querySelector("#reset-btn");
// let newGameBtn = document.querySelector("#new-btn"); // Fix: Use # to select the element by id
// let msgContainer = document.querySelector(".msg-container");
// let msg = document.querySelector("#msg");

// let turnO = true; // playerX, playerY 

// const winPatterns = [
//     [0, 1, 2],
//     [0, 3, 6],
//     [0, 4, 8],
//     [1, 4, 7],
//     [2, 5, 8],
//     [2, 4, 6],
//     [3, 4, 5],
//     [6, 7, 8],
// ];

// const resetGame = () =>{
//     turnO = true;
//     enableBoxes();
//     msgContainer.classList.add("hide");
// };


// boxes.forEach((box) => {
//     box.addEventListener("click", () => {
//         console.log("box was clicked");
//         // Player O
//         if (turnO) { 
//             box.innerText = "A";
//             box.style.color = "blue";
//             turnO = false;
//         } else {
//             // Player X
//             box.innerText = "J";
//             box.style.color = "red"
//             turnO = true;
//         }
//         box.disabled = true;
//         checkWinner();
//     });
// });

// const disableBoxes = () => {
//     for(let box of boxes){
//         box.disabled = true;
//       }
// };

// const enableBoxes = () => {
//     for(let box of boxes){
//         box.disabled = false;
//         box.innerText = "";
//         box.style.color = ""; // reset color
//       }
// };

// const showWinner = (winner)=>{
//     msg.innerText = `Congratulation, Winner is  ${winner}`;
//     msgContainer.classList.remove("hide");
//     disableBoxes();
// };

// const checkDraw = () => {
//     // Check if all boxes are filled.
    
//     let allFilled = Array.from (boxes).every((box) => box.innerText !== "");;
//     if(allFilled){
//         msg.innerText = "It's a Draw!";
//         msgContainer.classList.remove("hide");
//         disableBoxes();
//     }
// };

// const checkWinner = () =>{
//     let winnerFound = false; // Define  WinnerFound here

//     for(let pattern of winPatterns){
//         let pos1Val = boxes[pattern[0]].innerText;
//         let pos2Val = boxes[pattern[1]].innerText;
//         let pos3Val = boxes[pattern[2]].innerText;

//         if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
//             if(pos1Val === pos2Val && pos2Val === pos3Val){
//                 console.log("winner", pos1Val);
//                 showWinner(pos1Val);   
//                 winnerFound = true;
//                 break;
//             }
//         }
//     }
//     if(!winnerFound){
//         checkDraw(); // Check Draw if no winner is found
//     }
// };

// newGameBtn.addEventListener("click", resetGame);
// resetBtn.addEventListener("click", resetGame);

// Select all elements and ensure they align with the updated HTML
let boxes = document.querySelectorAll(".box"); // Select all elements with the class "box"
let resetBtn = document.querySelector("#reset-btn"); // Reset button
let newGameBtn = document.querySelector("#new-btn"); // New Game button
let msgContainer = document.querySelector("#msg-container"); // Message container
let msg = document.querySelector("#msg"); // Message text

let turnO = true; // true for Player A, false for Player J

// Win Patterns
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

// Reset Game Function
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.remove("show"); // Ensure message container is hidden
    msg.innerText = ""; // Clear the message text
};

// Box Click Event
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // Check whose turn it is and mark accordingly
        if (turnO) {
            box.innerText = "J"; // Player A
            box.style.color = "blue"; // Style for Player A
        } else {
            box.innerText = "N"; // Player J
            box.style.color = "red"; // Style for Player J
        }

        box.disabled = true; // Disable the box after it's clicked
        turnO = !turnO; // Switch turn

        checkWinner(); // Check for a winner or draw
    });
});

// Disable all boxes
const disableBoxes = () => {
    boxes.forEach((box) => (box.disabled = true));
};

// Enable all boxes and reset their state
const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
        box.style.color = ""; // Reset color
    });
};

// Show the winner or draw message
const showMessage = (text) => {
    msg.innerText = text;
    msgContainer.classList.add("show");
};

// Check for a winner or draw
const checkWinner = () => {
    let winnerFound = false;

    // Check each win pattern
    winPatterns.forEach((pattern) => {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
            winnerFound = true;
            showMessage(`Congratulations, Winner is ${pos1}!`);
            disableBoxes();
        }
    });

    // If no winner is found, check for a draw
    if (!winnerFound) {
        let allFilled = Array.from(boxes).every((box) => box.innerText !== "");
        if (allFilled) {
            showMessage("It's a Draw!");
        }
    }
};

// Add event listeners for Reset and New Game buttons
resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);
