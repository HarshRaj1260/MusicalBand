
// Detection Button Press ---------------------------

var noOfDrumButtons=document.querySelectorAll(".drum").length;
for(var i=0;i<noOfDrumButtons;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
       var buttonInnerHTML=this.innerHTML;
       make_sound(buttonInnerHTML);
       buttonAnimation(buttonInnerHTML);
    })
}

// Detection Keyboard Press ---------------------------

document.addEventListener("keydown",function(event){
    // alert("key was pressed!! ");
   make_sound(event.key);
   buttonAnimation(event.key);
})

function make_sound(key)
{
    switch (key) {
        case "w":
         var audio = new Audio("sounds/tom-1.mp3");
                 audio.play();
            break;
    

         case "a":
         var audio = new Audio("sounds/tom-2.mp3");
                 audio.play();
             break;
     
        
             
             case "s":
         var audio = new Audio("sounds/crash.mp3");
                 audio.play();
            break;
    
        

            case "d":
         var audio = new Audio("sounds/kick-bass.mp3");
                 audio.play();
            break;
    
        

            case "j":
         var audio = new Audio("sounds/tom-3.mp3");
                 audio.play();
            break;
    
       

            case "k":
         var audio = new Audio("sounds/snare.mp3");
                 audio.play();
            break;
    
        

            case "l":
         var audio = new Audio("sounds/tom-4.mp3");
                 audio.play();
            break;
    
        
    }
}

function buttonAnimation(currentkey)
{
    var activeButton=document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
    
}