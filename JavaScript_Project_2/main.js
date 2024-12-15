// Popup fonksiyonu
function showPopup(message, type) {
  const POPUP = document.createElement("div");
  POPUP.className = `popup ${type}`;
  POPUP.textContent = message;

  document.body.appendChild(POPUP);

  setTimeout(() => {
    POPUP.classList.add("show");
  }, 10);

  setTimeout(() => {
    POPUP.classList.add("hide");
    setTimeout(() => {
      POPUP.remove();
    }, 1000);
  }, 2000);
}

// Sayfa yüklendiğinde localStorage'dan verileri al ve listeyi oluştur
window.onload = function () {
  loadTasksFromLocalStorage();
};

// Todo listeyi localStorage'a kaydet
function saveTasksToLocalStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// LocalStorage'dan verileri al ve listeyi oluştur
function loadTasksFromLocalStorage() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const UL = document.querySelector("#todo-ul");
  UL.innerHTML = ""; // Eski listeyi temizle

  tasks.forEach((task) => {
    const LI = document.createElement("li");
    const SPAN = document.createElement("span");
    SPAN.textContent = task;

    const DELETE_BTN = document.createElement("button");
    const ICON = document.createElement("i");
    ICON.classList.add("fas", "fa-times"); // İkon ekleme
    DELETE_BTN.appendChild(ICON);

    DELETE_BTN.addEventListener("click", function () {
      const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      const updatedTasks = tasks.filter((t) => t !== task);
      saveTasksToLocalStorage(updatedTasks);
      UL.removeChild(LI);
      showPopup("Liste Öğesi Silindi!", "error");
    });

    LI.appendChild(SPAN);
    LI.appendChild(DELETE_BTN);
    UL.appendChild(LI);
  });
}

// Listeye öğe ekleme fonksiyonu
function addFunc() {
  const INPUT = document.querySelector("#todo-input");
  const UL = document.querySelector("#todo-ul");
  const taskText = INPUT.value.trim();

  if (taskText === "") {
    alert("Lütfen bir görev girin!");
    return;
  }

  // Yeni görev oluştur
  const LI = document.createElement("li");
  const SPAN = document.createElement("span");
  SPAN.textContent = taskText;

  const DELETE_BTN = document.createElement("button");
  const ICON = document.createElement("i");
  ICON.classList.add("fas", "fa-times"); // İkon ekleme
  DELETE_BTN.appendChild(ICON);

  DELETE_BTN.addEventListener("click", function () {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = tasks.filter((t) => t !== taskText);
    saveTasksToLocalStorage(updatedTasks);
    UL.removeChild(LI);
    showPopup("Liste Öğesi Silindi!", "error");
  });

  LI.appendChild(SPAN);
  LI.appendChild(DELETE_BTN);
  UL.appendChild(LI);

  // LocalStorage'a kaydet
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(taskText);
  saveTasksToLocalStorage(tasks);

  // Giriş kutusunu temizle
  INPUT.value = "";

  showPopup("Liste Öğesi Eklendi!", "success");

  LI.addEventListener("click", function() {
    LI.style.opacity = ".3";
    LI.style.textDecoration = "line-through";
})
}

