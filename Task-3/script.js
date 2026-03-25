const gallery = document.querySelector(".gallery")
const large = document.getElementById("large")
const box = document.getElementById("box")
const close = document.getElementById("close")

gallery.addEventListener("click",function(e) {
    if (e.target.classList.contains("imgs")) {
    large.src = e.target.src.replace("/200","/600")
    box.classList.remove("hidden")
}})

close.addEventListener("click",function() {
    box.classList.add("hidden")
})