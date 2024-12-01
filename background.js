
let notes = [];

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "saveSelection",
    title: "Save Selection as Note",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "saveSelection" && info.selectionText) {
    notes.push(info.selectionText);
    chrome.storage.local.set({ notes: notes }, () => {
      console.log("Note saved:", info.selectionText);
    });
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getNotes") {
    chrome.storage.local.get("notes", (data) => {
      notes = data.notes || [];
      sendResponse({ notes: notes });
    });
  } else if (request.action === "clearNotes") {
    notes = []; // Notlar dizisini sıfırla
    chrome.storage.local.set({ notes: notes }, () => {
      sendResponse({ status: "Notes cleared" });
    });
  }
  return true; // Keep the messaging channel open for sendResponse
});
