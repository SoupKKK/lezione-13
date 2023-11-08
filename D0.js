function addTask() {
    const inputtask = document.getElementById("tasks")
    const taskList = document.getElementById("tasklist")

    const task = inputtask.value;
    if (task.trim() !== "") {
        const listItem = document.createElement("li")
        listItem.textContent = task

        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                listItem.style.textDecoration = "line-through"
            } else {
                listItem.style.textDecoration = "none"
            }
        });

        const deleteButton = document.createElement("button")
        deleteButton.textContent = "Elimina"
        deleteButton.addEventListener("click", function () {
            listItem.remove()
        });

        listItem.appendChild(checkbox)
        listItem.appendChild(deleteButton)
        taskList.appendChild(listItem)
        inputtask.value = ""
    }
}