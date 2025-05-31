 

var colours = [
    'red',
    'green',
    'blue',
    'yellow',
    'orange',
    'magenta'
]

var squares = document.querySelectorAll(".square");
 
for(var i=0 ; i<squares.length ; i++){
    squares[i].style.backgroundColor = colours[i];
}
var colours = [
    'red',
    'green',
    'blue',
    'yellow',
    'orange',
    'magenta'
]
var colourPicked = pickColour();

function pickColour(){
    var number = Math.floor(Math.random() * colours.length);
    return colours[number];
}

function randomColours(amount){
   var array = [];
   var availableColours = colours.slice();
    for(var i = 0; i < amount; i++){
        var index = Math.floor(Math.random() * availableColours.length);
        var color = availableColours[index];
        array.push(color);
        availableColours.splice(index, 1); 
    }
    return array;
}

function randomColour(){
    var number = Math.floor(Math.random() * colours.length);
    return colours[number];
    
}
var winningColour = document.querySelector("#winningColour");
winningColour.textContent = colourPicked;


for(var i=0 ; i<squares.length ; i++){
    squares[i].style.backgroundColor = colours[i];
    squares[i].addEventListener("click", function(){     
    var clickedColour = this.style.backgroundColor;
      this.classList.add('selectedColour');
      
        var submitButton = document.getElementById("submit");
        submitButton.addEventListener("click", function() {
       
         if(clickedColour !== colourPicked){  
         stopPlay();
         document.getElementById('message').style.display = 'block'; 
         message.textContent = "Try Again!";
       } 
         else if (clickedColour === colourPicked){
         soundPlay("/media/cc0-audio/t-rex-roar.mp3");
         console.log("success sound playing!");
         document.getElementById('message').style.display = 'block'; 
         message.textContent = "Correct!";
        }
          
        if(clickedColour === colourPicked){
        document.getElementById('message2').style.display = 'block'; 
        console.log(clickedColour)
            
    if (clickedColour === 'red' && clickedColour === colourPicked) {
    document.getElementById("message2").innerHTML = "<img src='https://images.unsplash.com/photo-1630563451961-ac2ff27616ab?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTUxNzEzNTF8&ixlib=rb-4.0.3&q=85' alt='redImage'/>"
} 
     else if (clickedColour === 'green' && clickedColour === colourPicked) {
     document.getElementById("message2").innerHTML = "<img src='https://images.unsplash.com/photo-1526797072-6f5b4aec8421?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTUxNzEyODB8&ixlib=rb-4.0.3&q=85' alt='greenImage'/>"
} 
      else if (clickedColour === 'orange' && clickedColour === colourPicked) {
      document.getElementById("message2").innerHTML = "<img src='https://images.unsplash.com/photo-1605602951276-87c692f4a7fe?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTUxNzEyNDd8&ixlib=rb-4.0.3&q=85' alt='orangeImage'/>"
} 
       else if (clickedColour === 'magenta' && clickedColour === colourPicked) {
       document.getElementById("message2").innerHTML = "<img src='https://images.unsplash.com/photo-1437275537121-331a0457c8d6?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTUxNzEyMjd8&ixlib=rb-4.0.3&q=85' alt='magentaImage'/>"
} 
        else if (clickedColour === 'blue' && clickedColour === colourPicked) {
        document.getElementById("message2").innerHTML = "<img src='https://images.unsplash.com/photo-1508311603478-ce574376c3cf?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTUxNzExMTV8&ixlib=rb-4.0.3&q=85' alt='blueImage'/>"
} 
        else if(clickedColour === 'yellow' && clickedColour === colourPicked){
        document.getElementById("message2").innerHTML = "<img src='https://images.unsplash.com/photo-1572635148818-ef6fd45eb394?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTUxNzE2Mjl8&ixlib=rb-4.0.3&q=85' alt='yellowImage'/>"
}
    } else {
    document.getElementById("message2").innerHTML = "";
    }
           
      }); 
      
       
function soundPlay(){
    var mySuccessAudio = document.getElementById("success");
    mySuccessAudio.src = "https://marktmarshall.com/sounds/outfoxing.mp3";
    mySuccessAudio.load();
    mySuccessAudio.play();
}
                                     
   function stopPlay(){
    var mySuccessAudio = document.getElementById("success");
    mySuccessAudio.pause();  
}                              

reset.addEventListener("click", function(){
  stopPlay();
  document.getElementById('message').style.display = 'none'; 
  document.getElementById('message2').style.display = 'none'; 
  for (var i = 0; i < squares.length; i++) {
  squares[i].classList.remove('selectedColour');
   }
    colours = randomColours(6);
    colourPicked = pickColour();
    winningColour.textContent = colourPicked;
    for(var i=0 ; i<colours.length ; i++){
    squares[i].style.backgroundColor = colours[i];
    }
});
    })}
   
 
    
    
    
    
