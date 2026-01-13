document.getElementById("calculate-change").onclick = onClickCalculateButton;

function onClickCalculateButton() {
    let amountDue = Number(document.getElementById("amount-due").value);
    let amountReceived = Number(document.getElementById("amount-received").value);

    if (!validateInput(amountDue, amountReceived))
        return;

    let changeCents = Math.round((amountReceived - amountDue) * 100);

    let dollars = Math.floor(changeCents / 100);
    changeCents %= 100;
    let quarters = Math.floor(changeCents / 25);
    changeCents %= 25;
    let dimes = Math.floor(changeCents / 10);
    changeCents %= 10;
    let nickels = Math.floor(changeCents / 5);
    changeCents %= 5;
    let pennies = changeCents;

    document.getElementById("dollars-output").innerText = dollars;
    document.getElementById("quarters-output").innerText = quarters;
    document.getElementById("dimes-output").innerText = dimes;
    document.getElementById("nickels-output").innerText = nickels;
    document.getElementById("pennies-output").innerText = pennies;
}

function validateInput(amountDue, amountReceived) {
    if (isNaN(amountDue) || isNaN(amountReceived) || amountDue < 0 || amountReceived < 0 
        || !/^\d+(\.\d{1,2})?$/.test(amountDue) || !/^\d+(\.\d{1,2})?$/.test(amountReceived)) {
        alert("Please enter numbers in a valid currency format (i.e. 12, 12.5, 12.34)");
        clearOutputs();
        return false;
    }
    else if (amountReceived < amountDue) {
        alert("Amount received is less than amount due. Please enter a valid amount.");
        clearOutputs();
        return false;
    }
    return true;
}

function calculateDollars(totalChange) {
    const dollars = Math.floor(totalChange);
    totalChange -= dollars;
    return { dollars, totalChange };
}

function clearOutputs() {
    document.getElementById("dollars-output").innerText = "";
    document.getElementById("quarters-output").innerText = "";
    document.getElementById("dimes-output").innerText = "";
    document.getElementById("nickels-output").innerText = "";
    document.getElementById("pennies-output").innerText = "";
}