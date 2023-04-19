const todoItem = document.getElementById("todoTask");

const listItems = document.getElementById("items");

const deleteButton = document.querySelectorAll(".subBtn");




function displayItem() {
    if (todoItem.value === '') {
        alert("Please enter a task")
    } else {
        let item = document.createElement("div");
        item.classList.add("item1")
        let textItem = document.createElement("span");
        textItem.innerText = document.getElementById("todoTask").value;

        item.appendChild(textItem)

        let checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox");
        item.appendChild(checkBox);

        let deleteBtn = document.createElement("button");
        let deleteIcon = document.createElement("ion-icon");
        deleteBtn.appendChild(deleteIcon)
        deleteIcon.setAttribute("name", "trash")
        deleteIcon.setAttribute("class", "subBtn");

        // deleteIcon.innerHTML = `<ion-icon name="trash">
        item.appendChild(deleteBtn)
        deleteBtn.addEventListener("click", deleteItem)
        deleteBtn.classList.add("subBtn");




        item.appendChild(deleteBtn)

        // item.innerHTML = todoItem.value;
        listItems.appendChild(item);

        todoItem.value = '';


    }

}
// deleteButton.addEventListener("click", function(e) {
//     if (e.target.tagName === "div") {
//         e.target.classList.toggle("subBtn");
//     } else if (e.target.tagName === "span") {
//         e.target.parentElement.parentElement.remove();

//     }
// }, false);
// deleteButton.addEventListener("click", deleteItem)

deleteButton.forEach(el => el.addEventListener("click", deleteItem))
console.log(deleteButton)

function deleteItem(e) {
    // alert("delete item")

    console.log(e.target)
    const item = e.target
    if (item.classList[0] === "subBtn") {
        const todo = item.parentElement.parentElement;
        todo.remove()
    }

}


// console.log(deleteButton);