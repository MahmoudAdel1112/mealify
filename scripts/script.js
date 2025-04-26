"use strict";
// Function for creating Chefs cards
const createCard = function () {
  const ChefsCardTemplate = document.getElementById("ChefsCardTemplate");
  const chefsTemplateContainer = document.getElementById(
    "chefsTemplateContainer"
  );

  data.forEach((item, index) => {
    let card = ChefsCardTemplate.content.cloneNode(true);

    card.querySelector(".chefs-name").textContent = item.name;
    card.querySelector(".chefs-title").textContent = item.job;
    card.querySelector(".chefs-p").textContent = item.p;
    card.querySelector(".chefs-img").setAttribute("src", item.photo);

    chefsTemplateContainer.appendChild(card);
  });
};
// Chefs Cards Data
let data = [
  {
    photo: "assets/chefs-1.jpg",
    name: "Walter White",
    job: "Master Chef",
    p: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla dolor obcaecati rerum, quae, earum, eligendi maiores quod veniam neque veritatis quas consequatur.",
  },
  {
    photo: "assets/chefs-2.jpg",
    name: "Sarah Jhonson",
    job: "Patissier",
    p: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla dolor obcaecati rerum, quae, earum, eligendi maiores quod veniam neque veritatis quas consequatur.",
  },
  {
    photo: "assets/chefs-3.jpg",
    name: "William Anderson",
    job: "Cook",
    p: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla dolor obcaecati rerum, quae, earum, eligendi maiores quod veniam neque veritatis quas consequatur.",
  },
];

createCard();

// Function for creating gallery cards
const galCardsMaker = function () {
  const galCardsContainer = document.querySelector(".gal-cards-container");
  const galCard = document.querySelector(".gal-card");

  // Create column containers
  const column1 = document.createElement("div");
  column1.classList.add("column1", "column");

  const column2 = document.createElement("div");
  column2.classList.add("column2", "column");

  const column3 = document.createElement("div");
  column3.classList.add("column3", "column");

  // Append columns to the main container
  galCardsContainer.appendChild(column1);
  galCardsContainer.appendChild(column2);
  galCardsContainer.appendChild(column3);

  data2.forEach((item, index) => {
    let card = galCard.content.cloneNode(true);

    card.querySelector(".layer-gal-h2").textContent = item.h2;
    card.querySelector(".layer-gal-p").textContent = item.p;
    card.querySelector(".gal-card-img").setAttribute("src", item.src);
    // Append the card to the appropriate column based on its index
    if (index < 2) {
      column1.appendChild(card);
    } else if (index >= 2 && index < 4) {
      column2.appendChild(card);
    } else {
      column3.appendChild(card);
    }
  });
};
// Cards Data

let data2 = [
  {
    h2: "Pizza",
    p: "This is a Pizza",
    src: "assets/meal-1.jpg",
  },
  {
    h2: "Levitation pizza",
    p: "Levitation pizza on black background.",
    src: "assets/meal-4.jpg",
  },
  {
    h2: "Beef steaks",
    p: "Tasty beef steaks flying above cast iron grate with fire flames.",
    src: "assets/meal-2.jpg",
  },
  {
    h2: "Frittata",
    p: "Frittata or potato pie in a ceramic plate",
    src: "assets/meal-7.jpg",
  },
  {
    h2: "Burger",
    p: "grass fed bison hamburger with chips & beer",
    src: "assets/meal-3.jpg",
  },
  {
    h2: "Crispy Fried Chicken",
    p: "Golden brown chicken legs with a crunchy coating and juicy meat",
    src: "assets/meal-5.jpg",
  },
  {
    h2: "Lyulya kebab",
    p: "Tender and juicy skewers of ground lamb or beef, flavored with aromatic spices and herbs",
    src: "assets/meal-6.jpg",
  },
];

galCardsMaker();

// Leaflet code

