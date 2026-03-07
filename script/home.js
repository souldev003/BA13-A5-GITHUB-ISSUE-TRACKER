let allIssues = [];
let openIssues = [];
let closedIssues = [];

const allBtn = document.getElementById("all-tab-btn");
const openBtn = document.getElementById("open-tab-btn");
const closedBtn = document.getElementById("closed-tab-btn");

const allSection = document.getElementById("all-section");
const openSection = document.getElementById("open-section");
const closedSection = document.getElementById("closed-section");

const issueCount = document.getElementById("issue-count");

//Helper Functions:
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

const createLabelBtn = (arr) => {
  const res = arr.map(
    (el) =>
      `<button class="${
        el == "bug"
          ? "bg-[#FEECEC] text-[#EF4444] border-[#FECACA]"
          : el == "help wanted"
            ? "bg-[#FFF8DB] text-[#E2973B] border-[#FDE998]"
            : el == "enhancement"
              ? "bg-[#DEFCE8] text-[#00A96E] border-[#BBF7D0]"
              : el == "good first issue"
                ? "bg-[#E0F7FA] text-[#00838F] border-[#B2EBF2]"
                : "bg-[#E0F2FE] text-[#0369A1] border-[#BAE6FD]"
      } py-[6px] px-2 text-[10px] border-2 font-bold capitalize rounded-full">${
        el == "bug"
          ? `<i class="fa-solid fa-bug"></i>`
          : el == "enhancement"
            ? `<i class="fa-solid fa-wand-magic-sparkles"></i>`
            : el == "good first issue"
              ? `<i class="fa-brands fa-battle-net"></i>`
              : `<i class="fa-regular fa-life-ring"></i>`
      } ${el}</button>`,
  );
  return res.join("");
};

function loadData(data) {
  const parentDiv = document.getElementById("cards-parent");

  data.forEach((element) => {
    const card = document.createElement("div");
    const borderColor =
      element.status === "open" ? "border-t-[#00A96E]" : "border-t-[#A855F7]";

    const btnColor =
      element.priority === "high"
        ? "bg-[#FEECEC] text-[#EF4444]"
        : element.priority === "medium"
          ? "bg-[#FFF6D1] text-[#F7B43D]"
          : "bg-[#EEEFF2] text-[#9CA3AF]";

    card.classList.add(
      "bg-white",
      "border-t-4",
      borderColor,
      "rounded-lg",
      "shadow-lg",
      "cursor-pointer",
    );
    card.innerHTML = `
                    <div class="pt-4 px-4">
                        <div class="flex items-center justify-between">
                            <img src="${element.status == "open" ? "./assets/Open-Status.png" : "./assets/Closed-Status.png"}" alt="">
                            <button
                                class="${btnColor} py-[6px] px-6 text-xs font-bold uppercase rounded-full">${element.priority}
                            </button>
                        </div>

                        <div class="my-3">
                            <h1 class="text-[#1F2937] text-sm capitalize font-semibold line-clamp-1">${element.title}</h1>
                            <p class="text-[#64748B] text-xs mt-2 line-clamp-2">${element.description}</p>
                        </div>

                        <div class="flex items-center gap-2 mb-5">
                            ${createLabelBtn(element.labels)}
                        </div>
                    </div>

                    <div class="w-full h-[2px] bg-[#D7D7DA]"></div>

                    <div class="p-4 flex flex-col gap-4">
                        <p class="text-[#64748B] text-xs">
                            <span>#${element.id}</span> by 
                            ${element.author.replaceAll("_", " ").toUpperCase()}
                        </p>
                        <p class="text-[#64748B] text-xs">${element.createdAt.slice(0, 10)}</p>
                    </div>
  `;

    parentDiv.appendChild(card);
  });
}

function countGithubIssue(section) {
  let count = 0;

  if (section === allSection) {
    count = allIssues.length;
  } else if (section === openSection) {
    count = openIssues.length;
  } else if (section === closedSection) {
    count = closedIssues.length;
  }
  issueCount.innerText = count;
}

async function loadOpenIssue() {
  const result = await fetch("");
}

//Worker Functions
//Tab Selection Area:
allBtn.addEventListener("click", function () {
  setActiveTab(allBtn);
  showSection(allSection);
  countGithubIssue(allSection);
});
openBtn.addEventListener("click", function () {
  setActiveTab(openBtn);
  showSection(openSection);
  countGithubIssue(openSection);
});
closedBtn.addEventListener("click", function () {
  setActiveTab(closedBtn);
  showSection(closedSection);
  countGithubIssue(closedSection);
});

async function loadIssue() {
  const result = await fetch(
    "https://phi-lab-server.vercel.app/api/v1/lab/issues",
  );

  const data = await result.json();

  allIssues = data.data;
  openIssues = allIssues.filter((issue) => issue.status === "open");
  closedIssues = allIssues.filter((issue) => issue.status === "closed");

  loadData(allIssues);
  countGithubIssue(allSection);
}
loadIssue();
