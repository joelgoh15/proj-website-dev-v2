
window.addEventListener("load", start, false);

function start() {
   
    var modal = document.getElementById("id-div-modal-about");
    var btn = document.getElementById("id-div-about");
    var span = document.getElementById("id-span-close-button-about");

    var modal2 = document.getElementById("id-div-modal-products");
    var btn2 = document.getElementById("id-div-products");
    var span2 = document.getElementById("id-span-close-button-products");

    var modal3 = document.getElementById("id-div-modal-services");
    var btn3 = document.getElementById("id-div-services");
    var span3 = document.getElementById("id-span-close-button-services");

    var modal4 = document.getElementById("id-div-modal-contact-us");
    var btn4 = document.getElementById("id-div-contact-us");
    var span4 = document.getElementById("id-span-close-button-contact-us");

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }

        if (event.target == modal2) {
            modal2.style.display = "none";
        }

        if (event.target == modal3) {
            modal3.style.display = "none";
        }

        if (event.target == modal4) {
            modal4.style.display = "none";
        }
    }

    btn.onclick = function () {
        modal.style.display = "block";
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

    btn2.onclick = function () {
        modal2.style.display = "block";
    }

    span2.onclick = function () {
        modal2.style.display = "none";
    }

    btn3.onclick = function () {
        modal3.style.display = "block";
    }

    span3.onclick = function () {
        modal3.style.display = "none";
    }

    btn4.onclick = function () {
        modal4.style.display = "block";
    }

    span4.onclick = function () {
        modal4.style.display = "none";
    }

}



