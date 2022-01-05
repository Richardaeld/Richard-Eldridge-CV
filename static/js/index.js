// Fading light effect for Hero image
let headerBackground = document.getElementById('headerBackground');
let headerBackgroundFilter = document.getElementById('headerBackgroundFilter');
let toTop = document.getElementById("toTop");

viewHeight = window.innerHeight;
console.log(viewHeight)

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


// Adds function to project buttons => hides and reveals projects on click with animation
let projectButtons = document.querySelectorAll(".project-button-depressed");
projectButtons.forEach(ProjectButtonFunction);
function ProjectButtonFunction(item) {
    item.addEventListener("click", function() {
        if (!item.classList.contains("project-button-opacity")) {

            var previousElement = null;
            // find Id of item element
            let idName = item.textContent.replace(/ /g, "-").toLowerCase();

            // Find new element height
            // let itemHeight = item.offsetHeight;
            // console.log(itemHeight)

            // find previous element
            let findProject = document.querySelectorAll(".project-row")
            findProject.forEach(hideProject);
            function hideProject(visibleProject) {
                if (!visibleProject.classList.contains("invis")) {
                    previousElement = visibleProject
                    console.log(previousElement)
                }
            }

            // Animate height change
            // previousElement.getElementsByClassName("text-animate")[0].style.height = itemHeight + "px";

            // Removes button pushed effect
            let removeDepressed = document.querySelector(".project-button-opacity");
            removeDepressed.classList.remove("project-button-opacity")

            // Adds button pused effect
            item.classList.add("project-button-opacity")

            setTimeout(function() {
                // Hides previous project
                previousElement.classList.add("invis")
                // Reveals selected project
                document.getElementById(idName).classList.remove("invis")
            },1000)
            // Image animation
            document.getElementById(idName).getElementsByClassName("image-animate")[0].classList.add("img-change-anim-finish")
            previousElement.getElementsByClassName("image-animate")[0].classList.add("img-change-anim")
            // Text animation
            document.getElementById(idName).getElementsByClassName("text-animate")[0].classList.add("text-change-anim-finish")
            previousElement.getElementsByClassName("text-animate")[0].classList.add("text-change-anim")


            // Remove animations
            setTimeout(function() {
                document.getElementById(idName).getElementsByClassName("image-animate")[0].classList.remove("img-change-anim-finish")
                previousElement.getElementsByClassName("image-animate")[0].classList.remove("img-change-anim")
                document.getElementById(idName).getElementsByClassName("text-animate")[0].classList.remove("text-change-anim-finish")
                previousElement.getElementsByClassName("text-animate")[0].classList.remove("text-change-anim")
            },2000)

        }
    })
}


// Revealing filter for Projects section

// fetch('./projects.json')
    // .then(response => response.json())
    // .then(data => console.log(data))
// console.log(projects)