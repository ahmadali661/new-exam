function showNotification(msg, type) {
    bgColor = ""
    switch (type) {
        case "success":
            bgColor = "green"
            break;
        case "error":
            bgColor = "red"
            break;
        default:
            bgColor = "black"
            break;
    }


    Toastify({
        text: msg,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: bgColor,
        },
        onClick: function () { } // Callback after click
    }).showToast();
}



function uid() {
    let uid = Math.random().toString(36).slice(2)
    return uid
}

function date() {
    let date = new Date()
    return date
}

let email = document.getElementById("email")
let password = document.getElementById("password")
let users = []

// ########################## Registered Section ##################
function registeredUser() {


    const user = {
        email: email.value,
        password: password.value,
        uid: uid(),
        staus: "incomplete",
        createdAt: date(),
    }

    if (user.email === "") {
        return showNotification("Please enter your correct email", "error")
    }
    if (user.password < 7) {
        return showNotification("Password will be minimum 8 chracters", "error")
    }


    const isUserFound = users.find(element => element.email === user.email)
    if (isUserFound) { return showNotification("user already exist", "error") }
    users.push(user)
    showNotification("user will be added successfully", "success")
    console.log(users)

    document.getElementById("logo").innerHTML = "Login";

    document.getElementById("signIn").style.display = "block";

    document.getElementById("signUp").style.display = "none";

    document.getElementById("email").value = "";

    document.getElementById("password").value = "";

    document.getElementById("bar").innerHTML = "Login_Page"

}
// ########################## login Section ##################
function loginUser() {

    if (email.value === "") {
        return showNotification("Please enter your correct email", "error")
    }
    if (password.value < 7) {
        return showNotification("Password will be minimum 8 chracters", "error")
    }

    const isUser = users.find(element => element.email === email.value)
    if (!isUser) {
        return showNotification("Invalid email", "error")
    } else {
        showNotification("Login successfully", "success")

    }

    document.getElementById("registration").style.display = "none";

    document.getElementById("todo").style.display = "block";

    document.getElementById("inn").innerHTML = "email";

}

// ######################## Todo #########################
let title = document.getElementById("title")
let description = document.getElementById("description")
let todos = []
// let title = document.getElementById("title");
// let description = document.getElementById("description");

function btnSubmit() {

    let todo = {
        title: title.value,
        description: description.value,
        date: new Date(),
        status: "active"
    }

    todos.push(todo)
    console.log(todos)
}

function readTodo() {
    console.log(todos)
}

function updateTodo() {

    let a = prompt("Enter Current title")
    let b = prompt("Enter New title")

    const newTodo = todos.map((todo, i) => {
        if (todo.title === a) {
            return { ...todo, title: b }
        } else {
            return todo
        }
    })
    todos = newTodo
    console.log(todos)
}

function deleteTodo() {
    let c = prompt("Enter title of object that tou want to deleted")
    const newValue = todos.filter(todo => (todo.title !== c))
    todos = newValue
    console.log(todos)

}

function showTable() {
    let tableStartingCode = '<div class="table-responsive"><table class="table">'
    let tableHead = '<thead><tr><th scope="col">#</th> <th scope="col">Title</th> <th scope="col">Description</th> <th scope="col">Date</th> <th scope="col">Status</th></tr></thead>'
    let tableEndingCode = '</table></div>'

    let tableBody = ""
    for (let i = 0; i < todos.length; i++) {
        tableBody += '<tr><th scope="row">' + (i + 1) + '</th><td>' + todos[i].title + '</td><td>' + todos[i].description + '</td><td>' + todos[i].date + '</td><td>' + todos[i].status + '</td></tr>'
    }

    let table = tableStartingCode + tableHead + '<tableBody>' + tableBody + '</tableBody>' + tableEndingCode;
    document.getElementById("oot").innerHTML = table;
}
