function myFunction() {
    var x = document.getElementById("myheader");
    if (x.className === "header") {
      x.className += " responsive";
    } else {
      x.className = "header";
    }
  };
const submitBtn = document.querySelector(".btn");
const firstCard = document.querySelector("#card1");
const secondCard = document.querySelector("#card2");
const ratingNumbers = document.querySelectorAll(".number");
const selectedNumber = document.querySelector(".selected");
let number = 0;

ratingNumbers.forEach(num => {
    num.addEventListener('click', function () {
        number = this.textContent;
        ratingNumbers.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
      });
});

submitBtn.addEventListener("click", rateUs);

function rateUs() {
    selectedNumber.textContent = number;
    firstCard.style.display = "none";
    secondCard.style.display = "block";
}