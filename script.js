window.addEventListener('load',() =>{
let inputField = document.getElementById('input-name')
let addBtn = document.getElementById('addStudentBtn')
let list = document.getElementById('students')
let form = document.getElementById('name-form')

let absent = document.getElementById('num-absent')
let absentCounter = 0;
let present = document.getElementById('num-present')
let presentCounter = 0


let changeNum = 0

let totalNumOfStudents = 0

let submitbtn = document.getElementById('submit-btn')
let clear = document.getElementById('clear')

form.addEventListener('submit', (ev) => {
    ev.preventDefault()

    changeNum += 1
    totalNumOfStudents +=1
    const student = inputField.value

    if(!student){
        alert("Please Enter A Student")
        return
    }

    const task_el = document.createElement('div')
        task_el.classList.add("student")

        const task_content_el = document.createElement('div')
        task_content_el.classList.add('content')

        task_el.appendChild(task_content_el)

        const task_input_el = document.createElement('input')
        task_input_el.classList.add('text')
        task_input_el.type = "text"

        task_input_el.value = student;
        task_input_el.setAttribute('readonly', 'readonly')
        
        task_content_el.appendChild(task_input_el)


        const task_actions = document.createElement('div')
        task_actions.classList.add("actions")

        var task_edit = document.createElement('button')
        task_edit.classList.add("absent")
        task_edit.innerHTML = "Absent"

        const task_delete = document.createElement('button')
        task_delete.classList.add("present")
        task_delete.innerHTML = "Present"

        const change = document.createElement('button')
        change.classList.add('present')
        change.innerHTML = "Change"
        change.hidden = true
        change.style.color= "#fff"

        task_actions.appendChild(task_edit)
        task_actions.appendChild(task_delete)
        task_actions.appendChild(change)

        task_el.appendChild(task_actions)


    list.appendChild(task_el)

    inputField.value = ""

    task_edit.addEventListener('click', () => {
        absentCounter +=1
        absent.innerHTML = absentCounter 
        task_edit.disabled = true
        task_delete.hidden = true 
        change.hidden = false

        
    })

    task_delete.addEventListener('click', () => {
        presentCounter += 1
        present.innerHTML = presentCounter
        task_delete.disabled = true
        task_edit.hidden = true
        change.hidden = false

    })

    clear.addEventListener('click', () => {
        task_el.remove()
        presentCounter = 0
        absentCounter = 0
        absent.innerHTML = absentCounter
        present.innerHTML = presentCounter
    })

    change.addEventListener('click', () => {
        change.remove()
        task_edit.hidden = false
        task_delete.hidden = false
        changeNum +=1
        if(changeNum == absentCounter + 1){
            absentCounter -=1
            absent.innerHTML = absentCounter
        } else if(changeNum == presentCounter + 1){
            presentCounter -=1
            present.innerHTML = absentCounter
        }
        task_edit.disabled = false
        task_delete.disabled = false
    })
    


})

submitbtn.addEventListener('click', () => {
    alert("Attendance Submitted \r\n Present:" + presentCounter +"\r\n Absent: " + absentCounter + "\r\n Total Number Of Student: " + (totalNumOfStudents))

   
    
})

})
