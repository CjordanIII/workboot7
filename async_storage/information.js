const div = document.querySelector("div");
let localData = localStorage.getItem("information");
const { name, roll } = JSON.parse(localData);
if (roll === "Instructor") {
  div.innerHTML = `<p> Welcome ${roll}, ${name} 
</P>`;
} else {
  div.innerHTML = `<p>Welcome ${roll},${name}`;
}
