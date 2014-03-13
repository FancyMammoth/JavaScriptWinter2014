 /* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var fade = document.getElementById("fade");
var count = 0.0;




function setFade()
{
    fade.style.opacity = count;
    count += .10;
    if (count < 1)
    {
        setTimeout(setFade,100);
        
    }
     
        
}

function hide()
{
    fade.style.display = "none";    
    
}

setTimeout(hide, 10000);

window.addEventListener("load", setFade);

var can = document.getElementById('tutorial');
var ctx = can.getContext('2d');



    ctx.fillRect(25,25,100,100);
    
    ctx.beginPath();
    ctx.arc(400,75,40,0,2*Math.PI);
    ctx.stroke();
    
    var imgObj = new Image();
    imgObj.src = 'https://github.com/gforti/JSClassWinter2014/blob/master/public_html/week8/demo/car_icon.jpg?raw=true';
    imgObj.addEventListener("load", hi);
    
    function hi()
    {
        ctx.drawImage(imgObj, 500, 25);
        
        
    }
    
    


