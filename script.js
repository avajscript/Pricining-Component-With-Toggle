window.onload = () => {
  // Variables
  const button = document.querySelector(".icon-container");
  const buttonIcon = document.querySelector(".circle-icon");
  const prices = document.querySelectorAll(".price");
  const plans = document.querySelectorAll(".plan");
  const monthlyPrices = ["19.99", "24.99", "39.99"];
  const annualPrices = ["199.99", "249.99", "399.99"];
  const learnMorebuttons = document.querySelectorAll(".learn-more");

  // Functions

  function clearSelected() {
    plans.forEach((plan) => {
      plan.classList.remove("selected-plan");
    });
  }

  function selectPlan(button) {
    clearSelected();
    const regex = /[0-9]/g;
    let planIndex = button.id.match(regex);
    planIndex = parseInt(planIndex - 1);
    plans[planIndex].classList.add("selected-plan");
  }

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
  learnMorebuttons.forEach((button) => {
    button.addEventListener("click", () => {
      selectPlan(button);
    });
  });
};
