document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".c-press"); 
  var resultDisplay = document.getElementById("result");
  var lastButtonWasOperator = true;


  function handle_double_element_bug(value, element) {
    (lastButtonWasOperator) ? alert("You can't use double operator: " + value) : (resultDisplay.innerText += element);
      lastButtonWasOperator = true;
    }
    

  
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var value = button.getAttribute("data-value");
      console.log("Button " + value + " clicked");

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
          handle_double_element_bug(value, "/");
          break;
        case "×":
          handle_double_element_bug(value, "*");
          break;
        case "+":
        case "-":
          handle_double_element_bug(value, value);
          break;
        case "=":
          try {
            var expression = resultDisplay.innerText.replace(
              /[^-()\d/*+.]/g,
              ""
            );
            resultDisplay.innerText = eval(expression)
 
            
          } catch (error) {
            resultDisplay.innerText = "Error";
          }
          break;
        default:
          break;
      }
    });
  });
});



