const taskManager = new TaskManager()
taskManager.load()
taskManager.render()
const validFormFieldInput = () => {
    const newTaskNameInput = document.querySelector('#task-name')   ;
    const name = newTaskNameInput.value;
    const newDescriptionInput = document.querySelector('#description');
    const description = newDescriptionInput.value;
    const newAssignedToInput = document.querySelector('#assigned-to');
    const assignedTo = newAssignedToInput.value;
    const newDueDateInput = document.querySelector('#due-date');
    const dueDate = newDueDateInput.value;
    if (name===""){
        $('#name-alert').show()
        setTimeout(()=>{$('#name-alert').hide()},2000)
        return false;
    }
    if (description==="") {
        $('#describe-alert').show()
        setTimeout(()=>{$('#describe-alert').hide()},2000)
        return false;
    }
    if (assignedTo===""){
        $('#assigned-alert').show()
        setTimeout(()=>{$('#assigned-alert').hide()},2000)
        return false;
    }
    if (dueDate === ""){
        $('#due-alert').show()
        setTimeout(()=>{$('#due-alert').hide()},2000)
        return false;
    }
    
    taskManager.addTask(name,description,assignedTo,dueDate)
    taskManager.save()
    taskManager.render()
    newTaskNameInput.value = ""
    newDescriptionInput.value = ""
    newAssignedToInput.value = ""
    newDueDateInput.value = ""
})
