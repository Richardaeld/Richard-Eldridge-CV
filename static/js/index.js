// Fading light effect for Hero image
let headerBackground = document.getElementById('headerBackground');
let headerBackgroundFilter = document.getElementById('headerBackgroundFilter');
let toTop = document.getElementById("toTop");

viewHeight = window.innerHeight;
// console.log(viewHeight)

let view100 = viewHeight;
let view75 = viewHeight * .75;
let view50 = viewHeight * .5;
let view25 = viewHeight * .25;



window.addEventListener('scroll', function() {
    if(this.scrollY < viewHeight) {
        // adds toTop button to visibility
        if (! toTop.classList.contains("invis")) {
            toTop.classList.add("invis")
        }

        if(this.scrollY == 0) {
            headerBackgroundFilter.style.backgroundColor = 'rgba(18, 19, 21, 0)'
        } else if (this.scrollY > 0 && this.scrollY < view25) {
            headerBackgroundFilter.style.backgroundColor = 'rgba(18, 19, 21, .45)'
        } else if (this.scrollY > view25 && this.scrollY < view50) {
            headerBackgroundFilter.style.backgroundColor = 'rgba(18, 19, 21, .75)'
        } else if (this.scrollY > view50 && this.scrollY < view75) {
            headerBackgroundFilter.style.backgroundColor = 'rgba(18, 19, 21, .85)'
        } else if (this.scrollY > view75 && this.scrollY < view100) {
            headerBackgroundFilter.style.backgroundColor = 'rgba(18, 19, 21, .95)'
        }
    } else {
        // removes toTop button from visibility
        if (toTop.classList.contains("invis")) {
            toTop.classList.remove("invis")
        }
    }

})


let findProjects = document.querySelectorAll(".projectRow");
findProjects.forEach(setProjectHeight);
function setProjectHeight(projectBody) {
    let itemHeight = projectBody.getElementsByClassName("project-card-text")[0].offsetHeight;
    projectBody.getElementsByClassName("project-card-text")[0].style.height = itemHeight + "px";
    console.log(itemHeight)
}


// Adds function to project buttons => hides and reveals projects on click with animation
let projectButtons = document.querySelectorAll(".project-button-depressed");
projectButtons.forEach(ProjectButtonFunction);
function ProjectButtonFunction(item) {
    item.addEventListener("click", function() {
        if (!item.classList.contains("project-button-opacity")) {

            var previousElement = null;
            // find Id of item element
            let idName = item.textContent.replace(/ /g, "-").toLowerCase();

            // find previous element
            let findProject = document.querySelectorAll(".projectRow")
            findProject.forEach(hideProject);
            function hideProject(visibleProject) {
                if (!visibleProject.classList.contains("invis-test")) {
                    previousElement = visibleProject
                    previousElementHeight = visibleProject.getElementsByClassName("project-card-text")[0].offsetHeight;
                    // console.log(previousElement, previousElement.offsetHeight, "previous element")
                }
            }

            // Find height of background element
            let backgroundHeight = document.getElementsByClassName("backgroundElement")[0].offsetHeight + document.getElementsByClassName("backgroundElement")[1].offsetHeight + document.getElementsByClassName("backgroundElement")[2].offsetHeight + document.getElementsByClassName("backgroundElement")[3].offsetHeight;



            console.log(backgroundHeight, "background img height - project")

            // Find new element height
            let itemHeight = document.getElementById(idName).getElementsByClassName("project-card-text")[0].offsetHeight;
            // console.log(itemHeight, "new height")
            // console.log(previousElement, previousElement.offsetHeight,"old height")
            // console.log(document.getElementById(idName),document.getElementById(idName).offsetHeight ,"new height")

            // sets background height
            document.getElementsByClassName("footer-background")[0].style.height = (backgroundHeight + itemHeight) + "px"

            // Animate height change
            // previousElement.getElementsByClassName("text-animate")[0].style.height = itemHeight + "px";
            // previousElement.parentElement.style.height = (itemHeight) + "px";
            previousElement.getElementsByClassName("project-card-text")[0].style.height = (itemHeight) + "px";
            // console.log(previousElement, " setting height here")


            // Removes button pushed effect
            let removeDepressed = document.querySelector(".project-button-opacity");
            removeDepressed.classList.remove("project-button-opacity")

            // Adds button pused effect
            item.classList.add("project-button-opacity")

            setTimeout(function() {
                // Hides previous project
                previousElement.classList.add("invis-test")
                // Reveals selected project
                document.getElementById(idName).classList.remove("invis-test")
            // Image animation
            document.getElementById(idName).getElementsByClassName("text-animate")[0].classList.add("text-change-anim-finish")
            // Text animation
            document.getElementById(idName).getElementsByClassName("image-animate")[0].classList.add("img-change-anim-finish")
            },1000)

            // Image animation
            previousElement.getElementsByClassName("image-animate")[0].classList.add("img-change-anim")
            // Text animation
            previousElement.getElementsByClassName("text-animate")[0].classList.add("text-change-anim")




            // Remove animations
            setTimeout(function() {
                document.getElementById(idName).getElementsByClassName("image-animate")[0].classList.remove("img-change-anim-finish")
                previousElement.getElementsByClassName("image-animate")[0].classList.remove("img-change-anim")
                document.getElementById(idName).getElementsByClassName("text-animate")[0].classList.remove("text-change-anim-finish")
                previousElement.getElementsByClassName("text-animate")[0].classList.remove("text-change-anim")

                // resets transitional height of previous project
                previousElement.getElementsByClassName("project-card-text")[0].style.height = previousElementHeight + "px";

            },2000)

        }
    })
}


// Revealing filter for Projects section

// fetch('./projects.json')
    // .then(response => response.json())
    // .then(data => console.log(data))
// console.log(projects)