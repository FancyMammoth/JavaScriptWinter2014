// Preset Variable Declaration
var link1Click = false;
var link2Click = false;
var fullScroll = false;
var radioState = false;
var accept = false;
var declined = false;

// Element Variable Declaration / Event Listener Declaration
var link1 = document.getElementById("agreeLink1");
link1.addEventListener('click', link1Check);

var link2 = document.getElementById('agreeLink2');
link2.addEventListener('click', link2Check);

var btnAgree = document.getElementById('agree');
var btnNotAgree = document.getElementById('notagree');

var btnSubmit = document.getElementById('submitAgreement');
btnSubmit.addEventListener('click', submitTest);

var objScroll = document.getElementById('agreeScroll');
objScroll.addEventListener('scroll', fullScrollCheck);

function link1Check() //Checks if link 1 has been clicked
{
    link1Click = true;
    console.log("Link 1 has been " + link1Click);
    fullScrollCheck();
}

function link2Check() //Checks if link 2 has been clicked
{
    link2Click = true;
    console.log("Link 2 has been " + link2Click);
    fullScrollCheck();
}


function fullScrollCheck() //Checks if the box has been scrolled to the bottom
{
    if ( objScroll.scrollTop === (objScroll.scrollHeight-objScroll.offsetHeight) && link1Click === true && link2Click === true)
    {
        var scrolled = true;
        btnNotAgree.disabled = false;
        btnAgree.disabled = false;
        console.log("Full scroll state =  " + scrolled);
}
}

function submitTest() // Runs the combinations of possibilities and returns the appropriate alert message
{
    if (btnAgree.checked === true && link1Click === true && link2Click === true)
    {
        alert("Welcome");
    }
    
    else if (btnNotAgree.checked === true && link1Click === true && link2Click === true)
    {
        alert("You have not agreed to the terms and contitions");
    }
    
    else
    {
        alert("You have not satisfied the requirements to move forward");
    }
}



