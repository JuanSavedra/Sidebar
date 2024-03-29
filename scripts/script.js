const menu = document.querySelector("#Menu");
const sidebar = document.querySelector("aside");
const listElements = document.querySelector("#ListElements");
const elementsToInsert = document.querySelectorAll(".element");
let menuIsOpen = false;
let enableToPush = true;
let createdElements = [];

let menuElements = [
  {type: "img", content: null, src: "../img/logo.svg"},
  {type: "span", content: "Buscar", src: null},
  {type: "span", content: "Dashboard", src: null},
  {type: "span", content: "Pets", src: null},
  {type: "span", content: "Clientes", src: null},
  {type: "span", content: "Veterinários", src: null},
  {type: "span", content: "Ajustes", src: null}
]

function controlSidebar() {
  if (!menuIsOpen) {
    listElements.style.alignItems = "flex-start";
    menu.style.justifyContent = "space-between";
    sidebar.style.width = "12rem";
    insertElements();
  } else {
    listElements.style.alignItems = "center";
    menu.style.justifyContent = "center";
    sidebar.style.width = "6rem";
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
