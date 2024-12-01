
document.addEventListener("DOMContentLoaded", () => {
  chrome.runtime.sendMessage({ action: "getNotes" }, (response) => {
    const notesDiv = document.getElementById("notes");
    response.notes.forEach(note => {
      const noteElement = document.createElement("div");
      noteElement.className = "note";
      noteElement.textContent = note;
      notesDiv.appendChild(noteElement);
    });
  });

  document.getElementById("clearNotes").addEventListener("click", () => {
    chrome.runtime.sendMessage({ action: "clearNotes" }, (response) => {
      document.getElementById("notes").innerHTML = "";
      console.log(response.status);
    });
  });

  document.getElementById("saveToFile").addEventListener("click", () => {
    chrome.runtime.sendMessage({ action: "getNotes" }, (response) => {
      const notes = response.notes || [];
      const blob = new Blob([notes.join("\n")], { type: "text/plain" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "notes.txt";
      a.click();
    });
  });
});
