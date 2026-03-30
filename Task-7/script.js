let chatBox = document.getElementById("chatBox")
let input = document.getElementById("msg")
let send= document.getElementById("send")

function time() {
    let d = new Date()
    return d.getHours()+":"+d.getMinutes()
}

function addMessage(text,type) {
chatBox.innerHTML +=
    `<div class="msg ${type}">
        ${text}
    <div class="time">${time()}
    </div>
    </div>`
}

function sendMessage() {
    let text = input.value
    addMessage(text,"user")
    input.value = "";
setTimeout(() => {addMessage("Reply:"+text,"bot")},1000)
}

send.addEventListener("click",sendMessage);