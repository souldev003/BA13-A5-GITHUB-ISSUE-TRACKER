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

async function loadIssue() {
  const result = await fetch(
    "https://phi-lab-server.vercel.app/api/v1/lab/issues",
  );

  const data = await result.json();
  loadData(data.data);
}
loadIssue();

function loadData(data) {
  const parentDiv = document.getElementById("cards-parent");

  data.forEach((element) => {
    const card = document.createElement("div");
    const borderColor =
      element.status === "open" ? "border-t-[#00A96E]" : "border-t-[#A855F7]";

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
                                class="bg-[#FEECEC] py-[6px] px-6 text-xs text-[#EF4444] font-bold uppercase rounded-full">${element.priority}
                            </button>
                        </div>

                        <div class="my-3">
                            <h1 class="text-[#1F2937] text-sm capitalize font-semibold line-clamp-1">${element.title}</h1>
                            <p class="text-[#64748B] text-xs mt-2 line-clamp-2">${element.description}</p>
                        </div>

                        <div class="flex items-center gap-2 mb-5">
                            <button
                                class="bg-[#FEECEC] py-[6px] px-3 text-xs text-[#EF4444] border-2 border-[#FECACA] font-bold capitalize rounded-full">
                                <i class="fa-solid fa-bug"></i> Bug
                            </button>

                            <button
                                class="bg-[#FFF8DB] py-[6px] px-3 text-xs text-[#D97706] border-2 border-[#FDE68A] font-bold capitalize rounded-full">
                                <i class="fa-regular fa-life-ring"></i> help wanted
                            </button>
                        </div>
                    </div>

                    <div class="w-full h-[2px] bg-[#D7D7DA]"></div>

                    <div class="p-4 flex flex-col gap-4">
                        <p class="text-[#64748B] text-xs">
                            <span>#1</span>
                            by john_doe
                        </p>
                        <p class="text-[#64748B] text-xs">1/15/2024</p>
                    </div>
  `;

    parentDiv.appendChild(card);
  });
}
