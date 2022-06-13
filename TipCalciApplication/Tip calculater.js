let billAmountElement = document.getElementById("billAmount")
let percentageTipElement = document.getElementById("percentageTip")
let tipAmountElement = document.getElementById("tipAmount")
let totalAmountElement = document.getElementById("totalAmount")
let errorMessageElement = document.getElementById("errorMessage")

function calculate() {
    if (billAmountElement.value === "") {
        errorMessageElement.textContent = "Please Enter a valid input";
    } else if (percentageTipElement.value === "") {
        errorMessageElement.textContent = "Please Enter a valid input";
    } else {
        errorMessageElement.textContent = "";
        let billAmount = parseInt(billAmountElement.value);
        let percentageTip = parseInt(percentageTipElement.value);

        let calculatedTip = (percentageTip / 100) * billAmount;
        let totalAmount = billAmount + calculatedTip;

        tipAmountElement.value = calculatedTip;
        totalAmountElement.value = totalAmount;
    }

}