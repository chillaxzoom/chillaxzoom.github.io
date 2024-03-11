'use strict';

/**
 * navbar variables
 */

const navOpenBtn = document.querySelector("[data-menu-open-btn]");
const navCloseBtn = document.querySelector("[data-menu-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navLinks = navbar.querySelectorAll("a"); // Select all anchor links within the navbar

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");
  });
}

// Add event listeners to each navbar link to remove the 'active' class when clicked
navLinks.forEach(link => {
  link.addEventListener("click", function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("active");
  });
});




/**
 * header sticky
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {

  window.scrollY >= 10 ? header.classList.add("active") : header.classList.remove("active");

});



/**
 * go top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  window.scrollY >= 500 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");

});




/**
 * slide
 */


 let currentSlide = 1;
let isPaused = false; // Variable to check if the slideshow is paused

// Function to change the slide
const changeSlide = () => {
  if (!isPaused) {
    // Remove 'can-zoom' class from all slides
    document.querySelectorAll('.zoom-container').forEach((container) => {
      container.classList.remove('can-zoom');
    });

    // Set the active slide
    const activeSlide = document.getElementById(`s${currentSlide}`);
    activeSlide.checked = true;

    // Add 'can-zoom' class to the active slide
    const activeContainer = document.querySelector(`.zoom-container[data-slide="${currentSlide}"]`);
    if (activeContainer) {
      activeContainer.classList.add('can-zoom');
    }

    // Move to the next slide
    currentSlide++;
    if (currentSlide > 12) {
      currentSlide = 1;
    }
  }
};

// Start the auto-scroll
let slideInterval = setInterval(changeSlide, 3000);

// Function to pause the auto-scroll
const pauseSlide = () => {
  isPaused = true;
};

// Function to resume the auto-scroll
const resumeSlide = () => {
  isPaused = false;
};

// Adding event listeners to pause and resume auto-scroll on hover
document.querySelectorAll('.zoom-container').forEach((container) => {
  container.addEventListener('mouseover', () => {
    if (!container.classList.contains('can-zoom')) {
      return;
    }
    pauseSlide();
  });
  container.addEventListener('mouseout', () => {
    resumeSlide();
  });
});






/**
 * search the card title
 */

 


 // JavaScript for filtering and arranging movies
var moviesList = document.getElementById('moviesList');
var originalMovies = moviesList.innerHTML;

var slider = document.getElementById('slider');  
var topRatedSection = document.querySelector('.top-rated');
var topRatedSectionTitle = document.querySelector('.top-rated .section-title');

document.getElementById('searchInput').addEventListener('input', function(event) {
  var searchText = this.value.toLowerCase();
  var movieType = document.getElementById('movieType').value;

  slider.style.display = searchText.length >= 1 ? 'none' : '';    
  topRatedSection.style.marginTop = searchText.length >= 1 ? '100px' : '';

  // Choose which movie list to search based on selected option
  var currentList = moviesList;
  var querySelector = '.card-title';

  var movies = currentList.querySelectorAll(querySelector);
  var filteredMovies = [];
  movies.forEach(function(movie) {
    var movieTitle = movie.textContent.toLowerCase();
    if (movieTitle.includes(searchText)) {
      filteredMovies.push(movie.parentNode.parentNode.parentNode.parentNode);
    }
  });

  // Clear the previous list
  currentList.innerHTML = '';

  // Append filtered movies to the list
  if (searchText !== '') {
    filteredMovies.forEach(function(movie) {
      var listItem = document.createElement('li');
      listItem.innerHTML = movie.innerHTML;
      currentList.appendChild(listItem);
    });
  } else {
    // If search input is empty, restore original movies
    currentList.innerHTML = originalMovies;
  }

  // Check if the event target is the cancel button, if so, prevent clearing the textbox
  if (event.target.classList.contains('cancel-btn')) {
    event.preventDefault();
  }
});




/**
 * menu button action drama thriller
 */

 document.addEventListener("DOMContentLoaded", function () {
    const actionButton = document.getElementById("actionButton");
    const crimeButton = document.getElementById("crimeButton");
    const thrillerButton = document.getElementById("thrillerButton"); // Corrected ID
    const horrorButton = document.getElementById("horrorButton");
    const comedyButton = document.getElementById("comedyButton");
    const romanceButton = document.getElementById("romanceButton");
    const dramaButton = document.getElementById("dramaButton");
    const dubbedButton = document.getElementById("dubbedButton"); 
    const slider = document.getElementById('slider');  
    const topRatedSection = document.querySelector('.top-rated .section-title');
    const moviesList = document.getElementById("moviesList");

    actionButton.addEventListener("click", function () {
        filterMovies("action");
        slider.style.display = 'none';
        topRatedSection.style.marginTop = '100px';
    });

    crimeButton.addEventListener("click", function () {
        filterMovies("crime");
        slider.style.display = 'none';
        topRatedSection.style.marginTop = '100px';
    });

    thrillerButton.addEventListener("click", function () {
        filterMovies("thriller");
        slider.style.display = 'none';
        topRatedSection.style.marginTop = '100px';
    });

    horrorButton.addEventListener("click", function () {
        filterMovies("horror");
        slider.style.display = 'none';
        topRatedSection.style.marginTop = '100px';
    });

    comedyButton.addEventListener("click", function () {
        filterMovies("comedy");
        slider.style.display = 'none';
        topRatedSection.style.marginTop = '100px';
    });

       romanceButton.addEventListener("click", function () {
        filterMovies("romance");
        slider.style.display = 'none';
        topRatedSection.style.marginTop = '100px';
    });   

    dramaButton.addEventListener("click", function () {
        filterMovies("drama");
        slider.style.display = 'none';
        topRatedSection.style.marginTop = '100px';
    });      

    dubbedButton.addEventListener("click", function () {
        filterMovies("dubbed");
        slider.style.display = 'none';
        topRatedSection.style.marginTop = '100px';
    });

    function filterMovies(tag) {
        const movieCards = moviesList.querySelectorAll(".movie-card");
        movieCards.forEach(function (card) {
            const tags = card.getAttribute("data-tags");
            if (tags.includes(tag)) {
                card.parentNode.style.display = "grid"; // Set display to grid
            } else {
                card.parentNode.style.display = "none";
            }
        });
    }
});
