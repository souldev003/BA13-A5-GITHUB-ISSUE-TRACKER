const allBtn = document.getElementById("all-tab-btn");
const openBtn = document.getElementById("open-tab-btn");
const closedBtn = document.getElementById("closed-tab-btn");

function setActiveTab(clickedBtn) {
  allBtn.classList.remove("btn-primary", "btn-active");
  openBtn.classList.remove("btn-primary", "btn-active");
  closedBtn.classList.remove("btn-primary", "btn-active");

  clickedBtn.classList.add("btn-primary", "btn-active");
}

allBtn.addEventListener("click", function () {
  setActiveTab(allBtn);
});
openBtn.addEventListener("click", function () {
  setActiveTab(openBtn);
});
closedBtn.addEventListener("click", function () {
  setActiveTab(closedBtn);
});
