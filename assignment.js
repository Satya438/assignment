function toggleBox(box) {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((b) => b.classList.remove("selected"));

  box.classList.toggle("selected");

  const radioButton = box.querySelector(".checkbox");
  if (radioButton) {
    radioButton.checked = !radioButton.checked;
  }
}
