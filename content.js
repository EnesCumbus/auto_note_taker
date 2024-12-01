
document.addEventListener("mouseup", () => {
  const selection = window.getSelection().toString();
  if (selection.length > 0) {
    chrome.runtime.sendMessage({ action: "selection", text: selection });
  }
});
