let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newBtn=document.querySelector("#new");
let msg_box=document.querySelector(".msg-box");
let msg=document.querySelector("#msg");
let turn0=false;  //player o
let win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0)
        {
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    } );
});
const showWinner=(winner) =>{
    msg.innerText=`Congratulations, winner is ${winner}`;
    msg_box.classList.remove("hide");
    for(let b of boxes)
    {
        b.disabled=true;
    }
};
const checkWinner= () => {
    for( let p of win)
    {
        let pos1=boxes[p[0]].innerText;
        let pos2=boxes[p[1]].innerText;
        let pos3=boxes[p[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!="")
        {
            if(pos1===pos2 && pos2===pos3)
            {
                showWinner(pos1);
            }
        }
    }
};
const resetGame=() =>{
    turn0=false;
    for(let b1 of boxes)
    {
        b1.disabled=false;
        b1.innerText="";
    }
     msg_box.classList.add("hide");
};
reset.addEventListener("click",resetGame);
newBtn.addEventListener("click",resetGame);

