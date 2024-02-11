const sidebar = document.getElementById("sidebar");
const openSidebarBtn = document.getElementById("open-sidebar");
const closeSidebarBtn = document.getElementById("close-sidebar");
const sidebar2 = document.getElementById("sidebar2");
const openSidebar2Btn = document.getElementById("open-sidebar-2");
const closeSidebar2Btn = document.getElementById("close-sidebar-2");
const userDropdownMenu = document.getElementById("user-dropdown-menu");

const openSidebar = () => {
  sidebar.classList.add("sidebar-open");
  openSidebarBtn.classList.remove("animation-rotate");
  closeSidebarBtn.classList.add("animation-rotate");
  document.body.style.overflow = "hidden";
};
const closeSidebar = () => {
  sidebar.classList.remove("sidebar-open");
  openSidebarBtn.classList.add("animation-rotate");
  closeSidebarBtn.classList.remove("animation-rotate");
  document.body.style.overflow = "auto";
};

const openSidebar2 = () => {
  sidebar2.classList.add("sidebar2-open");
  closeSidebar2Btn.classList.add("animation-rotate");
  userDropdownMenu.classList.toggle("close-user-dropdown");
};
const closeSidebar2 = () => {
  sidebar2.classList.remove("sidebar2-open");
  closeSidebar2Btn.classList.remove("animation-rotate");
  document.body.style.overflow = "auto";
};

openSidebarBtn.addEventListener("click", () => openSidebar());
closeSidebarBtn.addEventListener("click", () => closeSidebar());
openSidebar2Btn.addEventListener("click", () => openSidebar2());
closeSidebar2Btn.addEventListener("click", () => closeSidebar2());

// Event listener to close the sidebar when clicking outside
document.addEventListener("click", function (event) {
  const sidebarPosition = sidebar.getBoundingClientRect().x;
  const sidebar2Position = sidebar2.getBoundingClientRect().y;
  console.log(sidebar2Position);
  if (!sidebar.contains(event.target) && sidebarPosition === 0) {
    closeSidebar();
  }
  if (!sidebar2.contains(event.target) && sidebar2Position === 0) {
    closeSidebar2();
  }
});
