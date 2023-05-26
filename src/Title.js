// CHANGE PAGE TITLE
// Detect when the user changes tabs
document.addEventListener("visibilitychange", function() {
  if (document.hidden) {
    // The user is in another tab
    document.title = "I miss u 🥲"; // Change the tab title
  } else {
    // The user returned to the current tab
    document.title = "Celudirosa"; // Restore the original title
  }
});
