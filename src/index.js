document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.getElementById("submit-btn")
  submitButton.addEventListener('click', function(e){
    e.preventDefault()
    const myTask = document.getElementById("new-task-description")
    // console.log(myTask)
    const taskList = document.getElementById("tasks")
    const listItem = document.createElement("li")
    listItem.textContent = myTask.value
    taskList.appendChild(listItem);
    myTask.value=""
  })
});
