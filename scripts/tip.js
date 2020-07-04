const billInput = document.getElementById("bill");
const tipDiv = document.querySelector("#tip");
const totalBillDiv = document.querySelector("#total-bill");
const tipSlider = document.querySelector("#tip-slider");
const tipPercentage = document.querySelector("#tip-percentage");
const calcTipButton = document.querySelector("#calculate-tip");
const clickSound = document.querySelector("#click-sound");
let tipPercent = 20;

billInput.addEventListener("change", function() {
    let v = parseFloat(this.value);
    if (isNaN(v)) {
        this.value = '';
    } else {
        this.value = v.toFixed(2);
    }
});

tipSlider.addEventListener("mousemove", function(event) {
    tipPercentage.innerHTML = `Tip Percentage: ${event.target.value}%`;
    tipPercent = event.target.value;
});

calcTipButton.addEventListener("click", function() {
    let billAmount = billInput.value;
    let tip = calculateTip(billAmount);
    let total = (Number(billAmount) + Number(tip));
    tip = "$" + tip;
    total = "$" + Number(total).toFixed(2);

    // Check if tip percentage is below 15 percent. Seek confirmaton.
    if (tipPercent < 15) {

        if (confirm("Are you sure you want to tip less than 15%?")) {
            clickSound.src = "/sounds/click.mp3";
            clickSound.play();
        
            tipDiv.innerHTML = `Tip: ${addCommas(tip)}`;
            totalBillDiv.innerHTML = `Total Bill: ${addCommas(total)}`;
            
        } else {
            return;
        }

    } else {
        clickSound.src = "/sounds/click.mp3";
        clickSound.play();
    
        tipDiv.innerHTML = `Tip: ${addCommas(tip)}`;
        totalBillDiv.innerHTML = `Total Bill: ${addCommas(total)}`;
    }
});

function calculateTip(billAmount) {
    let tip = (Number(billAmount) * Number(tipPercent / 100)).toFixed(2);
    return tip;
}

function addCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}