const header = document.getElementById("bar-heading");
const addBtn = document.getElementById("add");
const ideaList = document.getElementsByTagName("li");
const ideas = [];

var clicks = 1;

header.addEventListener("click", function () {
    if (clicks < 5) {
        clicks++;
    } else {
        clicks = 1;        
        window.open("stop.html", "_blank")
    }
})

addBtn.addEventListener("click", function() {
    alert("Work In Progress"); 
})

//hehehehaw