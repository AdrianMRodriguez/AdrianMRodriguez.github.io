
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById("clock").textContent = timeString;
  }
  setInterval(updateClock, 1000);
  updateClock();
  const notesArea = document.getElementById("notes");
  const saveBtn = document.getElementById("save-btn");
  window.onload = () => {
    const saved = localStorage.getItem("userNotes");
    if (saved) {
      notesArea.value = saved;
    }
  };

  saveBtn.addEventListener("click", () => {
    localStorage.setItem("userNotes", notesArea.value);
    alert("Notes saved!");
  });
  