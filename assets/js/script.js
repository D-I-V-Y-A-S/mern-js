const incrementFunction = () => {
    console.log(`increment logged!`)
    let CurrentValue = document.getElementById("counter-number");
    let IntegerValue = Number(CurrentValue.textContent);
    CurrentValue.textContent = IntegerValue + 1;
    console.log(CurrentValue.textContent);
}

const decrementFunction = () => {
    console.log(`decrement logged!`);
    let CurrentValue = document.getElementById("counter-number");
    let IntegerValue = Number(CurrentValue.textContent);
    CurrentValue.textContent = IntegerValue - 1;
    console.log(CurrentValue.textContent);
}