//#region LEGAL SWITCH
function showLegal(section) {
  document.getElementById("main-content").classList.add("d-none");

  document.getElementById("impressum-content").classList.add("d-none");
  document.getElementById("datenschutz-content").classList.add("d-none");

  if (section === "impressum") {
    document.getElementById("impressum-content").classList.remove("d-none");
  } else if (section === "datenschutz") {
    document.getElementById("datenschutz-content").classList.remove("d-none");
  }

  window.scrollTo(0, 0);
}

function showHome() {
  document.getElementById("impressum-content").classList.add("d-none");
  document.getElementById("datenschutz-content").classList.add("d-none");

  document.getElementById("main-content").classList.remove("d-none");

  window.scrollTo(0, 0);
}
//#endregion
