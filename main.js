// Event Listener
document.getElementById('calculate').addEventListener('click', calculate);

// Function
function calculate() {
    // Inputs
    let a = +document.getElementById('sidea').value;
    let b = +document.getElementById('sideb').value;
    let c = +document.getElementById('sidec').value;

    // Process
    let answer = heronsFormula(a, b, c)

    // Output
    document.getElementById('output').innerHTML = answer
}

// Process
function heronsFormula(a, b, c) {
    let s = (a + b + c) / 2
    let output = Math.sqrt(s * (s - a) * (s - b) * (s - c))
    console.log(s)
    return output

}