window.onload = () => {
  // Variables
  const button = document.querySelector(".icon-container");
  const buttonIcon = document.querySelector(".circle-icon");
  const prices = document.querySelectorAll(".price");
  const monthlyPrices = ["19.99", "24.99", "39.99"];
  const annualPrices = ["199.99", "249.99", "399.99"];

  // Functions

  function setAnnual() {
    prices.forEach((planPrice, index) => {
      planPrice.innerText = annualPrices[index];
    });
  }

  function setMonthly() {
    prices.forEach((planPrice, index) => {
      planPrice.innerText = monthlyPrices[index];
    });
  }

  function annualToggle() {
    if (buttonIcon.style.float == "right") {
      buttonIcon.style.float = "left";
      setAnnual();
    } else {
      buttonIcon.style.float = "right";
      setMonthly();
    }
  }

  // Event listeners
  button.addEventListener("click", annualToggle);
};
