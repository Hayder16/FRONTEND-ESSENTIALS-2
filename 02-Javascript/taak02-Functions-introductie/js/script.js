function toonAlertBox(){
    alert("Deze alert box zegt hallo");
}
toonAlertBox();

function toonPrompt(){
    prompt("Hoe oud ben je?");
    console.log(toonPrompt);
}
toonPrompt();

function toonConfirm(){
    if(confirm('ok')){
    }
    else{
        alert("dan niet");
    }
}
toonConfirm();