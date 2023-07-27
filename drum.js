var k=document.querySelectorAll(".drum").length;
for(var i=0;i<k;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function() {
        var button=this.innerHTML;
        makeSound(button); 
    });
}
document.addEventListener("keydown",function(event) {
    makeSound(event.key);
});
function makeSound(key){

switch(key){
    case "w":
        var s=new Audio("sounds/tom-1.mp3");
        s.play();
        break;
    case "a":
        var s=new Audio("sounds/tom-2.mp3");
        s.play();
        break;
    case "s":
        var s=new Audio("sounds/tom-3.mp3");
        s.play();
        break;
    case "d":
        var s=new Audio("sounds/tom-4.mp3");
        s.play();
        break;
    case "k":
        var s=new Audio("sounds/tom-5.mp3");
        s.play();
        break;
    case "j":
        var s=new Audio("sounds/tom-6.mp3");
        s.play();
        break;
    case "l":
        var s=new Audio("sounds/tom-7.mp3");
        s.play();
        break;
    case "t":
        var s=new Audio("sounds/tom-8.mp3");
        s.play();
        break;
    case "f":
        var s=new Audio("sounds/tom-9.mp3");
        s.play();
        break;
    case "p":
        var s=new Audio("sounds/tom-10.mp3");
        s.play();
        break;
    case "h":
            var s=new Audio("sounds/tom-11.mp3");
            s.play();
            break;
    case "b":
        var s=new Audio("sounds/tom-12.mp3");
        s.play();
        break;
            
}
}

