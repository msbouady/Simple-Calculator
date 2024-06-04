function clearInput() {
  document.calc.txt.value = '';
}

function appendValue(value) {
  document.calc.txt.value += value;
}

function calculate() {
  var input = document.calc.txt.value;
  try {
    var result = eval(input);
    document.calc.txt.value = result;
  } catch (error) {
    document.calc.txt.value = 'Erreur syntaxe';
  }
}