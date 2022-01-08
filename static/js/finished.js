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