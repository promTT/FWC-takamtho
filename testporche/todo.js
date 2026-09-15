document.addEventListener('DOMContentLoaded', function() {
    const listContainer = document.getElementById('ft_list');
    const newButton = document.getElementById('newButton');

    // Load the TODO list from cookies
    const loadTodos = () => {
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            const [name, value] = cookie.split('=');
            if (name.trim() === 'todos') {
                const todos = JSON.parse(decodeURIComponent(value));
                for (let todo of todos) {
                    addTodoElement(todo, false);
                }
            }
        }
    };

    // Save the TODO list to cookies
    const saveTodos = () => {
        const todos = [];
        listContainer.querySelectorAll('.todo-item').forEach(todoItem => {
            todos.push(todoItem.innerText);
        });
        document.cookie = `todos=${encodeURIComponent(todos)};path=/`;
    };

    // Create a new TODO element
    const addTodoElement = (text, addToTop = true) => {
        const todoDiv = document.createElement('div');
        todoDiv.className = 'todo-item';
        todoDiv.innerText = text;
        todoDiv.addEventListener('click', function() {
            const confirmDeletion = confirm('Do you want to remove this TODO?');
            if (confirmDeletion) {
                listContainer.removeChild(todoDiv);
                saveTodos();
            }
        });
        if (addToTop) {
            listContainer.prepend(todoDiv);
        } else {
            listContainer.appendChild(todoDiv);
        }
    };

    // Handle new TODO creation
    newButton.addEventListener('click', function() {
        const newTodo = prompt('Enter a new TODO:');
        if (newTodo) {
            addTodoElement(newTodo);
            saveTodos();
        }
    });

    // Save scroll position
    const saveScrollPosition = () => {
        localStorage.setItem('scrollPosition', listContainer.scrollTop);
    };

    // Load scroll position
    const loadScrollPosition = () => {
        const scrollPosition = localStorage.getItem('scrollPosition');
        if (scrollPosition !== null) {
            listContainer.scrollTop = scrollPosition;
        }
    };

    // Event listener to save scroll position before the page is unloaded
    window.addEventListener('beforeunload', saveScrollPosition);

    // Load the TODOs and scroll position on page load
    loadTodos();
    loadScrollPosition();
});