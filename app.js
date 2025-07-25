let res = document.getElementById("restart-btn");
let userEdit = document.getElementById("edit-user");
let userNum = document.getElementById("user-name");
let inputVal = document.getElementById("myname");
let lue = inputVal.value;
let savingBtn = document.getElementById("btn-save-name");
let cancel = document.querySelector(".cancel-ele");
let uk = "UnknownUser";
let exchaName = document.getElementById("user-exchange");
let userName = localStorage.getItem("uname") || uk ;
userNum.innerHTML = userName;
exchaName.innerHTML = userNum.innerHTML;
let userScore = parseInt(localStorage.getItem("uScore")) || 0;
let compScore = parseInt(localStorage.getItem("cScore")) || 0;
let stm = document.getElementById("statement");
let minuser = document.getElementById("user-score");
let mincomp = document.getElementById("comp-score");
let btnRoll = document.getElementById("btn-roll");
minuser.innerHTML = userScore;
mincomp.innerHTML = compScore;
let showReset = document.querySelector(".reset-game");
showReset.style.display =  "none";
let gameYes = document.getElementById("game-yes");
let gameNo = document.getElementById("game-no");
let rota1 = document.querySelector(".rotate-1");
let rota2 = document.querySelector(".rotate-2");
let rotation = 0;
//main form catching
let mainForm = document.querySelector(".show-form");
mainForm.style.display = "none";
let state = document.getElementById("run-element");
let message = "Name must be Greater than 5 in length";
state.innerHTML = message;
state.style.color = "red";
state.style.fontSize = "11px";


// reset all function
res.addEventListener("click",opt);
function opt() {
    showReset.style.display = "grid";
};

// YES function sub reset
gameYes.addEventListener("click",yesOpt);
function yesOpt() {
    userScore = 0;
    compScore = 0;
    localStorage.setItem("uScore",userScore);
    localStorage.setItem("cScore",compScore);
    minuser.innerHTML = userScore;
    mincomp.innerHTML = compScore;
    showReset.style.display = "none";
};

//No function sub reset
gameNo.addEventListener("click",noOpt);
function noOpt() {
    showReset.style.display = "none";
}



//Edit User Name funtion 
cancel.addEventListener("click",cancell);
function cancell() {
    mainForm.style.display = "none";
    
}
 userEdit.addEventListener("click",mainUser);
function mainUser() {
    mainForm.style.display = "grid";
    
   
};

//savingBtn function
savingBtn.addEventListener("click",saver);
 function saver() {
let inputVal = document.getElementById("myname");
 let lue = inputVal.value;
     
    if(lue.length < 5) {
        message = "Name Must be Greater than 5 in length";
        state.innerHTML = message;
        state.style.color = "red";
        
    }
     
     else if(lue.length > 5) {
         let inputVal = document.getElementById("myname");
         userName = inputVal.value.replace(/\s+/g, "");
         message = "Great Name";
         state.innerHTML = message;
         state.style.color = "green";
         localStorage.setItem("uname",userName);
         userNum.innerHTML = userName;
         mainForm.style.display = "none";
         exchaName.innerHTML = userNum.innerHTML;
         
         
     }
         
     else {
         let inputVal = document.getElementById("myname");
         userName = inputVal.value.trim();
         message = "Exactly";
         state.innerHTML = message;
         state.style.color = "green";
         localStorage.setItem("uname",userName);
         userNum.innerHTML = userName;
         mainForm.style.display = "none";
         exchaName.innerHTML = userNum.innerHTML;

         
     }
     
 };

//Score Save function
btnRoll.addEventListener("click", save);
function save() {
    
    let array = ["dice_1.jpg","dice_2.jpg","dice_3.jpg","dice_4.jpg","dice_5.jpg","dice_6.jpg"];
    let imgOne = document.getElementById("img-src1");
    let imgTwo = document.getElementById("img-src2");
    let randomOne = Math.floor(Math.random()*array.length);
    let randomTwo = Math.floor(Math.random()*array.length);
    let resultOne = array[randomOne];
    let resultTwo = array[randomTwo];
    imgOne.src = resultOne;
    imgTwo.src = resultTwo;
rotation += 720;
    rota1.style.transition = "transform 1s";
     rota2.style.transition = "transform 1s";
    rota1.style.transform = `rotate(${rotation}deg)`;
    rota2.style.transform = `rotate(${rotation}deg)`;
    
    //If Statement function
        if(resultOne > resultTwo) {
        userScore++;
        localStorage.setItem("uScore",userScore);
        minuser.innerHTML = userScore;
        stm.innerHTML = "USER WON"+"<sup style='color:green; font-weight: bold; font-size: 18px;'>+1</sup>";
    }
    
    else if(resultOne < resultTwo) {
        compScore++;
        localStorage.setItem("cScore",compScore);
        mincomp.innerHTML = compScore;
         stm.innerHTML = "COMP"+"<sup style='color:green; font-weight: bold; font-size: 18px'>+1</sup>";

    }
    
    else {
        stm.innerHTML = "Draw!!"
    }
};