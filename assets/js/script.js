
//MENU
// define all UI variable
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.nav-k-menu');
const navLinks = document.querySelectorAll('.nav-k-menu a');
const bodybg = document.querySelector('body');

// load all event listners
allEventListners();



// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener('click', togglerClick);
  navToggler.addEventListener('click', bodyClick);
  // nav links click event
  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}

function bodyClick(){
  bodybg.classList.toggle('blur')
}


// TABS
var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        var icon = this.querySelector("i.material-icons");

        if (panel.style.display === "block") {
          panel.style.display = "none";
          icon.innerHTML = "add";
        } else {
          panel.style.display = "block";
          icon.innerHTML = "remove";
        }
      });
    }
	document.getElementById("defaultOpen").click();

	function openSport(evt, cityName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
	}