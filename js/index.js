const sidebar = document.getElementById("sidebar");
const openSidebar = document.getElementById("open-sidebar");
const closeSidebar = document.getElementById("close-sidebar");

openSidebar.addEventListener("click", (e) => {
  sidebar.classList.add("sidebar-open");
  console.log(sidebar.classList);
});
closeSidebar.addEventListener("click", (e) => {
  sidebar.classList.remove("sidebar-open");
  console.log(sidebar.classList);
});
