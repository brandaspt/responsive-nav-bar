const header = document.getElementsByTagName("header")[0]
const nav = document.getElementsByClassName("top-nav-links")[0]
const burger = document.getElementsByClassName("top-nav-burger")[0]

burger.addEventListener("click", function () {
    header.classList.toggle("show-menu")
})

nav.addEventListener("click", function () {
    if (header.classList.contains("show-menu")) {
        header.classList.toggle("show-menu")
    }
})

