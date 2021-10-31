// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById("cerf_pic1");
var img2 = document.getElementById("cerf_pic2");
var img3 = document.getElementById("cerf_pic3");
var img4 = document.getElementById("cerf_pic4");
var modalImg = document.getElementById("img01");

img1.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
}

img2.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
}

img3.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
}

img4.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

document.getElementsByClassName("toggler-navbar")[0].addEventListener("click", toogleClass);
document.getElementsByClassName("sidebar")[0].addEventListener("click", toogleClass);

function toogleClass() {
    document.getElementsByClassName("hamburger-menu")[0].classList.toggle('open')
    document.getElementsByClassName("sidebar")[0].classList.toggle('open')
}