

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

  
  // AOS
  AOS.init({
    // once: true
  });
  
  // GSAP
  const words = ["a Student", "a Web Designer", "a Web Developer"];
  let keterangan = gsap.timeline({ repeat: -1 });
  words.forEach((word) => {
    let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
    tl.to(".lead", { 
      duration: 1.5, 
      text: word 
    });
  
    keterangan.add(tl);
  });
  
  gsap.registerPlugin(TextPlugin);
  
  gsap.from(".navbar", { 
    delay: 4, 
    duration: 1.5, 
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