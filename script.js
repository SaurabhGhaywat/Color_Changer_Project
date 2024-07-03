const button = document.querySelectorAll(".box");
const body = document.querySelector("body");

button.forEach(function(box) {
    box.addEventListener('click', (color)=>{
if(color.target.id === 'box1'){
     body.style.backgroundColor='aqua';
}
if(color.target.id === 'box2'){
    body.style.backgroundColor='rgb(240, 72, 49)';
}
if(color.target.id === 'box3'){
    body.style.backgroundColor='rgb(57, 197, 29)';
}
if(color.target.id === 'box4'){
    body.style.backgroundColor='rgb(218, 96, 187)';
}
if(color.target.id === 'box5'){
    body.style.backgroundColor='rgb(224, 222, 62)';
}

    })
})