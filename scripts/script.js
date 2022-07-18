const sidebar = document.querySelector("aside");
const listElements = document.querySelector("#ListElements");
const elementsToInsert = document.querySelectorAll(".element");
let createdElements = [];
let menuIsOpen = false;
let enableToPush = true;

let menuElements = [
  {type: "img", content: "", src: "../img/logo.svg"},
  {type: "span", content: "Buscar", src: ""},
  {type: "span", content: "Dashboard", src: ""},
  {type: "span", content: "Pets", src: ""},
  {type: "span", content: "Clientes", src: ""},
  {type: "span", content: "Veterinários", src: ""},
  {type: "span", content: "Ajustes", src: ""}
]

function openSidebar() {
  if (!menuIsOpen) {
    listElements.style.alignItems = "flex-start";
    elementsToInsert[0].style.justifyContent = "space-between";
    sidebar.style.width = "12rem";
  } else {
    listElements.style.alignItems = "center";
    elementsToInsert[0].style.justifyContent = "center";
    sidebar.style.width = "6rem";
  }

  if (!menuIsOpen) {
    insertElements();
  } else {
    removeElements();
  }

  menuIsOpen = !menuIsOpen;
}

function createSidebarElements(type, content, src) {
  let element = document.createElement(type);
  element.textContent = content;

  if (type === 'img') {
    element.src = src; 
  }

  return element;
}

function insertElements() {
  for (let i = 0; i < elementsToInsert.length; i++) {
    if (enableToPush) {
      createdElements.push(elementsToInsert[i]
        .appendChild(
          createSidebarElements(
            menuElements[i].type, menuElements[i].content, menuElements[i].src
          )
        )
      );
    } else {
      createdElements[i] = elementsToInsert[i]
      .appendChild(
        createSidebarElements(
          menuElements[i].type, menuElements[i].content, menuElements[i].src
        )
      )
    }
  }

  enableToPush = false;
}

function removeElements() {
  for (let i = 0; i < elementsToInsert.length; i++) {
    createdElements[i].parentNode.removeChild(createdElements[i]);
  }
}
