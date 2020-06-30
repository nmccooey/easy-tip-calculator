
const calcTipButton = document.querySelector("#calculate-tip");
const tipDiv = document.querySelector("#tip");
const totalBillDiv = document.querySelector("#total-bill");

calcTipButton.addEventListener("click", function() {
    let billAmount = document.getElementById("bill").value;
    let tip = calculateTip(billAmount);
    let total = (Number(billAmount) + Number(tip));
    tip = "$" + tip;
    total = "$" + Number(total).toFixed(2);

    tipDiv.innerHTML = `Tip: ${addCommas(tip)}`;
    totalBillDiv.innerHTML = `Total Bill: ${addCommas(total)}`;
})

function calculateTip(billAmount) {
    let tip = (Number(billAmount) * .20).toFixed(2);
    return tip;
}

function addCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}