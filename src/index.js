document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault()
  // const submitButton = document.getElementById("submit-btn")
  const submitButton = document.getElementById("create-task-form")
  let taskId =1
  submitButton.addEventListener('submit', function(e){
    e.preventDefault()
    const myTask = document.getElementById("new-task-description")
    const removeBtn = document.createElement("button")
    removeBtn.textContent = "Remove"
    removeBtn.className = "remove-btn"
    removeBtn.id = "remove-btn"
    removeBtn.value = taskId
    const taskItem = myTask.value 
    const taskList = document.getElementById("tasks")
    const listItem = document.createElement("li")
    listItem.id = taskId
    listItem.textContent = taskItem
    listItem.appendChild(removeBtn)
    taskList.appendChild(listItem);
    myTask.value=""
    taskId ++

    const deleteButton = document.getElementById("remove-btn")
    deleteButton.addEventListener('click', function(e){
      e.preventDefault()
      deleteButton.parentElement.remove()
      alert("Here here here")
      // const item = document.getElementById(`${deleteButton.value}`)
      // console.log(item)
      // item.remove()
      // deleteButton.parentNode.remove()
      // e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode)
    })
  })
  // const deleteButton = document.getElementById("remove-btn")
  // alert("There's a click button")
  // if(deleteButton){
    // alert("There's a click button")
  // }
  // alert("No click button")

  // deleteButton.addEventListener('click', function(e){
    // e.preventDefault()
    // alert("Clicked")
    // if(deleteButton.value == listItem.id){
      // alert("Here")
    // }

  // })
// }
});
