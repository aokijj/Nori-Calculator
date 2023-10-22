function calculate() {
    const input = document.getElementById("input").value;

    try {
        const result = eval(input);
        document.getElementById("result").textContent = `Result: ${result}`;
    } catch (error) {
        document.getElementById("result").textContent = "Invalid Input";
    }
}
