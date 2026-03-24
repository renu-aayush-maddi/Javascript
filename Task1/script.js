let input = document.getElementById("input");
let btn = document.getElementById("btn");
let list = document.getElementById("list");

btn.addEventListener("click", function () {
    let li = document.createElement("li");
    li.textContent = input.value;

    li.addEventListener("click", function () {
        li.classList.toggle("done");
    });

    li.addEventListener("dblclick", function () {
        li.remove();
    });

    list.appendChild(li);
    input.value = "";
});