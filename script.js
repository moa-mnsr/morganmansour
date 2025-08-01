console.log('Script is loading!');

const projectTitles = document.querySelectorAll('h2');

projectTitles.forEach(function (title) {
    title.addEventListener('click', function () {
        const projectContent = title.parentElement.querySelector('p');
        const icon = title.querySelector('.dropdown-icon');

        const isOpen = projectContent.style.display === 'block';

        if (isOpen) {
            projectContent.style.display = 'none';
            icon.textContent = '▧';
        } else {
            projectContent.style.display = 'block';
            icon.textContent = '▩';
        }

    });
});


projectTitles.forEach(function(title, index) {

    const projectContent = title.parentElement.querySelector('p');
    if (index === 0 || index === 3) { // First (Design & Code) and last (Teaching & Community)
        projectContent.style.display = 'block';
        const icon = title.querySelector('.dropdown-icon');
        icon.textContent = '▩';
    }else {
        projectContent.style.display = 'none';
    }
});

// Get the down arrow and projects heading elements
const downArrow = document.querySelector('.down-arrow');
console.log('Down arrow found:', downArrow);
const projectsHeading = document.querySelector('.projects-heading');
console.log('Projects heading found:', projectsHeading);
const mainContainer = document.querySelector('main');

downArrow.addEventListener('click', function() {
    console.log('Arrow clicked!');
    
    const projectsContainer = document.querySelector('.projects-container');
    const projectsPosition = projectsContainer.offsetTop;
    console.log('Projects container position:', projectsPosition);

    const paddingTop = 150;
    const targetScroll = projectsPosition - paddingTop; // Keep only this one
    console.log('Target scroll:', targetScroll);
    
    mainContainer.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
    });
    
    console.log('Scroll command sent');
});

// Intersection observer that gradually moves the sticky header up
const cvSection = document.querySelector('.download-flex');
const projectsHeader = document.querySelector('.projects-heading');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // CV section is visible - push the header up gradually
            projectsHeader.style.transform = 'translateY(-100px)';
            projectsHeader.style.transition = 'transform 0.5s ease';
        } else {
            // CV section not visible - header back to normal
            projectsHeader.style.transform = 'translateY(0)';
        }
    });
}, {
    rootMargin: '-100px 0px 0px 0px'
});

observer.observe(cvSection);