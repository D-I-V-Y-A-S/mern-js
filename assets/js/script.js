const incrementFunction = () => {
    console.log(`increment logged!`)
    document.getElementById("counter-number").textContent = parseInt(document.getElementById("counter-number").textContent) +1;
}

const decrementFunction = () => {
    console.log(`decrement logged!`);
    document.getElementById("counter-number").textContent = parseInt(document.getElementById("counter-number").textContent) - 1;
}