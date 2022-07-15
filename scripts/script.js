const sidebar = document.querySelector("aside");
const listElements = document.querySelector("#ListElements");
sidebar.style.width = "6rem";

function openSidebar() {
  if (sidebar.style.width === "6rem") {
    listElements.style.alignItems = "flex-start";
    sidebar.style.width = "12rem";
  } else {
    listElements.style.alignItems = "center";
    sidebar.style.width = "6rem";
  }
}
