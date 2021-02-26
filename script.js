const header = document.getElementsByTagName("header")[0]
const nav = document.getElementsByClassName('top-nav-links')[0]
const burger = document.getElementsByClassName("top-nav-burger")[0]
const closeBtn = document.getElementsByClassName("close-button")[0]

function openNav() {
    header.classList.add("show-menu")
}

function closeNav() {
    header.classList.remove("show-menu")
}

burger.addEventListener("click", openNav)
closeBtn.addEventListener("click", closeNav)
nav.addEventListener("click", closeNav)

window.addEventListener("resize", function () {
    if (this.innerWidth > 600) {
      closeNav()
    }
})
