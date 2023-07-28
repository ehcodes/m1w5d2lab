const btn = document.querySelector("button");
const textInput = document.querySelector("input");
const list = document.querySelector(".list");

list.addEventListener("click", darkMode);

function darkMode(e) {
    e.target.style.backgroundColor = "black";
    e.target.style.color = "white";
}

btn.addEventListener("click", function (evt) {
  const li = document.createElement("li");
  const userText = textInput.value;
  li.textContent = userText;
  textInput.value = "";

  document.querySelector("ul").appendChild(li);
});