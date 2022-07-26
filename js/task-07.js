let controlFontsize = document.getElementById("font-size-control");

let text = document.getElementById("text");

controlFontsize.oninput = control => {
  text.style.fontSize = controlFontsize.value + "px";
};