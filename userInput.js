
window.onload = function () {
    var btn = document.getElementById('btn');
    var input= document.getElementById('inp');
    // var task = document.getElementById('task')
    // var update = document.getElementById('update')
    btn.onclick = function () {
        var val = input.value;
        if(val && val!="" && val.trim()!="")
        {
            addItem(val);
            displayItem();
        }
        else{
            alert("Todo Item is not inputed");
        }

        // updateTodoItem("task","update");
    };
};
