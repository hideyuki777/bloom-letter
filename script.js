const params = new URLSearchParams(window.location.search);
const flower = (params.get("flower") || "A").toUpperCase();

const allowed = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N"];

const intro = document.getElementById("intro");
const result = document.getElementById("result");
const openBtn = document.getElementById("openBtn");
const flowerImage = document.getElementById("flowerImage");

if (!allowed.includes(flower)) {
  document.body.innerHTML = '<main class="page"><p class="error">URLの末尾を確認してください。<br>例：?flower=A</p></main>';
} else {
  flowerImage.src = `images/${flower}.jpg`;

  openBtn.addEventListener("click", () => {
    intro.style.display = "none";
    result.classList.remove("hidden");
    result.classList.add("show");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
