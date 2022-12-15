/**********************/
/* Keyboard shortcuts */
/**********************/

document.addEventListener("keyup", function (event) {
  event = event || window.event;

  // Enter to search
  if (event.code == "Enter") search();

  // Escape to close details / sidebar
  if (event.code == "Escape" && document.getElementById("modal").checkVisibility())
    closeModal();
  else if (event.code == "Escape" && document.getElementById("sidebar").checkVisibility())
    closeSidebar();
  else if (event.code == "Escape" && document.activeElement === document.getElementById("searchBar"))
    document.getElementById("searchInput").blur();

  // Tap to focus searchbar
  if (event.code == "Tab") document.getElementById("searchInput").focus();
});


/*************/
/* Functions */
/*************/

function search() {
  console.log(document.getElementById("searchInput").value)
}


/******/
/* UI */
/******/

function openDarker() {
  let darker = document.getElementById('darker');
  darker.classList.remove('hidden');
  darker.classList.add('block');
}

function closeDarker() {
  let darker = document.getElementById('darker');
  darker.classList.remove('block');
  darker.classList.add('hidden');
}

function openSidebar() {
  openDarker();

  let sidebar = document.getElementById('sidebar');
  sidebar.classList.remove('hidden');
  sidebar.classList.add('block');
}

function closeSidebar() {
  closeDarker();

  let sidebar = document.getElementById('sidebar');
  sidebar.classList.remove('block');
  sidebar.classList.add('hidden');
}

function openModal(key) {
  closeSidebar();
  openDarker();

  let modal = document.getElementById('modal');
  modal.classList.remove('hidden');
  modal.classList.add('block');

  document.getElementById('modal-title').innerText = content[key].title;
  document.getElementById('modal-icon').innerHTML = content[key].icon;
  document.getElementById('modal-content').innerHTML = content[key].text;
}

function closeModal() {
  closeDarker();

  let modal = document.getElementById('modal');
  modal.classList.remove('block');
  modal.classList.add('hidden');
}


/***************/
/* Map loading */
/***************/

window.onload = function () {
  // Zoom on geolocation
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (pos) {
      map.setView([pos.coords.latitude, pos.coords.longitude], 13);
    }, defaultPosition);
  } else {
    defaultPosition();
  }

  function defaultPosition() {
    map.setView([43.635440402557585, 3.8295010484601084], 13);
  }

  // Load fuel stations
  fuelStations.forEach(fuelStation => {
    createFuelStation(fuelStation.name, fuelStation.position, fuelStation.data);
  })
};