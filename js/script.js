"use strict";

import { scrollToTop } from "./scroll.js";

const accordionDiv = document.querySelectorAll(".accordion-container");

accordionDiv.forEach((el) => {
  el.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});

let filterInput = document.getElementById("userinput");
let filterUl = document.getElementById("userul");
let fragment = document.createDocumentFragment();
let listArrays = [];

async function users() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Page not found");
    }

    let responseData = await response.json();
    responseData.forEach((el) => {
      let li = document.createElement("li");
      li.innerText = `${el.name}`;
      listArrays.push(li);
      fragment.appendChild(li);
      filterUl.appendChild(fragment);
    });
  } catch (error) {
    console.log(error);
  }
}

users();

function userFilterFnc(item) {
  listArrays.forEach((el) => {
    if (el.innerText.toLowerCase().includes(item.toLowerCase().trim())) {
      el.classList.remove("active");
    } else {
      el.classList.add("active");
    }
  });
}

filterInput.addEventListener("keyup", function () {
  userFilterFnc(this.value);
});

let navbar = document.getElementById("navbar");
let burger = document.getElementById("burgerbar");
burger.addEventListener("click", () => {
  navbar.classList.toggle("activenav");
  // if (navbar.classList.contains("activenav")) {
  //   navbar.style.maxHeight = navbar.scrollHeight + "px";
  // } else {
  //   navbar.style.maxHeight = 0;
  // }
});

let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
});

scrollToTop();

const consentBox = document.getElementById("consentBox");
const acceptBtn = document.querySelector(".consentButton");
const rejectBtn = document.querySelector(".rejectButton");

acceptBtn.onclick = () => {
  document.cookie = "CookieBy=DesignForge; max-age=" + 60 * 60 * 24;
  if (document.cookie) {
    consentBox.classList.add("hide");
  } else {
    alert(
      "Cookie can't be set! Please" +
        " unblock this site from the cookie" +
        " setting of your browser."
    );
  }
};

rejectBtn.onclick = () => {
  alert("Cookies rejected. Some functionality may be limited.");
  consentBox.classList.add("hide");
};

let checkCookie = document.cookie.indexOf("CookieBy=DesignForge");
checkCookie !== -1
  ? consentBox.classList.add("hide")
  : consentBox.classList.remove("hide");

  

let swiper = new Swiper(".slide-container", {
  slidesPerView: 4,
  spaceBetween: 10,
  sliderPerGroup: 4,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".imagesliderrightarrow",
    prevEl: ".imagesliderleftarrow",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
    1500: {
      slidesPerView: 5,
    },
    1920: {
      slidesPerView: 6,
    },
  },
});
