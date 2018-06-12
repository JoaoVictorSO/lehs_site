let x = 0;
let p = -10;
let i = 1;
let size = 300;
let doom = document.getElementsByClassName('item');
let confr = (doom.length - 3)*(-size);
let confl = 0;
// move size
document.getElementById("move").style.width = (doom.length * 400) + "px";
//left
document.getElementById("l").addEventListener("click", function(){
       x += size;
       if (x > confl){x = confr - size}else{
    document.getElementById("move").style.marginLeft = x + "px";}
});
//right
document.getElementById("r").addEventListener("click", function(){
    x += -size;
    p += -10;
    if (x < confr){x = size}else{
    document.getElementById("move").style.marginLeft = x + "px";}
});