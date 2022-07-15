const sidebar = document.querySelector("aside");
const listElements = document.querySelector("#ListElements");
const _logo = document.createElement("img");
const _search = document.createElement("span");
const _grid = document.createElement("span");
const _pet = document.createElement("span");
const _client = document.createElement("span");
const _vet = document.createElement("span");
const _settings = document.createElement("span");
const menu = document.querySelector("#Menu");
const search = document.querySelector("#Search");
const grid = document.querySelector("#Grid");
const pet = document.querySelector("#Pet");
const client = document.querySelector("#User");
const vet = document.querySelector("#Vet");
const settings = document.querySelector("#Settings");

sidebar.style.width = "6rem";
let isCreated = false;

function openSidebar() {
  if (sidebar.style.width === "6rem") {
    listElements.style.alignItems = "flex-start";
    menu.style.justifyContent = "space-between";
    sidebar.style.width = "12rem";
  } else {
    listElements.style.alignItems = "center";
    menu.style.justifyContent = "center";
    sidebar.style.width = "6rem";
  }

  if (!isCreated) {
    insertElements();
  } else {
    removeElements();
  }

  isCreated = !isCreated;
}

function insertElements() {
  _logo.src = "../img/logo.svg";
  _search.textContent = "Buscar";
  _grid.textContent = "Dashboard";
  _pet.textContent = "Pets";
  _client.textContent = "Clientes";
  _vet.textContent = "Veterinários";
  _settings.textContent = "Ajustes";

  menu.appendChild(_logo);
  search.appendChild(_search);
  grid.appendChild(_grid);
  pet.appendChild(_pet);
  client.appendChild(_client);
  vet.appendChild(_vet);
  settings.appendChild(_settings);
}

function removeElements() {
  _logo.parentNode.removeChild(_logo);
  _search.parentNode.removeChild(_search);
  _grid.parentNode.removeChild(_grid);
  _pet.parentNode.removeChild(_pet);
  _client.parentNode.removeChild(_client);
  _vet.parentNode.removeChild(_vet);
  _settings.parentNode.removeChild(_settings);
}
