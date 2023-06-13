const dela = {
  list: {
    sleep: "In progress",
    eat: "In progress",
    read: "To do",
    learn: "In progress",
    "clean up": "In progress",
  },
  changeStatus(bussiness, status) {
    this.list[bussiness] = status
    console.log(bussiness + ":" + " " + status)
  },
  addTask(bussiness) {
    this.list[bussiness] = "To do"
    console.log(this.list)
  },
  deleteTask(bussiness) {
    delete this.list[bussiness]
    console.log(this.list)
  },
  showList() {
    let a = 0
    for (let key in dela.list) {
      if (dela.list[key] == "To do") {
        console.log(key + ":" + " " + dela.list[key])
        a = a + 1
      }
    }
    if (a == 0) {
      console.log("Nothing is to do")
    }
    let b = 0
    for (let key in dela.list) {
      if (dela.list[key] == "In progress") {
        console.log(key + ":" + " " + dela.list[key])
        b = b + 1
      }
    }
    if (b == 0) {
      console.log("Nothing is in progress")
    }
    let c = 0
    for (let key in dela.list) {
      if (dela.list[key] == "Done") {
        console.log(key + ":" + " " + dela.list[key])
        c = c + 1
      }
    }
    if (c == 0) {
      console.log("Nothing is done")
    }
  }
}