// Function to get the user's current position
function getLocation() {
  const coordinatesElement = document.getElementById("map");

  // Check if the browser supports geolocation
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(latitude, longitude);
        var map = L.map("map").setView([latitude, longitude], 13);
        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }).addTo(map);
      },
      function (error) {
        // Handle errors (e.g., user denies permission)
        switch (error.code) {
          case error.PERMISSION_DENIED:
            var map = L.map("map").setView([40.96603, -74.1033], 10);
            L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
              maxZoom: 19,
              attribution:
                '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            }).addTo(map);
            break;
          case error.POSITION_UNAVAILABLE:
            coordinatesElement.textContent =
              "Location information is unavailable.";
            break;
          case error.TIMEOUT:
            coordinatesElement.textContent =
              "The request to get user location timed out.";
            break;
          default:
            coordinatesElement.textContent = "An unknown error occurred.";
            break;
        }
      }
    );
  }
}
getLocation();

const infoCardMaker = function () {
  const infoCardTemplate = document.querySelector(".info-card-template");
  const infoCardContainer = document.querySelector(".info-card-container");

  data3.forEach((item) => {
    let card = infoCardTemplate.content.cloneNode(true);
    card.querySelector(".h-info-card").textContent = item.h;
    card.querySelector(".p-info-card").textContent = item.p;
    card.querySelector(".fa-solid").classList.add(`fa-${item.icon}`);

    infoCardContainer.appendChild(card);
  });
};
let data3 = [
  {
    h: "Our Address",
    p: "A108 Adam Street, New York, NY 535022",
    icon: "map",
  },
  {
    h: "Email Us",
    p: "contact@example.com",
    icon: "envelope",
  },
  {
    h: "Call Us",
    p: "+1 5589 55488 55",
    icon: "mobile",
  },
  {
    h: "Opening Hours",
    p: "Mon-Sat: 11AM - 23PM; Sunday : Closed",
    icon: "share",
  },
];
infoCardMaker();

// Making the navbar responsive
const faBars = document.querySelector(".fa-bars");
const navMobile = document.querySelector(".nav-mobile");
faBars.addEventListener("click", function () {
  navMobile.classList.remove("hidden");
});
const faX = document.querySelector(".fa-x");
faX.addEventListener("click", function () {
  navMobile.classList.add("hidden");
});

// Making the navbar section hightlight the link
// Get all navigation links and sections
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");

// Function to check which section is in view
function highlightActiveLink() {
  let currentSection = null;

  // Special case for the Home section
  if (window.scrollY < window.innerHeight) {
    currentSection = "home"; // Highlight the Home section if near the top
  } else {
    // Loop through sections to find the one currently in view
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();

      // Check if the section is visible in the viewport
      if (
        rect.top <= window.innerHeight / 5&&
        rect.bottom >= window.innerHeight / 5
      ) {
        currentSection = section.getAttribute("id");
      }
    });
  }

  // Remove 'active' class from all links
  navLinks.forEach((link) => link.classList.remove("active"));

  // Add 'active' class to the link matching the current section
  if (currentSection) {
    const activeLink = document.querySelector(
      `.nav-link[href="#${currentSection}"]`
    );
    if (activeLink) {
      activeLink.classList.add("active");
      activeLink.setAttribute("aria-current", "page");
    }
  }
}

// Attach the function to scroll and load events
window.addEventListener("scroll", highlightActiveLink);
window.addEventListener("load", highlightActiveLink);

// Gsap code (removed but for the sake of keeping the hard work)

// // Select the image element
// const shakeImage = document.querySelector(".shake-image");

// // Function to generate random shake values
// function getRandomShake(min, max) {
//   return Math.random() * (max - min) + min;
// }

// // Function to start the shake animation
// function startShake() {
//   gsap.to(shakeImage, {
//     duration: 0.4, // Short duration for rapid shaking
//     x: () => getRandomShake(-10, 10), // Random horizontal shake
//     y: () => getRandomShake(-10, 10), // Random vertical shake
//     repeat: -1, // Infinite repetition
//     ease: "power1.inOut", // Smooth easing
//   });
// }

// // Function to stop the shake animation
// function stopShake() {
//   gsap.killTweensOf(shakeImage); // Stop all animations on the image
// }

// // Add hover event listeners
// shakeImage.addEventListener("mouseenter", startShake);
// shakeImage.addEventListener("mouseleave", stopShake);
