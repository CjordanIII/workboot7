const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const updateData = Object.fromEntries(formData.entries());
  console.log(updateData);
  localStorage.setItem("information", JSON.stringify(updateData));
  console.log(JSON.stringify(updateData));
  location.href = "./information.html";
});
