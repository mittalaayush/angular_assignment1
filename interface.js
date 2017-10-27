var mydiv = document.getElementById("myDiv");
var id = -1;
var ToDo = /** @class */ (function () {
    function ToDo() {
        this.todoTask = [];
    }
    ToDo.prototype.add = function (task) {
        this.todoTask[++id] = task;
    };
    ToDo.prototype.display = function () {
        var todos = list.todoTask[id];
        var todo_element = document.createElement("div");
        todo_element.setAttribute("class", "todoItem");
        todo_element.style.margin = "4px";
        todo_element.style.padding = "4px";
        todo_element.id = "key" + id;
        var task = document.createElement('input');
        task.id = "task" + id;
        task.type = "text";
        task.setAttribute("class", "todoTask");
        task.value = todos;
        task.disabled = true;
        todo_element.appendChild(task);
        var linebreak = document.createElement("br");
        todo_element.appendChild(linebreak);
        var mark_complete = document.createElement("input");
        mark_complete.type = "button";
        mark_complete.id = "complete" + id;
        mark_complete.value = "Mark As Complete";
        todo_element.appendChild(mark_complete);
        mark_complete.setAttribute("onclick", "completeTodoItem(" + id + ")");
        mark_complete.setAttribute("class", "firstTodoTaskButton");
        var update = document.createElement("input");
        update.type = "button";
        update.id = "update" + id;
        update.value = "Edit";
        update.style.marginLeft = "4px";
        todo_element.appendChild(update);
        update.setAttribute("class", "todoTaskButton");
        update.setAttribute("onclick", "updateTodoItem(" + id + ")");
        var delete_todo = document.createElement("button");
        delete_todo.id = "delete" + id;
        delete_todo.innerText = "Delete";
        delete_todo.style.marginLeft = "4px";
        delete_todo.setAttribute("onclick", "deleteTodoItem(" + id + ")");
        todo_element.appendChild(delete_todo);
        delete_todo.setAttribute("class", "todoTaskButton");
        mydiv.appendChild(todo_element);
    };
    return ToDo;
}());
var list = new ToDo();
function addItem(item) {
    list.add(item);
}
;
function displayItem() {
    list.display();
}
function updateTodoItem(id) {
    var update = document.getElementById("update" + id);
    var task = document.getElementById("task" + id);
    if (update.value == "Edit") {
        update.value = "Update";
        task.disabled = false;
    }
    else {
        if (task.value && task.value != "" && task.value.trim() != "") {
            update.value = "Edit";
            task.disabled = true;
            list.todoTask[id] = task.value;
        }
        else {
            alert("Todo Item is not inputed");
        }
    }
}
function completeTodoItem(id) {
    var complete = document.getElementById("complete" + id);
    console.log(complete);
    var task = document.getElementById("task" + id);
    if (task.value && task.value != "" && task.value.trim() != "") {
        task.setAttribute("class", "completed");
        task.disabled = true;
        task.setAttribute("class", "completed");
        complete.remove();
        document.getElementById("update" + id).remove();
        task.setAttribute("class", "completed");
        var deleteButton = document.getElementById("delete" + id);
        deleteButton.style.marginLeft = "25px";
    }
    else {
        alert("Todo Item is not inputed,So the task cannot be completed");
    }
}
function deleteTodoItem(id) {
    document.getElementById("key" + id).remove();
    delete list.todoTask[id];
    console.log(list.todoTask);
}
