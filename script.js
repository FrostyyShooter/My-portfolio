// THIS IS THE MAIN SCRIPT FILE FOR THE PROJECT
// declare variables
var tabButton1 = document.getElementById('scrollButton1');
var tabButton2 = document.getElementById('scrollButton2');
var tabButton3 = document.getElementById('scrollButton3');
var tabButton4 = document.getElementById('scrollButton4');

var previousButton = null;

// Function to scroll to a specific section
function scrollToSection(tab) {
    const section = document.getElementById(tab);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Function to handle button click
function handleButtonClick(button, tab) {
    if (previousButton) {
        previousButton.style.backgroundColor = '#04d3fb36'; // Reset previous button background color
        //previousButton.style.border = ''; // Reset previous button border
    }
    button.style.backgroundColor = '#04d3fb'; // Change current button background color
    //button.style.border = '3px solid white'; // Change current button border
    previousButton = button; // Update previous button reference
    scrollToSection(tab);
}

// Add event listeners to the buttons
document.addEventListener('DOMContentLoaded', function() {
    // Set the first tab as active
    previousButton = tabButton1;
    previousButton.style.backgroundColor = '#04d3fb';
    //previousButton.style.border = '3px solid red';

    tabButton1.addEventListener('click', function() {
        handleButtonClick(tabButton1, 'tab1');
    });
    tabButton2.addEventListener('click', function() {
        handleButtonClick(tabButton2, 'tab2');
    });
    tabButton3.addEventListener('click', function() {
        handleButtonClick(tabButton3, 'tab3');
    });
    tabButton4.addEventListener('click', function() {
        handleButtonClick(tabButton4, 'tab4');
    });
});

// declare variables
var tabButton1 = document.getElementById('scrollButton1');
var tabButton2 = document.getElementById('scrollButton2');
var tabButton3 = document.getElementById('scrollButton3');
var tabButton4 = document.getElementById('scrollButton4');

var previousButton = null;

// Function to scroll to a specific section
function scrollToSection(tab) {
    const section = document.getElementById(tab);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Function to handle button click
function handleButtonClick(button, tab) {
    if (previousButton) {
        previousButton.style.backgroundColor = ''; // Reset previous button background color
    }
    button.style.backgroundColor = '#04d3fb'; // Change current button background color to blue using hex
    previousButton = button; // Update previous button reference
    scrollToSection(tab);
}

// Function to handle scroll event
function handleScroll() {
    const sections = document.querySelectorAll('.scroll-tab-1, .scroll-tab-2, .scroll-tab-3, .scroll-tab-4');
    let currentSection = null;

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            currentSection = section;
        }
    });

    if (currentSection) {
        let button;
        switch (currentSection.id) {
            case 'tab1':
                button = tabButton1;
                break;
            case 'tab2':
                button = tabButton2;
                break;
            case 'tab3':
                button = tabButton3;
                break;
            case 'tab4':
                button = tabButton4;
                break;
        }
        if (button && button !== previousButton) {
            if (previousButton) {
                previousButton.style.backgroundColor = ''; // Reset previous button background color
            }
            button.style.backgroundColor = '#04d3fb'; // Change current button background color to blue using hex
            previousButton = button; // Update previous button reference
        }
    }
}

// Add event listeners to the buttons
document.addEventListener('DOMContentLoaded', function() {
    // Set the first tab as active
    previousButton = tabButton1;
    previousButton.style.backgroundColor = '#04d3fb'; // Set initial background color to blue using hex

    tabButton1.addEventListener('click', function() {
        handleButtonClick(tabButton1, 'tab1');
    });
    tabButton2.addEventListener('click', function() {
        handleButtonClick(tabButton2, 'tab2');
    });
    tabButton3.addEventListener('click', function() {
        handleButtonClick(tabButton3, 'tab3');
    });
    tabButton4.addEventListener('click', function() {
        handleButtonClick(tabButton4, 'tab4');
    });

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
});