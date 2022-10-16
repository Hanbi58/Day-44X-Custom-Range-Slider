const rg = document.getElementById("rg");
const num = document.getElementById("num");
rg.addEventListener("input", () => {
  num.innerText = rg.value;
  num.style.transform = `translateX(${rg.value * 3 - rg.value * 0.12}px)`;
});
