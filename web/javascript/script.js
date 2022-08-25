let tasks_id = 1 
// this function will get the time from python
// i can't do it in js right now, but i'll figure it out




// prototype function to check the task visualy
const checked = (task_id) => {

    let task1 = document.getElementById(task_id).children[0]
    // let input = document.getElementById(task_id).children[1]
    let check1 = document.getElementById(task_id).children[3].children[0]
    
    if (!check1.checked) {
        task1.style.textDecorationLine="line-through"
    }
    else {   
        task1.style.textDecorationLine=""
    }
}

// prototype function to edit the content of the task exclunding the datetime
const edit_task = (task_id) => {

    let tasktext = document.getElementById(task_id).children[0]
    let tasktextdata = document.getElementById(task_id).children[1]
    
    // editing
    let editing = () => {
        console.log("editing")
        tasktextdata.value = tasktext.innerText
        tasktext.style.display = "none"
        tasktextdata.style.display =""
        tasktextdata.focus()
    }

    // done
    let done = () => {
        console.log("done")
        tasktext.innerText = tasktextdata.value 
        tasktext.style.display = ""
        tasktextdata.style.display = "none"
    }
    // add a event listner to trigger the "done" function when the enter is pressed on focus
    tasktextdata.addEventListener("keypress", (e) => {
        
        if (e.key === "Enter" & tasktext.style.display === "none") {
            e.preventDefault()
            return done()
        }
    })
    // this line will trigger when the pencil button is clicked again
    if (tasktext.style.display === "none"){
        return done()
    }
    
    if (tasktext.style.display === "") {
        return editing()
    }

}

const create_task = () => {

    let id = ++tasks_id
    let time = gettime()
    console.log(time)
    let task = document.getElementById("new_task_text").value


    task_body = `
         
        <div class="box bg-orange" id="${id}">
        <p class="task">${task}</p>
        <textarea name="input" class="task task-text-input" style="display: none;"></textarea>
        <p class="time"></p>
        <label class="cont">
            <input type="checkbox">
            <span class="checkmark" onclick="checked(${id})"></span>
        </label>
        <svg class="close-icon" onclick="delete_task(${id})" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.8759 12.4998C21.8759 7.32407 17.6767 3.12485 12.5009 3.12485C7.32513 3.12485 3.12592 7.32407 3.12592 12.4998C3.12592 17.6756 7.32513 21.8748 12.5009 21.8748C17.6767 21.8748 21.8759 17.6756 21.8759 12.4998Z" stroke="white" stroke-width="1.00189" stroke-miterlimit="10"/>
            <path d="M15.6261 15.6253L9.37524 9.37442" stroke="white" stroke-width="1.00189" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.37524 15.6253L15.6261 9.37442" stroke="white" stroke-width="1.00189" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <svg  class="pencil" onclick="edit_task(${id})"  width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.9125 5.90229L2.9881 28.8831L1.59897 32.246L4.96185 30.8569L27.9427 7.93249L25.9125 5.90229ZM28.0851 3.73054L27.0919 4.72289L29.1221 6.75309L30.1153 5.75989C30.3759 5.49909 30.5223 5.14549 30.5223 4.7768C30.5223 4.40812 30.3759 4.05451 30.1153 3.79372L30.0521 3.73054C29.923 3.60137 29.7696 3.49891 29.6009 3.42901C29.4321 3.3591 29.2513 3.32312 29.0686 3.32312C28.886 3.32312 28.7051 3.3591 28.5363 3.42901C28.3676 3.49891 28.2143 3.60137 28.0851 3.73054Z" fill="white"/>
        </svg>
    </div>

        
        `

        document.getElementById("task-container").insertAdjacentHTML("beforeend", task_body)
    
        document.getElementById("new_task_text").value = ""

        tasks_count = document.getElementsByClassName("box").length
        document.getElementById("todoText").innerText = `Todo(${tasks_count})`

        function gettime(){
            eel.gettime()(function(time1){
                document.getElementById(`${id}`).children[2].innerText = time1
            })
        }
}

document.getElementById("new_task_text").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault()
        return create_task()
    }
})

const delete_task = (task_id) => {

    document.getElementById(task_id).remove()
    tasks_count = document.getElementsByClassName("box").length
    document.getElementById("todoText").innerText = `Todo(${tasks_count})`


}

// animation for the add task input
const show_new_task_input = () => {
    let task_input = document.getElementsByClassName("new_task_input")[0]
    if (task_input.style.display === "") {
        return task_input.style.display = "none"
    }
    if (task_input.style.display === "none"){
        task_input.style.display = ""
        task_input.children[0].focus()
    }
}



