

let lis = document.querySelectorAll("li");
let li = document.createElement("p");
document.body.append(li);


let i = parseInt(window.innerWidth / 2);
let j = parseInt(window.innerHeight / 2);


let array = [[i, j], [i -= 7, j], [i -= 7, j], [i -= 7, j]];
let piece  = [0 , 0 ] ; 

let flagArrowUp = false;
let flagArrowDown = false;
let flagArrowRight = false;
let flagArrowLeft = false;


createItem() ; 


function createItem() {

    let h = parseInt(Math.random() * ( window.innerWidth   )  - 10);
    let v = parseInt(Math.random() * ( window.innerHeight   ) - 10);
    h = (h < 10) ? 10 : h;
    v = (v < 10) ? 10 : v;
    piece[0] = h ; 
    piece[1] = v ; 
    li.style.transform = `translate(${h}px , ${v}px )`;

}




function clearAllflags() {
    flagArrowUp = false;
    flagArrowDown = false;
    flagArrowRight = false;
    flagArrowLeft = false;
}


function setPosition() {

    lis.forEach(function (li, k) {
        li.style.transform = `translate(${array[k][0]}px , ${array[k][1]}px )`;
    })

}

setPosition()

function setArrayNew(i, j) {

    for (let c = array.length - 1; c > 0; c--) {
        array[c] = array[c - 1];
    }
    array[0] = [i, j];

}


function ArrowUpKey() {
    setArrayNew(array[0][0], array[0][1] - 7);
    clearAllflags();
    flagArrowUp = true;
    setPosition();
}
function ArrowDownKey() {
    setArrayNew(array[0][0], array[0][1] + 7);
    clearAllflags();
    flagArrowDown = true;
    setPosition();
}
function ArrowRightKey() {
    setArrayNew(array[0][0] + 7, array[0][1]);
    clearAllflags();
    flagArrowRight = true;
    setPosition();
}
function ArrowLeftKey() {
    setArrayNew(array[0][0] - 7, array[0][1]);
    clearAllflags();
    flagArrowLeft = true;
    setPosition();
}



document.addEventListener("keydown", function (e) {
    
    switch (e.key) {

        case "ArrowUp":
            ArrowUpKey();
            break;

        case "ArrowDown":
            ArrowDownKey();
            break;

        case "ArrowRight":
            ArrowRightKey();
            break;

        case "ArrowLeft":
            ArrowLeftKey();
            break;
            
         case " ":
            clearAllflags() ; 
            break;
    }

});


function addPieceInSnake() {

    let li = document.createElement("li");
    document.body.append(li);
    lis = document.querySelectorAll("li");
    array.push(array.slice(-1)[0]) ; 
    createItem();
}


setInterval(function () {

    if (array[0][0] > window.innerWidth) {
        array[0][0] = 0;
    }
    else if (array[0][0] <= 0) {
        array[0][0] = window.innerWidth - 10;
    }

    if (array[0][1] > window.innerHeight) {
        array[0][1] = 0;
    }
    else if (array[0][1] <= 0) {
        array[0][1] = window.innerHeight - 10;
    }

  

    if( (piece[0] >= array[0][0] - 5 &&  piece[0] <= array[0][0] + 5) &&
     (piece[1] >= array[0][1] - 5 && piece[1] <= array[0][1] + 5)  ){
        addPieceInSnake() ; 
    }

    switch (true) {

        case flagArrowUp:
            ArrowUpKey();
            break;

        case flagArrowDown:
            ArrowDownKey();
            break;

        case flagArrowRight:
            ArrowRightKey();
            break;

        case flagArrowLeft:
            ArrowLeftKey();
            break;
    }

}, 100);


