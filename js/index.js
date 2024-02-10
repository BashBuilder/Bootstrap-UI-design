const sidebar = document.getElementById("sidebar");
const openSidebar = document.getElementById("open-sidebar");
const closeSidebar = document.getElementById("close-sidebar");
const sidebar2 = document.getElementById("sidebar2");
const openSidebar2 = document.getElementById("open-sidebar-2");
const closeSidebar2 = document.getElementById("close-sidebar-2");

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
openSidebar2.addEventListener("click", () => {
  sidebar2.classList.add("sidebar2-open");
  closeSidebar2.classList.add("animation-rotate");
});

closeSidebar2.addEventListener("click", () => {
  sidebar2.classList.remove("sidebar2-open");
  closeSidebar2.classList.remove("animation-rotate");
});
