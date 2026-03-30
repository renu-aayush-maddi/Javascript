let productsData = [
    {id:1,name:"Phone",price:10000},
    {id:2,name:"Shoes",price:2000},
    {id:3,name:"Watch",price:3000},
    {id:4,name:"Laptop",price:55000},
    {id:5,name:"Denim Jacket",price:4500},
    {id:6,name:"Headphones",price:8000}
]

let cart = JSON.parse(localStorage.getItem("cart")) || []
let cartDiv = document.getElementById("cart")
let totalDiv = document.getElementById("total")

let searchInput = document.getElementById("search")
let checkboxes = document.querySelectorAll("input[type='checkbox']")

function debounce(fn,delay) {
    let timer
    return function () {
        clearTimeout(timer)
        timer = setTimeout(() => fn(), delay)
    }
}

function filterProducts() {
    let search = searchInput.value.toLowerCase()

    let selected = Array.from(checkboxes).filter(cb => cb.checked).map(cb => cb.value)

    let cards = document.querySelectorAll(".card")

    cards.forEach(card => {
        let name = card.dataset.name

        let matchSearch = name.includes(search)
        let matchCategory = selected.length === 0 || selected.includes(name)

        if (matchSearch && matchCategory) {
            card.style.display = "block"
        } else {
            card.style.display = "none"
        }
    })
}

let debouncedFilter = debounce(filterProducts,300)

searchInput.addEventListener("input", debouncedFilter)
checkboxes.forEach(cb => cb.addEventListener("change", filterProducts))

function addToCart(id) {
    let item = cart.find(x => x.id == id)
    if (item) item.qty++
    else {
        let p = productsData.find(x => x.id == id)
        cart.push({...p,qty:1})
    }
    updateCart()
}

function updateCart() {
    cartDiv.innerHTML =""
    let total = 0
    cart.forEach(item => {
    total += item.price * item.qty
        cartDiv.innerHTML +=`
            <div>
                ${item.name} - ${item.price} x ${item.qty}
                <button onclick="changeQty(${item.id},1)">+</button>
                <button onclick="changeQty(${item.id},-1)">-</button>
            </div>`
    })

    totalDiv.innerHTML = "Total:" + total
    localStorage.setItem("cart", JSON.stringify(cart))
}

function changeQty(id, val) {
    let item = cart.find(x => x.id == id)
    item.qty += val

    if (item.qty <= 0) {
        cart = cart.filter(x => x.id !== id)
    }
    
    updateCart()
}

updateCart()