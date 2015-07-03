function addOrUpdate(e) {	
	var editor = document.querySelector("#editor");
	var todoList = document.querySelector("#todoList");	
	var todos = todoList.querySelectorAll("li");
	var editedTodo;
	
	document.querySelector("#buttonAdd").value = "Add";
	
	for(var i = 0; i < todos.length; i++){
		if(todos[i].isEdited){
			editedTodo = todos[i];
		}
	}
		
	if(typeof editedTodo === 'undefined'){
		var dateTime = createDateTime();
		var todoText = createTodoText();
		var deleteButton = createDeleteButton();
		var editButton = createEditButton();
		var todo = createTodo(dateTime, todoText, deleteButton, editButton);
		todoList.appendChild(todo);
	} else {
		editedTodo.querySelector(".todo-text").innerHTML = editor.value;
		editedTodo.isEdited = false;
	}
	
	editor.value = "";
}

function createDateTime() {
	var dateTime = document.createElement("span");
	dateTime.style.marginRight = "2px";
	dateTime.className = "todo-element";
	dateTime.innerHTML = moment().format('hh:mm:ss');
	return dateTime;
}

function createTodoText() {
	var todoText = document.createElement("span");
	todoText.className = "todo-text todo-element";
	todoText.innerHTML = editor.value;
	return todoText;
}

function createDeleteButton() {
	var deleteButton = document.createElement("input");
	deleteButton.type = "button";
	deleteButton.className = "button button-todo-edit";
	deleteButton.value = "Delete";
	deleteButton.onclick = function() {
		var todoList = document.querySelector("#todoList");
		var currentTodo = deleteButton.parentNode;
		currentTodo.isEdited = false;
		todoList.removeChild(deleteButton.parentNode);
		editor.value = currentTodo.querySelector(".todo-text").innerHTML;			
		document.querySelector("#buttonAdd").value = "Add";
		};
	return deleteButton;
}

function createEditButton() {
	var editButton = document.createElement("input");
	editButton.type = "button";
	editButton.className = "button button-todo-edit";
	editButton.value = "Edit";		
	editButton.onclick = function() {
			var editor = document.querySelector("#editor");
			var currentTodo = editButton.parentNode;
			editor.value = currentTodo.querySelector(".todo-text").innerHTML;			
			currentTodo.isEdited = true;
			document.querySelector("#buttonAdd").value = "Update";
	};
	return editButton;
}

function createTodo(dateTime, todoText, deleteButton, editButton) {
	var todo = document.createElement("li");
	todo.appendChild(dateTime);
	todo.appendChild(todoText);
	todo.appendChild(deleteButton);
	todo.appendChild(editButton);
	todo.style.clear = "both";
	return todo;
}