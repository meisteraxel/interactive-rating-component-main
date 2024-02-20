var previousButton = null;

function changeColor(button) {
  if (previousButton !== null) {
    previousButton.classList.remove("selected");
  }
  button.classList.add("selected");
  previousButton = button;
}

function submitRating() {
  let selectedBtn = document.getElementsByClassName("selected");
  let ratingText = document.getElementById("rating");
  let ratingCard = document.getElementById("rating-card");
  let thankyouCard = document.getElementById("thankyou-card");

  ratingText.innerHTML = `You selected ${selectedBtn[0].innerHTML} out of 5`;
  ratingCard.style.display = "none";
  thankyouCard.style.display = "flex";
}
