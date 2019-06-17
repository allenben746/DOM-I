// Ben Allen
const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Navigation Bar Text
navText = ["Services", "Product", "Vision", "Features", "About", "Contact"];
const firstChild = document.querySelector("nav a:nth-child(1)");
  firstChild.textContent = `${navText[0]}`;
const secondChild = document.querySelector("nav a:nth-child(2)");
  secondChild.textContent = `${navText[1]}`;
const thirdChild = document.querySelector("nav a:nth-child(3)");
  thirdChild.textContent = `${navText[2]}`;
const forthChild = document.querySelector("nav a:nth-child(4)");
  forthChild.textContent = `${navText[3]}`;
const fifthChild = document.querySelector("nav a:nth-child(5)");
  fifthChild.textContent = `${navText[4]}`;
const sixthChild = document.querySelector("nav a:nth-child(6)");
  sixthChild.textContent = `${navText[5]}`;
// Navigation Bar Text

//Upper Section Containing "Dom is Awesome & Picture of Code"
const headMessage = document.querySelector("h1");
  headMessage.textContent = "DOM IS AWESOME";

const headButton = document.querySelector("button");
  headButton.textContent = "Get Started";

const topContent = document.querySelector("top-content");

const topContentImg = document.getElementById("cta-img");
topContentImg.setAttribute('src', siteContent["cta"]["img-src"]);
//Upper Section Containing "Dom is Awesome & Picture of Code"