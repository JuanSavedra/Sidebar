const sidebar = document.querySelector("aside");
sidebar.style.width = "6rem";

function openSidebar() {
  if (sidebar.style.width === "6rem") {
    sidebar.style.alignItems = "flex-start";
    sidebar.style.width = "12rem";
  } else {
    sidebar.style.alignItems = "center";
    sidebar.style.width = "6rem";
  }
}
