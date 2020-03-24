function myFunction() {
    var x = document.getElementById("mytopmenu");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}
        
function myDropdown() {
    var x = document.getElementById("content");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

var partnerIndex = 0;
partnerSlideshow();

function partnerSlideshow() {
  var i;
  var x = document.getElementsByClassName("partner-slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  partnerIndex++;
  if (partnerIndex > x.length) {partnerIndex = 1} 
  x[partnerIndex-1].style.display = "block"; 
  setTimeout(partnerSlideshow, 2000); // Change image every 2 seconds
}

// ACCORDION 

var myAccordion = document.getElementsByClassName("program-date");
var i;

for (i = 0; i < myAccordion.length; i++) {
  myAccordion[i].addEventListener("click", function() {
      
    this.classList.toggle("program-date-active");

    
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}