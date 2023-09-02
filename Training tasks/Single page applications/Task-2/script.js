document.addEventListener("DOMContentLoaded", () => {
    const navbarItems = document.querySelectorAll(".navbar li");
    const navbar = document.querySelector(".navbar");
    const contents = document.querySelectorAll(".content");
    const btn = document.getElementById("btn");
    const clsBtn = document.querySelector(".close");
    const next = document.querySelector(".next");
    const username = document.querySelector('.username');
    const password = document.querySelector('.password');
    const submitBtn = document.querySelector('.submitBtn');
    const greet = document.querySelector('.greetings');

    const storedUsername = localStorage.getItem("Name");

    if (storedUsername) {
      greet.innerHTML = "Welcome " + storedUsername;
    }
    submitBtn.addEventListener('click',()=>{
        const usernameVal = username.value;
       console.log(usernameVal);
      const passwordVal = password.value;
      console.log(passwordVal);
      localStorage.setItem("Name",usernameVal);
      localStorage.setItem("Password",passwordVal);
      greet.innerHTML="Welcome " +usernameVal;

      next.style.display = "none";
      navbar.style.opacity = "1";
      contents.forEach((content) => {
        content.style.opacity = "1";
      });
    })
    clsBtn.addEventListener("click", () => {
      next.style.display = "none";
      contents.forEach((content) => {
        content.style.opacity = "1";
      });
    });
  
    btn.addEventListener("click", () => {
      next.style.display = "block";
      contents.forEach((content) => {
        content.style.opacity = "0.3";
      });
    });
  
    navbarItems.forEach((item) => {
      item.addEventListener("click", () => {
        const contentId = "content-" + item.id;
        console.log(contentId);
        showContent(contentId);
      });
    });
  
    function showContent(contentId) {
      contents.forEach((content) => {
        content.style.display = "none";
      });
  
      const contentToShow = document.getElementById(contentId);
      contentToShow.style.display = "block";
    }
    document.getElementById("content-home").style.display = "block";
  });
  