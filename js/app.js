// página usuario
const tabButtons = document.querySelectorAll(
  ".tabContainer .buttonContainer button"
);
const tabPanels = document.querySelectorAll(".tabContainer  .tabPanel");

function showPanel(panelIndex, colorCode) {
  tabButtons.forEach(function (node) {
    node.style.backgroundColor = "";
    node.style.color = "";
  });
  tabButtons[panelIndex].style.backgroundColor = colorCode;
  tabButtons[panelIndex].style.color = "white";
  tabPanels.forEach(function (node) {
    node.style.display = "none";
  });
  tabPanels[panelIndex].style.display = "block";
  tabPanels[panelIndex].style.backgroundColor = colorCode;
}
showPanel(0, "#a600f9");

// ------------------------------------------------------------------------------
// const btnIcon = document.getElementsBy;

// function likeBtn() {
//   btn.classList.remove("bi-plus-circle");
//   btn.classList.add("bi-plus-circle-fill");
// }

// let changeIcon = function (icon){
//   icon.classList.toggle("bi-plus-circle-fill");
// }

// console.log(changeIcon())

// -----------------------------------------------------------------------------------

