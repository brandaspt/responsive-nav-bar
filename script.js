const header = document.getElementsByTagName("header")[0]
const nav = document.getElementsByClassName("top-nav-links")[0]
const burger = document.getElementsByClassName("top-nav-burger")[0]
const closeBtn = document.getElementsByClassName("close-button")[0]

function toggleNav() {
    if (window.innerWidth <= 600) {
        header.classList.toggle("show-menu")
    }
}

burger.addEventListener("click", function () {
  header.classList.toggle("show-menu")
})

nav.addEventListener("click", function () {
  if (window.innerWidth <= 600) {
      header.classList.toggle("show-menu")
  }
})

window.addEventListener("resize", function () {
    if (this.innerWidth > 600 && header.classList.contains("show-menu")) {
        header.classList.toggle("show-menu")
    }
})
