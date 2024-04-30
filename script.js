const btn = document.getElementById("button");

const randomColor = () => {
    let hex = "123456789ABCDEF";
    let col = "#";
    for(let i=0; i<6; i++){
        col = col + hex[Math.floor(Math.random()*16)];
    }
    return col;
}

function changeRandomCol(){
    document.body.style.backgroundColor = randomColor();
}

btn.addEventListener('click', changeRandomCol);