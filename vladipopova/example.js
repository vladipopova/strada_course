let toDoList = [
    { name: "sleep", status: "In progress" },
    { name: "eat", status: "In progress" },
    { name: "read", status: "To do" },
    { name: "learn", status: "In progress" },
    { name: "clean up", status: "To do" }
];

function addTask(a, b) {
    toDoList.push({ name: a, status: b })
    console.log(toDoList)
}

function deleteTask(a) {
    let deletedTask = toDoList.findIndex(task => task.name === a);
    toDoList.splice(deletedTask, 1);
    console.log(toDoList)
}

function changeStatus(a, b) {
    let indexOfChangingTask = toDoList.findIndex(task => task.name == a)
    toDoList[indexOfChangingTask] = { name: a, status: b }
    console.log(toDoList[indexOfChangingTask])
}

function showList() {
    toDoList.forEach(task => {
        if (task.status === "To do") {
            console.log(task.name + ":" + " " + task.status)
        }
    });
    if (toDoList.find(task => task.status === "To do") == undefined) {
        console.log("Nothing is to do")
    }

    toDoList.forEach(task => {
        if (task.status === "In progress") {
            console.log(task.name + ":" + " " + task.status)
        }
    });
    if (toDoList.find(task => task.status === "In progress") == undefined) {
        console.log("Nothing is in progress")
    }

    toDoList.forEach(task => {
        if (task.status === "Done") {
            console.log(task.name + ":" + " " + task.status)
        }
    });
    if (toDoList.find(task => task.status === "Done") == undefined) {
        console.log("Nothing is done")
    }
}