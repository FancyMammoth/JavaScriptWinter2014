/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var json = {
    "ad1" :{ "title" : "mountain dew", "desc" : "Mountain dew gamer fuel"},
    "ad2" :{ "title" : "Red Robin", "desc" : "Red Robin Yum"},
    "ad3" :{ "title" : "LG", "desc" : "LG learning from you"},
    "ad4" :{ "title" : "JG", "desc" : "Its your money use it when you need it"},
    "ad5" :{ "title" : "adblock" , "desc" : "Use ad block and never worry about ads again"}
    };

    



var arr = [];
arr[0] = "ad1"; 
arr[1] = "ad2";
arr[2] = "ad3";
arr[3] = "ad4";
arr[4] = "ad5";






function playad(){
var adnum;
var ad = document.getElementById("ad");
adnum = Math.floor(Math.random()* arr.length);
console.log(adnum);
ad.innerHTML = json[arr[adnum]]["title"] + " " + json[arr[adnum]]["desc"]; 
document.title = json[arr[adnum]]["desc"].substr(0,10) + "...";
}

playad();