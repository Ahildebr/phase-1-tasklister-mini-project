document.addEventListener("DOMContentLoaded", () => {
 const taskBox = document.getElementById("create-task-form")
 const taskList = document.getElementById("tasks")
 
 taskBox.addEventListener("submit", (e) => {
    e.preventDefault()
    const taskInput = document.getElementById("new-task-description").value 
    const priority = document.getElementById("priority").value
    const li = document.createElement("li")
    li.textContent = taskInput // 1.Creates list 2.Adds the Value of "new-task-description"
    
    const deleteButton = document.createElement("button")
    deleteButton.textContent = "X" //Makes the x button
    deleteButton.addEventListener("click", () => li.remove())
    

    
  //appends  
  li.appendChild(deleteButton) //adds delete button
  taskList.appendChild(li) //adds tasks to new tasklist
    
  
  taskBox.reset(); // Clears my "Task Description"
  })
  
});
