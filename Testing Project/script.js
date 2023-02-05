let names = ['João', 'Maria', 'José', 'Ana', 'Pedro'];
let correctName = names[Math.floor(Math.random() * names.length)];

document.getElementById("submitButton").addEventListener("click", function() {
  let inputName = document.getElementById("inputName").value;
  if (inputName.toLowerCase() === correctName.toLowerCase()) {
    document.getElementById("result").innerHTML = "Você acertou! O nome correto era " + correctName + ".";
  } else {
    document.getElementById("result").innerHTML = "Você errou! Tente novamente.";
  }
});