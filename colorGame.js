var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

for(var i= 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
       this.classList.add("selected"); 
       
       //Ternary Operator
       this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
    //   if(this.textContent === "Easy"){
    //       numSquares = 3;
    //   } else {
    //       numSquares = 6;
    //   }
      reset();
    });
}

function reset(){
    //Generate all new colors.
    colors = generateRandomColors(numSquares);
    //Pick a new random color from array.
    pickedColor = pickColor();
    //Change colorDisplay to match picked color.
    colorDisplay.textContent = pickedColor;
    //Remove display string after game reset.
    messageDisplay.textContent = "";
    //Change reset button to displkay "New Colors" after the user clicks on it.
    resetButton.textContent = "New Colors";
    //Change colors of squares.
    for(var i = 0; i < squares.length; i++){
        //Compare if a color matches the coordinating square to determine if 3 or 6 squares should be displayed.
        //If numSquares is 3 then the remaining 3 will be null and thus hidden.
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "steelblue";
}

// easyBtn.addEventListener("click", function(){
//   easyBtn.classList.add("selected");
//   hardBtn.classList.remove("selected");
//   numSquares = 3;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(var i = 0; i < squares.length; i++){
//       if(colors[i]){
//           squares[i].style.background = colors[i];
//       } else {
//           squares[i].style.display = "none";
//       }
//   }
// });

// hardBtn.addEventListener("click", function(){
//   hardBtn.classList.add("selected");
//   easyBtn.classList.remove("selected"); 
//   numSquares = 6;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(var i = 0; i < squares.length; i++){
//           squares[i].style.background = colors[i];
//           squares[i].style.display = "block";
//       }
// });

resetButton.addEventListener("click", function(){
    reset();
    // //Generate all new colors.
    // colors = generateRandomColors(numSquares);
    // //Pick a new random color from array.
    // pickedColor = pickColor();
    // //Change colorDisplay to match picked color.
    // colorDisplay.textContent = pickedColor;
    // //Remove display string after game reset.
    // messageDisplay.textContent = "";
    // //Change reset button to displkay "New Colors" after the user clicks on it.
    // this.textContent = "New Colors";
    // //Change colors of squares.
    // for(var i = 0; i < squares.length; i++){
    //     squares[i].style.background = colors[i];
    // }
    // h1.style.background = "steelblue";
})

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.background = colors[i];
    
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
    //grab color of clicked square
    var clickedColor = this.style.background;
    //compare color to pickedColor
    if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?"
        changeColors(clickedColor);
        h1.style.background = clickedColor;
        } else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color) {
    //loop through all squares
    for(var i = 0; i < colors.length; i++) {
    //change each color to match given color
    squares[i].style.background = color;
    }
}

function pickColor () {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //Make an array.
    var arr = [];
    //Repeat num times.
    for(var i = 0; i < num; i++){
        //Get random color and push into arrary.
        arr.push(randomColor());
    }
    //Return that arrary.
    return arr;
}

function randomColor(){
    //Pick a "red" from 0 - 255.
    var r = Math.floor(Math.random() * 256);
    //Pick a "green" from 0 - 255.
    var g = Math.floor(Math.random() * 256);
    //Pick a "blue" from 0 - 255.
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}