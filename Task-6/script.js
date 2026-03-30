let items = document.querySelectorAll("li")
let dragged = null;

items.forEach(item => {

item.addEventListener("dragstart",function() {
    dragged = item 
    item.classList.add("dragging")
})

item.addEventListener("dragover",function(e) {
    e.preventDefault()
})

item.addEventListener("dragend",function() {
    item.classList.remove("dragging")
})


item.addEventListener("drop",function() {
    let temp = dragged.textContent
    dragged.textContent = item.textContent
    item.textContent = temp

    item.classList.add("dropped")
    dragged.classList.add("dropped")

    setTimeout(() =>{
    item.classList.remove("dropped")
    dragged.classList.remove("dropped")
    },500)
    
})

})