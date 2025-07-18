function tradeColor(color) {
  document.body.style.backgroundImage = none;
  document.body.style.backgroundColor = color;
}

function aleatoryColor() {
  document.body.style.backgroundImage = none;
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

function applyColorPerso() {
  const inputColor = document.querySelector(".input_class").value;

  tradeColor(inputColor);
}

function selectImage(image) {
  const reader = new FileReader();

  reader.onload = function (event) {
    const urlImage = event.target.result;
    document.body.style.backgroundImage = `url('${urlImage})`;
  };

  reader.readAsDataURL(image);
}
