// async await 
async function test(){
    fetch('https://jsonplaceholder.typicode.com/todos').
    then(res=> res.json()).then(json=>{return json});
}


async function learnAsync(){
    let data = await fetch('https://jsonplaceholder.typicode.com/todos');
    data.json().then(res=>console.log(res));
}

// Event Bubbling 

function pClicked(){
    alert("P clicked");
}

function divClicked(){
    alert('div clicked');
}






