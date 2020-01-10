var grid = document.getElementById("grid");

var board;

var size; //global, but using it as a parameter

var clr = document.createElement("text");
var pxBtn = document.getElementById("pxSet");
var clrBtn = document.getElementById("clear");
var colrBtn = document.getElementById("color");
var rndBtn = document.getElementById("rnd");

var color;

var changeColor = false;

var randomColor = false;

clrBtn.addEventListener("click", function() {
    removeGrid();
    createGrid(16);
    hover();
});

createGrid(16);
hover();

colrBtn.addEventListener("click", function() {
    changeColor = true;
    color = prompt("What color do you want to use");
    hoverColor();

});

rndBtn.addEventListener("click", function() {
    randomColor = true;
    hoverRandom();
})


pxBtn.addEventListener("click", function() {
    removeGrid();
    size = prompt("How many sqaures");
    while(size > 28) {
        size = prompt("Must be no larger than 28 px. How many sqaures?");
    }
    createGrid(size);
    hover();
});



function removeGrid() {
            const boards = Array.from(document.querySelectorAll('.blah'));
            boards.forEach(function(board) {
                board.remove();
            });  
            changeColor = false;
}

function createGrid(size) {
    for(var x = 0; x < size; x++) {
        for(var i = 0; i < size; i++) {
                board = document.createElement('div');
                board.className = "blah";
                board.id = "blah" + x + i; 
                document.querySelector("div").appendChild(board);
                board.style.backgroundColor = 'rgb(' + 240 + ',' + 240 + ',' + 245 + ')';
                board.style.width = 500/size + "px";
                board.style.height = 500/size + "px";
            }
        }

}

 
function hover() {
        const boards = Array.from(document.querySelectorAll('.blah'));
        boards.forEach(board => board.addEventListener('mouseover', function() {
        board.style.backgroundColor = "black";
        }));
    
       
}

function hoverColor() {
    const boards = Array.from(document.querySelectorAll('.blah'));
    boards.forEach(board => board.addEventListener('mouseover', function() {
    board.style.backgroundColor = color;
    }));
}

function hoverRandom() {
    const boards = Array.from(document.querySelectorAll('.blah'));
    boards.forEach(board => board.addEventListener('mouseover', function() {
        var r1 = Math.floor(Math.random() * 200);
        var r2 = Math.floor(Math.random() * 200);
        var r3 = Math.floor(Math.random() * 200);
        board.style.backgroundColor = 'rgb(' + r1 + ',' + r2 + ',' + r3 + ')';
    }));
}






/*
//rgb(Integer.Random(*200), Integer.Random(*200), Integer.Random(*200))

//color = txt   28
*/