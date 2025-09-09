const display = document.getElementById('display');
    const calc = document.getElementById('calc');
    let currentInput = "";

    function appendValue(value) {
      if (currentInput === "0" && value !== ".") {
        currentInput = value;
      } else {
        currentInput += value;
      }
      display.innerText = currentInput;
    }

    function calculate() {
      try {
        currentInput = eval(currentInput).toString();
        display.innerText = currentInput;
      } catch {
        display.innerText = "Error";
        currentInput = "";
      }
    }

    function toggleTheme() {
      calc.classList.toggle("dark");
    }