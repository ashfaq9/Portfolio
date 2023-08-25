// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//cv download 

function generateAndDownloadCV() {
    var cvContent 
    
    var blob = new Blob([cvContent], { type: "" });
    var url = URL.createObjectURL(blob);

    var downloadLink = document.getElementById("https://docs.google.com/document/d/152F0tTah0ZdbgHDBps70mIZLMAdC-HWQ5hP6UZJ-6b0/edit?usp=sharing");
    downloadLink.href = url;
    downloadLink.style.display = "block";
}

// Call the function when the page is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    generateAndDownloadCV();
});


// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {

    //   active navbar links
    navLinks.forEach( links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
    });

    // active sections for animatation on scroll
sec.classList.add('show-animate');

    }

    // if want use animation that repeats on scroll use this
    else {
        sec.classList.remove('show-animate')
    }
   

    });


    // sticky header
     let header = document.querySelector('header');

     header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


    // animation footer on scroll

    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);

}