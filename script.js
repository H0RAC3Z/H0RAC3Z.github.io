function loadPage(pageID) {
    document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
    document.getElementById(pageID).classList("active");
}