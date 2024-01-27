let gameseq=[];
let userseq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

let p=document.querySelector("p");



document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;



        levelup();
    }
});


function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;
    


    let ranind= Math.floor(Math.random()*3);
    let rancolor=btns[ranind];
    let ranbtn=document.querySelector(`.${rancolor}`)
    // console.log(ranind);
    // console.log(rancolor);
    // console.log(ranbtn);
    gameseq.push(rancolor);
    console.log(gameseq)
    
    flash(ranbtn);
    
    
};


function flash(btn){
    btn.classList.add("white");
    setTimeout(function(){
        btn.classList.remove("white")
    },250);
};


let allbtn=document.querySelectorAll(".btn")
for(btn of allbtn){
    btn.addEventListener("click",btnpress);
};

function btnpress(){
    let btn=this;

    let usercol=btn.getAttribute("id");
    userseq.push(usercol);
    flash(btn)

    checkans(userseq.length-1);
};


function checkans(idx){
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000)
        }
    }
    else{
        h2.innerHTML=`Game over! Your score was<b> ${level}<br>Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150)
        reset();
    }
}


function para(){
    if(level<level){
        para.innerText=`Highest score  ${level}`
        console.log(para);
    }
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0
    para();
}




