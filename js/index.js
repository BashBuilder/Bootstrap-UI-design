const sidebar = document.getElementById("sidebar");
const openSidebar = document.getElementById("open-sidebar");
const closeSidebar = document.getElementById("close-sidebar");

openSidebar.addEventListener("click", () => {
  sidebar.classList.add("sidebar-open");
  openSidebar.classList.remove("animation-rotate");
  closeSidebar.classList.add("animation-rotate");
});
closeSidebar.addEventListener("click", () => {
  sidebar.classList.remove("sidebar-open");
  openSidebar.classList.add("animation-rotate");
  closeSidebar.classList.remove("animation-rotate");
});
