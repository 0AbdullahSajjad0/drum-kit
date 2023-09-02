var len = document.querySelectorAll(".drum").length;
var i = 0;

for(var i = 0; i < len; i++){

    
    

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
    var input = this.innerHTML;

    btnAnimation(input);

        switch (input) {
            case "w":
                var audio = new Audio("./sounds/tom-1.mp3");
                audio.play();
                break;

            case "a":
                var audio = new Audio("./sounds/tom-2.mp3");
                audio.play();
                break;
                
            case "s":
                var audio = new Audio("./sounds/tom-3.mp3");
                audio.play();
                break;

            case "d":
                var audio = new Audio("./sounds/tom-4.mp3");
                audio.play();
                break;

            case "j":
                var audio = new Audio("./sounds/snare.mp3");
                audio.play();
                break;

            case "k":
                var audio = new Audio("./sounds/kick-bass.mp3");
                audio.play();
                break;

            case "l":
                var audio = new Audio("./sounds/crash.mp3");
                audio.play();
                break;
        
            default:
                break;
        }


    });
    
}

document.addEventListener("keydown", function(event){
    var keySelected = event.key;
    btnAnimation(keySelected);
    switch (keySelected) {
        case "w":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
            
        case "s":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
    
        default:
            break;
    }
})

function btnAnimation(currentKey)
{
    var activebtn = document.querySelector("." + currentKey);
    activebtn.classList.add("pressed");
    setTimeout(function(){
        activebtn.classList.remove("pressed");
    }, 100);
}