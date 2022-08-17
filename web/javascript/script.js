// prototype function to check the task visualy
let task1 = document.getElementsByClassName("task")[0]
let check1 = document.getElementsByTagName("input")[0]
let checkmark = document.getElementsByClassName("checkmark")[0]
checkmark.addEventListener("click", () => {
    if (check1.checked) {
        task1.style.textDecorationLine=""
    }
    else {   
        task1.style.textDecorationLine="line-through"
    }
})
// prototype function to edit the content of the task exclunding the datetime
let tasktext = document.getElementsByTagName("p")[0]
let tasktextdata = document.getElementsByClassName("task-text-input")[0]
let pencil = document.getElementsByClassName("pencil")[0]

pencil.addEventListener("click", () => {
    if (tasktext.style.display === "") {

        tasktextdata.value = tasktext.innerText
        tasktext.style.display = "none"
        tasktextdata.style.display =""
    }
    else{
        tasktext.innerText = tasktextdata.value 
        tasktext.style.display = ""
        tasktextdata.style.display = "none"
    }
})

