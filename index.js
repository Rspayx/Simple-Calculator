document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".c-press");
  var resultDisplay = document.getElementById("result");
  var lastButtonWasOperator = true;

  //Function for Controlling Repeated operator Bugs
  function Handling_double_element_bug(value, element) {
    lastButtonWasOperator
      ? alert("You can't use double operator: " + value)
      : (resultDisplay.innerText += element);
    lastButtonWasOperator = true;
  }

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var value = button.getAttribute("data-value");
      console.log("Button " + value + " clicked");

        // Controlling Button Functionality
      switch (value) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
        case "000":
        case ".":
          resultDisplay.innerText += value;
          lastButtonWasOperator = false;
          break;
        case "÷":
          Handling_double_element_bug(value, "/");
          break;
        case "×":
          Handling_double_element_bug(value, "*");
          break;
        case "+":
        case "-":
          Handling_double_element_bug(value, value);
          break;
        case "del":
          resultDisplay.innerText = "";
          break;
        case "=":
          try {
            if (resultDisplay.innerText == "") {
              alert("please enter a number");
            } else {
              var expression = resultDisplay.innerText.replace(/[^-()\d/*+.]/g);
              resultDisplay.innerText = eval(expression);
            }
          } catch (error) {
            alert("ERROR");
          }
          break;
        default:
          break;
      }
    });
  });
});
