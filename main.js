const ul = document.getElementById("todos");
const todo = document.getElementById("todoText").value;

var submitAndAddTodo = function(event) {
    event.preventDefault();
    const li = ul.createElement('li');
    li.innerText = todo;

    ul.appendChild(li);
    console.log(`Added todo: ${todo}`);
};

// your form
var form = document.getElementById("form");

// attach event listener
form.addEventListener("submit", submitAndAddTodo, true);