// let btn1 = document.querySelector("#btn1");
// let currmode = "Light";
  
// btn1.addEventListener("click", ()=>{
//     console.log("you are trying to change the mode");
//     if(currmode === "light"){
//         currmode ="dark";
//        document.querySelector("body").style.backgroundColor="black";
//     }else{
//         currmode="light";  
//         document.querySelector("body").style.backgroundColor="white";
//     }
//     console.log(currmode);
// })





 const choices = document.querySelectorAll(".choice");
 const msg = document.querySelector("#message");
 const userscore =document.querySelector("#userscore");
 const compscore =document.querySelector("#compscore");
 let userScore =0;
 let compScore = 0;
 const  genCompChoice =()=>{
    //rock,paper,scissor random generation 
    const options = ["rock", "paper", "scissor"];
    
   const randidx = Math.floor(Math.random() * 3);
   return options[randidx];
 };
const drawGame = ()=>{
    console.log("The game was Draw");
    msg.innerText="This is a Draw";
    msg.style.backgroundColor="black";
}
const showWinner =(userWin)=>{
    if (userWin){
        userScore++;
        userscore.innerText = userScore;
        console.log("you win!")
        msg.innerText="you win!";
        msg.style.backgroundColor="Green";

    }else{
        compScore++;
        compscore.innerText=compScore;
        console.log("you loose");
        msg.innerText="you lost";
        msg.style.backgroundColor="red";
    }
};
const playGame = (userChoice)=>{
    console.log("user choice =", userChoice);
    //generate computer Choice;
   const compChoice = genCompChoice();
 console.log("comp choice =", compChoice)
 if(userChoice===compChoice){
    drawGame();
 }else {
    let userWin = true ;
    if(userChoice === "rock"){
        //paper,scoissor
       userWin = compChoice === "paper" ? false :true;
    }else if(userChoice ==="paper"){
        userWin = compChoice === "scissor" ? false :true;
    }else{
        userWin = compChoice ==="rock" ? false :true;
    }
    showWinner(userWin);
 }
};
 choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        console.log("Choice was clicked ", userChoice);
        playGame(userChoice);

    });
 });
