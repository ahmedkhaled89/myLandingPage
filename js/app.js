/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const fragment = document.createDocumentFragment();
//const sections = document.querySelectorAll('section');
const ul = document.querySelector('ul');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
//function to creat a link to each section dynamicaly
const creatLinks = ()=>{
    const sections = document.querySelectorAll('section');
    console.log('creatLinks Fnction Works!')
    sections.forEach(section => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        //add the 'menu__link' (in css/styles.css file) class to style the menue links
        a.classList.add("menu__link");
        //setting the 'href' property for each link 
        a.href = '#'+section.id;
        //setting the text of each link to be the section's number 
        a.innerHTML = section.getAttribute('data-nav');
        li.appendChild(a);
        //append links to the fragment 
        fragment.appendChild(li);
    
});




    

}
creatLinks()
ul.appendChild(fragment);



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


