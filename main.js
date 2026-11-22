// Mobile navigation
const burger = document.querySelector(".burger");
const links = document.getElementById("links");
burger.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});
links.addEventListener("click", e => {
  if (e.target.tagName === "A") { links.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); }
});

// Menu tabs
const tabs = document.querySelectorAll("[role=tab]");
tabs.forEach(tab => tab.addEventListener("click", () => {
  tabs.forEach(t => {
    const on = t === tab;
    t.setAttribute("aria-selected", on);
    document.getElementById(t.dataset.tab).hidden = !on;
  });
}));

// Reservation form (front-end only: connect it to your backend or a form service)
const form = document.getElementById("form");
const msg = document.getElementById("msg");
form.date.min = new Date().toISOString().split("T")[0];
form.addEventListener("submit", e => {
  e.preventDefault();
  let ok = true;
  ["name", "phone", "date"].forEach(f => {
    const bad = !form[f].value.trim();
    form[f].classList.toggle("bad", bad);
    if (bad) ok = false;
  });
  if (!ok) { msg.textContent = "Please fill in your name, phone number and date."; return; }
  msg.textContent = `Thank you, ${form.name.value.trim()}. We’ve received your request for ${form.guests.value} on ${form.date.value} and will call you to confirm.`;
  form.reset();
});
