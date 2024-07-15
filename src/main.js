import './demo_block.scss';
import './modal.scss';
import '../style.css'



const modalTrigger = document.getElementsByClassName("trigger")[0];

const modalBackground = document.getElementsByClassName("modalBackground")[0];
const modalClose = document.getElementsByClassName("modalClose")[0];



modalTrigger.addEventListener("click", function () {
 
    modalBackground.style.display = "block";

});
modalClose.addEventListener("click", function () {
    modalBackground.style.display = "none";
});


modalBackground.addEventListener("click", function (event) {
    if (event.target === modalBackground) {
        modalBackground.style.display = "none";
    }
});


