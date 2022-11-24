; (function () {
    "use strict"

    const itemInput = document.getElementById('item-input')
    const todoAddForm = document.getElementById("todo-add")

    const ul = document.getElementById("todo-list")

    todoAddForm.addEventListener("submit", function (e) {
        e.preventDefault()
        console.log(itemInput.value)

        ul.innerHTML +=`
            <li class="todo-item">
                <p class="task-name">${itemInput.value}</p>
                <i class="fas fa-trash-alt"></i>
            </li>
        `
    })
})()