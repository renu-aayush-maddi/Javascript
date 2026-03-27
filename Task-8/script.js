let content = document.getElementById("content")

function loadPage() {
    let hash = window.location.hash
    if (hash == "#about") {
        content.innerHTML = "<h3>About Page</h3><p>This is about section</p>"
    } 
    else if (hash == "#contact") {
        content.innerHTML = "<h3>Contact Page</h3><p>This is contact section</p>"
    } 
    else {
        content.innerHTML = "<h3>Home Page</h3><p>Welcome to home</p>"
    }
}

window.onhashchange = loadPage

loadPage()