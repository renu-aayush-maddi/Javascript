let container = document.getElementById("container");
let loading = document.getElementById("loading");

let page = 1;
let limit = 5;
let isLoading = false;

async function loadData() {
    if (isLoading) return;
    isLoading = true;
    loading.style.display = "block";

    let res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`);
    let data = await res.json();

    data.forEach(post => {
            let div = document.createElement("div");
            div.className = "card";
            div.innerHTML = `
            <h4>${post.title}</h4>
            <p>${post.body}</p>`
            container.appendChild(div);
        });
    page++;
    loading.style.display = "none";
    isLoading = false;
}

window.addEventListener("scroll",() =>{
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight-50) {
        loadData();
    }
})

loadData();