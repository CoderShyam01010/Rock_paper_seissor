let userscore=0;
let compscore=0;

let msg=document.getElementById("msg");
let choices=document.querySelectorAll(".choice");
let user_score=document.querySelector("#user-score");
let comp_score=document.querySelector("#comp-score");
const genCompChoice=()=>{
    const options = ["rock","paper","scissor"];
    //generate ramdon num between 0 to 2  we multiply Math.random() with 3 ...
    const randIdx=Math.floor(Math.random() * 3);
    return options[randIdx];
};

const showWinner=(userwin , userChoice , compChoice)=>{
    if(userwin){
       msg.innerText=`You Win!! your ${userChoice} beats comp's ${compChoice}`;
       msg.style.backgroundColor="green"
       userscore++;
       user_score.innerText=userscore;
    }
    else{
        msg.innerText=`You Lose!! comp's ${compChoice} beats your's ${userChoice}`;
        msg.style.backgroundColor="red"
        compscore++;
       
        comp_score.innerText=compscore;
    }
}
const playGame=(userChoice)=>{
    
    //Generate Computer Choice;
    const compChoice =genCompChoice();
   

    //Compare user and Computer
    if(userChoice===compChoice){
        msg.innerText="Draw!!";
        msg.style.backgroundColor="#081b31"
    }else{
        let userwin=true;
        if(userChoice==="rock"){
           userwin = compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userwin=compChoice==="scissor"?false:true;
        }else{
            userwin=compChoice==="rock"?false:true; 
        }
        showWinner(userwin , userChoice , compChoice);
    }
}
choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});