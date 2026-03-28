let items = document.querySelectorAll("li")
let dragged = null;

items.forEach(item => {

item.addEventListener("dragstart",function() {
    dragged = item 
})

item.addEventListener("dragover",function(e) {
        e.preventDefault()
})

item.addEventListener("drop",function() {
    let temp = dragged.textContent
    dragged.textContent = item.textContent
    item.textContent = temp
})

})