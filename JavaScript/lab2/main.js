const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

/* Declaring the alternative text for each image file */
const addImage = (src, alt) => {
    displayedImage.setAttribute('src', src);
    displayedImage.setAttribute('alt', alt);
}

/* Looping through images */
for(let i = 1; i <= 5; i++) {

    const newImage = document.createElement('img');
    newImage.setAttribute('src', "images/s" + i + ".jpg");
    newImage.setAttribute('alt', "s" + i);
    thumbBar.appendChild(newImage);

    newImage.addEventListener("click", function(e) {
        addImage(e.target.src, e.target.alt);
    })

}

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", function() {
    if(btn.getAttribute('class') === "dark") {
        btn.setAttribute('class', "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else {
        btn.setAttribute('class', "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
})