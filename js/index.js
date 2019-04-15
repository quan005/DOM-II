// Your code goes here
const logo = document.querySelector(".logo-heading");
const navBg = document.querySelector(".main-navigation");
const navLinks = document.querySelectorAll(".nav a");
const container = document.querySelector(".home");
const topOfContainer = container.offsetTop - 70;
const clickBtn = document.querySelector(".click-btn");
const doubleBtn = document.querySelector(".dbl-btn");
const destination = document.querySelector(".d2");
const destinationH4 = document.querySelector(".d2 h4");
const destinationP = document.querySelector(".d2 p");
const dragBtn = document.querySelector(".drag-btn");





// <<<<< 1. Load Event >>>>> //


function hidden() {
  const pageLoader = document.querySelector(".page-loader");
  pageLoader.classList.add("hidden")
}

window.addEventListener("load", () => {
  // alert("Welcome To The Fun Bus!");
  let timerId = setTimeout(function slide() {
    const side1 = document.querySelector(".side1");
    const side2 = document.querySelector(".side2");
    side1.classList.add("hiddenleft");
    side2.classList.add("hiddenright");
    timerId = setTimeout(hidden, 1000); // (*)
}, 3000);
});


// <<<<< 2. MouseOver Event >>>>> //
logo.addEventListener("mouseover", () => {
  logo.style.fontSize = "6rem";
  logo.style.color = "#D9716F";
})


// <<<<< 3. Scroll Event >>>>> //
window.addEventListener("scroll", (Event) => {
  if(window.scrollY >= topOfContainer) {
    navBg.style.backgroundColor = "#D9716F";
    logo.textContent = "FB";
    logo.style.fontSize = "3rem";
    logo.style.color = "#FFFFFF";
    navLinks.forEach((link, item) => {
      link.style.color = "#FFFFFF";
    });
    navBg.classList.add("fixed-nav");
  } else {
    navBg.style.backgroundColor = "#FFFFFF";
    logo.textContent = "Fun Bus";
    logo.style.fontSize = "4rem";
    logo.style.color = "#D9716F";
    navLinks.forEach((link, item) => {
      link.style.color = "#111111"
    });
    navBg.classList.remove("fixed-nav");
  }
});


// <<<<< 4. Click Event >>>>> //
clickBtn.addEventListener("click", () => {
  clickBtn.style.fontSize = "1.3rem";
  clickBtn.style.backgroundColor = "#FFFFFF";
  clickBtn.textContent = "Hey!! You Clicked Me!";
  clickBtn.style.color = "#D9716F";
})


// <<<<< 5. Double Click Event >>>>> //
doubleBtn.addEventListener("dblclick", () => {
  destinationH4.style.visibility = "hidden";
  destinationP.style.visibility = "hidden";
  doubleBtn.style.fontSize = "2rem";
  doubleBtn.style.backgroundColor = "#FFFFFF";
  doubleBtn.textContent = "Call Me... Houdini";
  doubleBtn.style.color = "#D9716F";
})


// <<<<< 6. Dragstart Event >>>>> //
dragBtn.addEventListener("dragstart", () => {
  destinationH4.style.visibility = "hidden";
  destinationP.textContent = "Drop Here";
  destinationP.style.textAlign = "center";
  doubleBtn.style.margin = "0 auto";
  destination.style.backgroundColor = "lightgrey";
})


// <<<<< 7. Dragend Event >>>>> //
dragBtn.addEventListener("dragend", () => {
  this.className = "drag-btn";
})


// <<<<< 8. Dragover Event >>>>> //
destination.addEventListener("dragover", (event) => {
    event.preventDefault();
});


// <<<<< 9. Dragenter Event >>>>> //
destination.addEventListener("dragenter", (event) => {
    event.preventDefault();
});


// <<<<< 10. Drop Event >>>>> //
destination.addEventListener("drop", () => {
    destination.append(dragBtn);
});
