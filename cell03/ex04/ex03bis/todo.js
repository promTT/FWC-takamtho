$(document).ready(function() {
    loadTodos();

    $('#newTodo').click(function() {
        createTodo();
    });
});

function createTodo() {
    let todoText = prompt("Enter your new task:");      // prompt is func in js collect input popup and click summit if cancel send to null 
    if (todoText !== null && todoText != "") {
            const todo = $("<div class='todo'></div>").text(todoText);
            todo.click(function() {
                if (confirm("Are you sure you want to remove this task?")) {
                    $(this).remove();
                    saveTodos();
                }
            });
            $("#ft_list").prepend(todo);        // use for add element or content to in element selected
            saveTodos();    
    }
}

function saveTodos() {
    const todos = $(".todo").map(function() {
        return $(this).text();
    }).get();

    const encodedTodos = todos.map(todo => encodeURIComponent(todo));

    document.cookie = "todos=" + JSON.stringify(encodedTodos);
}

function loadTodos() {
    const cookies = document.cookie.split(';');     // เพราะว่า cookie เก็บข้อมูลแบบ ; ในการแยกคำ
    const todoCookie = cookies.find(cookie => cookie.trim().startsWith("todos=")); // เข้าไปหาทุกตัวมี่มี todos= อยู่ข้างหน้า
    if (todoCookie) {
        const encodedTodos = JSON.parse(todoCookie.split('=')[1]);      // convert JSON to obj  //.split('=') for get data before = (todos=)
        const todos = encodedTodos.map(todo => decodeURIComponent(todo));
        todos.forEach(function(todoText) {      // ดึง ทุกๆค่า ใน Array มาใช้
            const todo = $("<div class='todo'></div>").text(todoText);
            todo.click(function() {
                if (confirm("Are you sure you want to remove this task?")) {
                    $(this).remove();
                    saveTodos();
                }
            });
            $("#ft_list").append(todo);
        });
    }
}

// function createTodo() {
//     let todoText = prompt("Enter your new task:");      // prompt is func in js collect input popup and click summit if cancel send to null
//     if (todoText !== null) {
//         todoText = todoText.trim();     // trim() for lop whitespace space and tab
//         if (todoText !== "") {
//             const todo = $("<div class='todo'></div>").text(todoText);
//             todo.click(function() {
//                 if (confirm("Are you sure you want to remove this task?")) {
//                     $(this).remove();
//                     saveTodos();
//                 }
//             });
//             $("#ft_list").prepend(todo);        // use for add element or content to in element selected
//             saveTodos();
//         } else {
//             // const todo = $("<div class='todo'></div>").text(" ");
//             const todo = $("<div class='todo'></div>").text(todoText);
//             $("#ft_list").prepend(todo);
//             saveTodos();
//         }
//     }
// }

// function createTodo() {
//     let todoText = prompt("Enter your new task:");      // prompt is func in js collect input popup and click summit if cancel send to null 
    
//     if (todoText !== null && todoText != "") {
//         // todoText = todoText.trim();     // trim() for lop whitespace space and tab
//             const todo = $("<div class='todo'></div>").text(todoText);
//             todo.click(function() {
//                 if (confirm("Are you sure you want to remove this task?")) {
//                     $(this).remove();
//                     saveTodos();
//                 }
//             });
//             $("#ft_list").prepend(todo);        // use for add element or content to in element selected
//             saveTodos();    
//     }
//     else {
//         const todo = $("<div class='todo'></div>").text(todoText);
//         $("#ft_list").prepend(todo);        // use for add element or content to in element selected
//         saveTodos();
//     }
//     // console.log(typeof todoText)
// }