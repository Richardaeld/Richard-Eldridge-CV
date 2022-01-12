// ---- Give projects an initial fixed height ----
function projectFixedHeights () {
    let findProjects = document.querySelectorAll(".projectRow");
    findProjects.forEach(setProjectHeight);
    function setProjectHeight(projectBody) {
        projectBody.getElementsByClassName("text-filter-container")[0].style.height = "fit-content";
        // let itemHeight = projectBody.getElementsByClassName("text-filter-container")[0].offsetHeight;
        if (projectBody.classList.contains("invisMe")) {
            projectBody.classList.add("invis-project");
        }
        // console.log(itemHeight)
    }
}
projectFixedHeights();


// ---- Screen resize with width change ----
function resetVisibility() {
    let findHiddenProjects = document.querySelectorAll(".invisMe");
    findHiddenProjects.forEach(makeVisible);
    function makeVisible(projectVisible) {
        projectVisible.classList.remove("invis-project");
        console.log(projectVisible.classList);
    }
    projectFixedHeights();
    setBodyBackgroundHeight(true);
}
window.addEventListener('resize', resetVisibility);


// ---- Find and set body background height ----
function setBodyBackgroundHeight(initialCheck, idNameImport, itemHeightImport) {
    var idName = "";
    let itemHeight = 0;
    var backgroundHeight = 0;
    let findBackgroundTotal = document.querySelectorAll(".backgroundElement").length;
    if (initialCheck) {
        idName = document.getElementsByClassName("projectRow")[0].id;
        itemHeight = document.getElementById(idName).getElementsByClassName("text-filter-container")[0].offsetHeight;
    } else {
        idName = idNameImport;
        itemHeight = itemHeightImport;
    }
    // Finds approximate background length
    for (let i = 0; i <= findBackgroundTotal - 1; i++) {
        let backgroundElementHeight = document.getElementsByClassName("backgroundElement")[i].offsetHeight;
        backgroundHeight += backgroundElementHeight;
    }
    // Accounts for extra height on small screens
    if (window.innerWidth <= 992 ){
        let imageHeight = document.getElementById(idName).getElementsByClassName("image-filter-container")[0].offsetHeight;
        backgroundHeight += imageHeight;
    }
    document.getElementsByClassName("footer-background")[0].style.height = (backgroundHeight + itemHeight) + "px";
}
setBodyBackgroundHeight(true);

// ---- Adds function to project buttons, adjusts body background image height, ----
// ---- Adjusts project text height and adds a animation effect ----
function projectsFunction() {
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
                    projectButtons.style.zIndex = 3;
                    setTimeout(function() {
                        projectButtons.style.zIndex = -1;
                    },1000);
                }


                // find previous element
                let previousElementHeight = 0;
                let findProject = document.querySelectorAll(".projectRow");
                findProject.forEach(hideProject);
                function hideProject(visibleProject) {
                    if (!visibleProject.classList.contains("invis-project")) {
                        previousElement = visibleProject;
                        previousElementHeight = visibleProject.getElementsByClassName("text-filter-container")[0].offsetHeight;
                    }
                }


                // sets previous elements height
                previousElement.getElementsByClassName("text-filter-container")[0].style.height = previousElementHeight + "px";


                // Give previous element invis identifier
                previousElement.classList.add("invisMe");

                // Remove invis identifier from new selection
                document.getElementById(idName).classList.remove("invisMe");


                // Find new element height
                let itemHeight = document.getElementById(idName).getElementsByClassName("text-filter-container")[0].offsetHeight;


                // sets background height
                setBodyBackgroundHeight(false, idName, itemHeight);


                // Animate height change
                previousElement.getElementsByClassName("text-filter-container")[0].style.height = (itemHeight) + "px";


                // Removes button pushed effect
                let removeDepressed = document.querySelector(".project-button-opacity");
                removeDepressed.classList.remove("project-button-opacity");


                // Adds button pushed effect
                item.classList.add("project-button-opacity");


                // starts first animation
                // Image animation
                previousElement.getElementsByClassName("image-filter-container")[0].classList.add("opacityFalse");
                // Text animation
                previousElement.getElementsByClassName("text-filter-container")[0].classList.add("opacityFalse");
                // Moves selected project to text ready position
                // document.getElementById(idName).getElementsByClassName("text-filter-container")[0].classList.add("translate-away");
                // document.getElementById(idName).getElementsByClassName("image-filter-container")[0].classList.add("translate-away");



                // starts second animation and transition to clicked project
                setTimeout(function() {
                    // Hides previous project
                    previousElement.classList.add("invis-project");
                    // Reveals selected project
                    document.getElementById(idName).classList.remove("invis-project");

                    // Image animation
                    // document.getElementById(idName).getElementsByClassName("text-filter-container")[0].classList.add("text-change-anim-finish");
                    // document.getElementById(idName).getElementsByClassName("text-filter-container")[0].classList.remove("translate-away");
                    // Text animation
                    // document.getElementById(idName).getElementsByClassName("image-filter-container")[0].classList.add("img-change-anim-finish");
                    document.getElementById(idName).getElementsByClassName("image-filter-container")[0].classList.remove("opacityFalse");
                    document.getElementById(idName).getElementsByClassName("text-filter-container")[0].classList.remove("opacityFalse");
                    // resets transitional height of previous project
                    previousElement.getElementsByClassName("text-filter-container")[0].style.height = "fit-content";
                    // document.getElementById(idName).getElementsByClassName("image-filter-container")[0].classList.remove("translate-away");
                },500);

                // Remove animations
                setTimeout(function() {
                    // document.getElementById(idName).getElementsByClassName("image-filter-container")[0].classList.remove("img-change-anim-finish");
                    // previousElement.getElementsByClassName("image-filter-container")[0].classList.remove("project-change-anim-start");
                    // document.getElementById(idName).getElementsByClassName("text-filter-container")[0].classList.remove("text-change-anim-finish");
                    // previousElement.getElementsByClassName("text-filter-container")[0].classList.remove("project-change-anim-start");

                    // document.getElementById(idName).getElementsByClassName("image-filter-container")[0].classList.remove("opacityFalse");
                    // previousElement.getElementsByClassName("image-filter-container")[0].classList.remove("project-change-anim-start");
                    // document.getElementById(idName).getElementsByClassName("text-filter-container")[0].classList.remove("opacityFalse");
                    // previousElement.getElementsByClassName("text-filter-container")[0].classList.remove("project-change-anim-start");



                    // resets transitional height of previous project
                    previousElement.getElementsByClassName("text-filter-container")[0].style.height = "fit-content";

                },1000);

            }
        });
    }
}

projectsFunction();
