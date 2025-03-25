const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// ========================
/* 
    Note: 
        PUT and DELETE requests are not supported by the JSONPlaceholder API.
        Those are just for demonstration purposes.
*/

const getTodos = () => {
    fetch(apiUrl + '?_limit=10')
        .then((res) => res.json())
        .then((data) => {
            data.forEach((todo) => addTodoToDOM(todo));
        });
};

const addTodoToDOM = (todo) => {
    const div = document.createElement('div');
    div.classList.add('todo');
    div.appendChild(document.createTextNode(todo.title));
    div.setAttribute('data-id', todo.id); // Add id to the element

    if (todo.completed) {
        div.classList.add('done');
    }

    document.getElementById('todo-list').appendChild(div);
};

const createTodo = (e) => {
    e.preventDefault();

    const newTodo = {
        title: e.target.firstElementChild.value,
        completed: false,
    };

    // ========================
    // POST REQUEST
    // ========================
    fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(newTodo),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((res) => res.json())
        .then((data) => addTodoToDOM(data))
        .then(() => (e.target.firstElementChild.value = ''));
};

const toggleCompleted = (e) => {
    if (e.target.classList.contains('todo')) {
        e.target.classList.toggle('done');

        // console.log(e.target.dataset);

        updateTodo(e.target.dataset.id, e.target.classList.contains('done'));
    }
};

const updateTodo = (id, completed) => {
    // console.log(`id: ${id}, completed: ${completed}`);

    // ========================
    // PUT REQUEST
    // ========================
    fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ completed }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    // .then((res) => res.json()) // Just for demonstration
    // .then((data) => console.log(data)) // Just for demonstration
};

const deleteTodo = (e) => {
    if (e.target.classList.contains('todo')) {
        // console.log(e.target.dataset);

        const id = e.target.dataset.id;

        // ========================
        // DELETE REQUEST
        // ========================
        fetch(`${apiUrl}/${id}`, {
            method: 'DELETE',
        })
            .then((res) => {
                res.json();
                console.log(res);
            })
            .then(() => e.target.remove());
    }
};

const init = () => {
    document.addEventListener('DOMContentLoaded', getTodos);
    document.querySelector('#todo-form').addEventListener('submit', createTodo);
    document
        .querySelector('#todo-list')
        .addEventListener('click', toggleCompleted);
    document
        .querySelector('#todo-list')
        .addEventListener('dblclick', deleteTodo);
};

init();
