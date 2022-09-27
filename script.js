let initialPrice = document.querySelector("#initial-price");
let stockQuanity = document.querySelector("#quantity-stocks");
let finalPrice = document.querySelector("#final-price");
let submitButton = document.querySelector("#submit-btn");
let output = document.querySelector("#output");

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    let loss = (initial - current) * quantity;
    let lossPercentage = (loss / (initial * quantity)) * 100;

    showOutput(
      `The loss is ${loss} and loss percentage is ${lossPercentage} % 🙁`
    );
  } else if (initial < current) {
    let profit = (current - initial) * quantity;
    let profitPercentage = (profit / (initial * quantity)) * 100;
    showOutput(
      `The profit is ${profit} and profit percentage is ${profitPercentage} % 🤑`
    );
  } else {
    showOutput(`No profit,Hey no lose also!😇`);
  }
}

let clickEventHandler = function () {
  let initial = Number(initialPrice.value);

  let quanityOfStocks = Number(stockQuanity.value);

  let final = Number(finalPrice.value);

  if (initial && quanityOfStocks && final) {
    if (initial < 0 || final < 0 || quanityOfStocks < 0) {
      showOutput(`Input should be greater than zero`);
    } else {
      calculateProfitAndLoss(initial, quanityOfStocks, final);
    }
  } else {
    showOutput(`Hey!!enter all the required fields.😡`);
  }
};

function showOutput(message) {
  output.innerText = message;
}

submitButton.addEventListener("click", clickEventHandler);
// calculateProfitAndLoss(20, 2, 20);
