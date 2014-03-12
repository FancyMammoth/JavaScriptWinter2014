/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var data = {
    "email":'',
    "name": '',
    "height": 0,
    "width": 0,
    "title": '',
    "agent": '',
    "mousex": [],
    "mousey": []
    
};

window.addEventListener("load", collectOther, false);
document.addEventListener("mousemove", mouseMove, false);
document.getElementById("fullname").addEventListener("blur", storeFname, false);
document.getElementById("email").addEventListener("blur", storeEmail, false);

function storeFname()
{
    data["name"] = document.getElementById("fullname").value;
}

function storeEmail()
{
    data["email"] = document.getElementById("email").value;    
}

function collectOther()
{
    data["height"] = window.innerHeight;
    data["width"] = window.innerWidth;
    data["title"] = document.title;
    data["agent"] = window. navigator. userAgent;
       
}

function mouseMove(e)
{
    data["mousex"].push(e.clientX);
    data["mousey"].push(e.clientY);
    
    if ( data.mousex.length > 100 ) {
			document.removeEventListener('mousemove', mouseMove);
                    }
    
    
    
}

function showResults() {
    console.clear();
    console.log(data);
}

var results = document.getElementById('showResults');

results.addEventListener("click", showResults);