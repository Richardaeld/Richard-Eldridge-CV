

// give projects an initial fixed height
function projectFixedHeights () {
    let findProjects = document.querySelectorAll(".projectRow");
    findProjects.forEach(setProjectHeight);
    function setProjectHeight(projectBody) {
        projectBody.getElementsByClassName("project-card-text")[0].style.height = "fit-content";
        let itemHeight = projectBody.getElementsByClassName("project-card-text")[0].offsetHeight;
        // projectBody.getElementsByClassName("project-card-text")[0].style.height = itemHeight + "px";
        if (projectBody.classList.contains("invisMe")) {
            projectBody.classList.add("invis-test")
        }
        console.log(itemHeight)
    }
}

// function projectFixedHeightsWidthAdj () {
//     let findProjects = document.querySelectorAll(".projectRow");
//     findProjects.forEach(setProjectHeight);
//     function setProjectHeight(projectBody) {
//         projectBody.getElementsByClassName("project-card-text")[0].style.height = "auto";
//         let itemHeight = projectBody.getElementsByClassName("project-card-text")[0].offsetHeight;
//         projectBody.getElementsByClassName("project-card-text")[0].style.height = itemHeight + "px";
//         if (projectBody.classList.contains("invisMe")) {
//             // projectBody.classList.remove("invisMe")
//             projectBody.classList.add("invis-test")
//         }
//         console.log(itemHeight)
//     }
// }




// window.addEventListener('resize', projectFixedHeightsWidthAdj)
// window.onresize = projectFixedHeights;
projectFixedHeights();


// ON SCREEN RESIZE
function resetVisibility() {
    let findHiddenProjects = document.querySelectorAll(".invisMe");
    findHiddenProjects.forEach(makeVisible);
    function makeVisible(projectVisible) {
        projectVisible.classList.remove("invis-test");
        console.log(projectVisible.classList);
    }
    projectFixedHeights();

    // findHiddenProjects.forEach(makeInvisible);
    // function makeInvisible(projectInvisible) {
    //     projectInvisible.classList.add("invis-test")
    // }
}
window.addEventListener('resize', resetVisibility)



function projectsFunction() {
// Adds function to project buttons => hides and reveals projects on click with animation
let projectButtons = document.querySelectorAll(".project-button-depressed");
projectButtons.forEach(ProjectButtonFunction);
function ProjectButtonFunction(item) {
    item.addEventListener("click", function() {
        if (!item.classList.contains("project-button-opacity")) {

            var previousElement = null;
            // find Id of item element
            let idName = item.textContent.replace(/ /g, "-").toLowerCase();


            // disable/enable buttons
            let findbuttons = document.querySelectorAll(".project-button-filter");
            findbuttons.forEach(disableButtons);
            function disableButtons(projectButtons) {
                projectButtons.style.zIndex = 3
                setTimeout(function() {
                    projectButtons.style.zIndex = -1
                },500)

            }



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

            // sets previous elements height
            previousElement.getElementsByClassName("project-card-text")[0].style.height = previousElementHeight + "px";



            // Give previous element invis identifier
            previousElement.classList.add("invisMe")

            // Remove invis identifier from new selection
            document.getElementById(idName).classList.remove("invisMe")

            // Find height of background element
            var backgroundHeight = 0;
            let findBackgroundTotal = document.querySelectorAll(".backgroundElement").length;
            console.log(findBackgroundTotal)
            for (i = 0; i <= findBackgroundTotal - 1; i++) {
                let backgroundElementHeight = document.getElementsByClassName("backgroundElement")[i].offsetHeight;
                backgroundHeight += backgroundElementHeight
            }




            // console.log(backgroundHeight, "background img height - project")

            // Find new element height
            let itemHeight = document.getElementById(idName).getElementsByClassName("project-card-text")[0].offsetHeight;
            console.log(itemHeight, "new height")
            // console.log(previousElement, previousElement.offsetHeight,"old height")
            // console.log(document.getElementById(idName),document.getElementById(idName).offsetHeight ,"new height")

            // sets background height
            document.getElementsByClassName("footer-background")[0].style.height = (backgroundHeight + itemHeight) + "px"

            // Animate height change
            previousElement.getElementsByClassName("project-card-text")[0].style.height = (itemHeight) + "px";
            // console.log(previousElement, " setting height here")


            // Removes button pushed effect
            let removeDepressed = document.querySelector(".project-button-opacity");
            removeDepressed.classList.remove("project-button-opacity")

            // Adds button pushed effect
            item.classList.add("project-button-opacity")

            // removes box shadow of unpushed button
            

            // starts second animation and transition to clicked project
            setTimeout(function() {
                // Hides previous project
                previousElement.classList.add("invis-test")
                // Reveals selected project
                document.getElementById(idName).classList.remove("invis-test")
            // Image animation
            document.getElementById(idName).getElementsByClassName("text-animate")[0].classList.add("text-change-anim-finish")
            // Text animation
            document.getElementById(idName).getElementsByClassName("image-animate")[0].classList.add("img-change-anim-finish")
            },250)

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
                // previousElement.getElementsByClassName("project-card-text")[0].style.height = previousElementHeight + "px";
                previousElement.getElementsByClassName("project-card-text")[0].style.height = "fit-content";

            },500)

        }
    })
}
}





// window.onresize = projectsFunction;
window.addEventListener("resize", projectsFunction);
projectsFunction();



// Project image modal


