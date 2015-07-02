function addOrUpdate(e) {
	var editor = document.querySelector("#editor");
	var todoList = document.querySelector("#todoList");
	var todo;
	var todoText;
	var deleteButton;
	var editButton;	
	
	var todos = todoList.querySelectorAll("li");
	var editedTodo;
	
	var addButton = document.querySelector("#buttonAdd");
	addButton.value = "Add";
	
	for(var i = 0; i < todos.length; i++){
		if(todos[i].isEdited){
			editedTodo = todos[i];
		}
	}
		
	if(typeof editedTodo === 'undefined'){
		todoText = document.createElement("span");
		todoText.className = "todo-text";
		todoText.innerHTML = editor.value;

		deleteButton = document.createElement("input");
		deleteButton.type = "button";
		deleteButton.className = "button button-todo-edit";
		deleteButton.value = "Delete";
		deleteButton.onclick = function() {
			var todoList = document.querySelector("#todoList");
			todoList.removeChild(deleteButton.parentNode);
		};

		editButton = document.createElement("input");
		editButton.type = "button";
		editButton.className = "button button-todo-edit";
		editButton.value = "Edit";		
		editButton.onclick = function() {
			var editor = document.querySelector("#editor");
			editor.value = editButton.parentNode.querySelector(".todo-text").innerHTML;
			var addButton = document.querySelector("#buttonAdd");
			addButton.value = "Update";
			todo.isEdited = true;
		};
		
		todo = document.createElement("li");
		todo.appendChild(todoText);
		todo.appendChild(deleteButton);
		todo.appendChild(editButton);
		todo.style.clear = "both";

		todoList.appendChild(todo);
	} else {
		editedTodo.querySelector(".todo-text").innerHTML = editor.value;
		editedTodo.isEdited = false;
	}
	
	editor.value = "";
}