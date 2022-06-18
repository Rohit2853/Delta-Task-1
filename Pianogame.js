var start=true;
var color=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"];
var store=[];
document.addEventListener("keypress",function(event){
    if(event.key=='Enter'&& start==true){
        document.getElementsByTagName("h1")[0].innerHTML="GAME START LET'S PLAY!!";
        start=false;
        to_store();
    }
})

function to_store() {
    var choose=Math.floor(Math.random()*16);
    document.getElementById(color[choose]).classList.add("add");
    var audio=new Audio("btn1.mp3");
    audio.play();
    store.push(color[choose]);
    setTimeout(() => {
        document.getElementById(color[choose]).classList.remove("add");
    }, 400);
}

var i=0;
function game() {
    if(document.activeElement.id==store[i]){
        if(i==store.length-1){
        alert("CORRECT !!");
        to_store();
        i=0;
        }
        else{
            i++;
        }

    }
    else{
        alert("WRONG ANSWER !!");
        Window.location.reload();


    }
    return;
}