const allBtn = document.getElementById("all-tab-btn");
const openBtn = document.getElementById("open-tab-btn");
const closedBtn = document.getElementById("closed-tab-btn");

const allSection = document.getElementById("all-section");
const openSection = document.getElementById("open-section");
const closedSection = document.getElementById("closed-section");

const issueCount = document.getElementById("issue-count");

//Helper Functions
function setActiveTab(clickedBtn) {
  allBtn.classList.remove("btn-primary", "btn-active");
  openBtn.classList.remove("btn-primary", "btn-active");
  closedBtn.classList.remove("btn-primary", "btn-active");

  clickedBtn.classList.add("btn-primary", "btn-active");
}

function showSection(clickedSection) {
  allSection.classList.add("hidden");
  openSection.classList.add("hidden");
  closedSection.classList.add("hidden");

  clickedSection.classList.remove("hidden");
}

//Worker Functions
//Tab Selection Area:
allBtn.addEventListener("click", function () {
  setActiveTab(allBtn);
  showSection(allSection);
});
openBtn.addEventListener("click", function () {
  setActiveTab(openBtn);
  showSection(openSection);
});
closedBtn.addEventListener("click", function () {
  setActiveTab(closedBtn);
  showSection(closedSection);
});
