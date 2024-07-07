let anglesCount = 0;

let ghostsCount = 0;

let angleScoreEl = document.getElementById("angleScore");

let ghostsScoreEl = document.getElementById("ghostScore");

function add1(){
   anglesCount += 1;
   angleScoreEl.textContent = anglesCount;
   headings();
}


function add2(){
   anglesCount += 2;
   angleScoreEl.textContent = anglesCount;
   headings();
}

function add3(){
   anglesCount += 3;
   angleScoreEl.textContent = anglesCount;
   headings();
}

function add1ghost(){
   ghostsCount += 1;
   ghostsScoreEl.textContent = ghostsCount;
   headings();
}

function add2ghost(){
   ghostsCount += 2;
   ghostsScoreEl.textContent = ghostsCount;
   headings();
}

function add3ghost(){
   ghostsCount += 3;
   ghostsScoreEl.textContent = ghostsCount;
   headings();
}

let headingEl = document.getElementById("heading");

function headings(){
    if(anglesCount > ghostsCount){
    headingEl.textContent = "Angles are ahead of Ghosts"
    }else if(anglesCount < ghostsCount){
        headingEl.textContent = "Ghosts are ahead of Angles"
    }else if(anglesCount == ghostsCount){
        headingEl.textContent = "Tie"
    }else{
        headingEl.textContent = "Let's start the game"
    }
}

let newGamebtnEl = document.getElementById("newGamebtn");

function newGameStart(){
    anglesCount = 0;
    ghostsCount = 0;
    angleScoreEl.textContent = anglesCount;
    ghostsScoreEl.textContent = ghostsCount;
}
