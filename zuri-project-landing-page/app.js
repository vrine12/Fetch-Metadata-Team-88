const Burger = document.getElementById("burger");
const Menu = document.getElementById("menu");
const header = document.getElementById("hero");
const trust = document.getElementById("trust");
const Line_1 = document.getElementById("line_1");
const Line_2 = document.getElementById("line_2");
const Line_3 = document.getElementById("line_3");
Burger.addEventListener("click", () => {
  Menu.classList.toggle("button_div_active");
  Line_1.classList.toggle("line_1");
  Line_2.classList.toggle("line_2");
  Line_3.classList.toggle("line_3");
});

header.addEventListener("click", () => {
  Menu.classList.remove("button_div_active");
  console.log("hi");
});

trust.addEventListener("click", () => {
  Menu.classList.remove("button_div_active");
  console.log("hi");
});
