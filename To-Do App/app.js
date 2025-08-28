const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const addTask = () => {
  const task = inputBox.value.trim();
  if (!task) {
    alert("You must write something...");
    return;
  }

  const li = document.createElement("li");
  li.textContent = task;

  const span = document.createElement("span");
  span.innerHTML = "\u00d7"; // Unicode for × (delete icon)
  li.appendChild(span);

  listContainer.appendChild(li);
  inputBox.value = '';
  saveData();
};

inputBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

listContainer.addEventListener("click", e => {
  const { target } = e;

  if (target.tagName === "LI") {
    target.classList.toggle("checked");
  } else if (target.tagName === "SPAN") {
    target.parentElement.remove();
  }

  saveData();
});

const saveData = () => {
  localStorage.setItem("data", listContainer.innerHTML);
};

const showTask = () => {
  listContainer.innerHTML = localStorage.getItem("data") || "";
};

showTask();
