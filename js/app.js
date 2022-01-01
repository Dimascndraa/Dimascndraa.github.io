  // Navbar
  $(window).scroll(function(){
    // sticky navbar on scroll script
    if(this.scrollY > 20){
        $('.navbar').addClass("sticky");
    }else{
        $('.navbar').removeClass("sticky");
    }
  });
    
// AOS
AOS.init({
  // once: true
});

// Typed JS
// typing text animation script
  var typed = new Typed(".typing", {
      strings: ["Web Designer", "Student", "Web Develper"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });
  
// GSAP  
gsap.registerPlugin(TextPlugin);
gsap.from(".navbar", { 
  delay: 4, 
  duration: .2, 
  y: "-100%", 
  opacity: 0, 
  ease: "bounce" 
});
gsap.from(".jumbotron img", { 
  delay: 4, 
  duration: 1, 
  rotateY: 720, 
  opacity: 0 
});
gsap.to(".container2", { 
  delay: 4, 
  duration: 3, 
  y: 2900 
});
gsap.from(".jumbotron .display-4", {
  delay: 4,
  duration: .7,
  x: -300,
  ease: "power2",
  opacity: 0
}); 

// Contact Form
  const scriptURL =
  "https://script.google.com/macros/s/AKfycbywVwCT41F0YI8nxT5NCgfH3KeKANkpWYuFqjjdF-UXr9nmv2kjH3Yafbb0iouDQdYQcQ/exec";
  const form = document.forms["dmscndraa-contact-form"];
  const btnKirim = document.querySelector(".btn-kirim");
  const btnLoading = document.querySelector(".btn-loading");
  const myAlert = document.querySelector(".my-alert");

  form.addEventListener("submit", (e) => {
    e.preventDefault();    
    btnLoading.classList.toggle("d-none");
    btnKirim.classList.toggle("d-none");
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
        btnLoading.classList.toggle("d-none");
        btnKirim.classList.toggle("d-none");
        myAlert.classList.toggle("d-none");        
        form.reset();
        console.log("Success!", response);
      })
      .catch((error) => console.error("Error!", error.message));
    });

// Back to top
  //Get the button
  let mybutton = document.getElementById("btn-back-to-top");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 100
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  // When the user clicks on the button, scroll to the top of the document
  mybutton.addEventListener("click", backToTop);

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  } 

// Nilai Scroll
  window.addEventListener("scroll", function (event) {
  var scroll = this.scrollY;
  document.querySelector('.nama').style.transform = "rotate(-"+scroll/10+"deg)";
  var warna = document.querySelector('.nama').style.filter = "hue-rotate(-"+scroll/5+"deg)";
  document.querySelector('.nama').style.fill = warna;

});

// Scroll tail
  $(document).mousemove(function(e){
  $(".mouse").css("display", "block");
     $(".border").css({left:e.pageX, top:e.pageY});
     x = e.pageX;
     y = e.pageY;
 });

//  Tilt JS
VanillaTilt.init(document.querySelectorAll(".galler"), {
          max: 25,
          speed: 400,
          glare: true,
          gyroscope: true,
        });
        VanillaTilt.init(document.querySelector(".logo-box"), {
          max: 25,
          speed: 400,
          gyroscope: true,
        });
        VanillaTilt.init(document.querySelectorAll(".project-box"), {
          max: 25,
          speed: 400,
          gyroscope: true,
        });

//  Light Gallery
lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    })