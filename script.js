// ---------- TAB SECTION (About section tabs) ----------

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){

    for(var tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(var tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


// ---------- MOBILE MENU ----------

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}


// ---------- CONTACT FORM (Google Sheets) ----------

const scriptURL = "https://script.google.com/macros/s/AKfycbzECwzlFnTvh_meS3IbJ0fbyFDGKZ8nS8mf0UGD5-54Uk1wY8atpbayK6qPFROtAUdT/exec";

const form = document.forms["submit-to-google-sheet"];
const msg= document.getElementById("msg")

form.addEventListener("submit", function(e){
    e.preventDefault();
    msg.innerHTML = "Sending...";

    fetch(scriptURL, {
        method: "POST",
        body: new FormData(form)
    })
    .then(response => {
        msg.innerHTML="Got your message - I'll get back to you soon "
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset();
    })
    .catch(error => {
        alert("Something went wrong. Please try again.");
    });
});