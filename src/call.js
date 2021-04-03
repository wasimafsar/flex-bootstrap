// stop bubbling

function divClickedStop(){
    alert("div clicked");
}

function pClickStopped($event){
    alert("P clicked");
    $event.stopPropagation();
}