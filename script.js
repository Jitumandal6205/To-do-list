document.querySelector('#push').onclick = function () {
    if (document.querySelector('#new-task input').value.length == 0) {
        alert("Please Enter a Task")
    }
    else {
        document.querySelector('#tasks').innerHTML += `
        <div class="task">
        <span id = "task-name"> 
        ${document.querySelector('#new-task input').value}
        </span>
        <button class="Delete">
        <i class="fa-solid fa-trash"></i>
        </button>
        </div>`;

        var current_Task = document.querySelectorAll(".Delete");
        for( var i = 0; i < current_Task.length; i++)
        {
            current_Task[i].onclick = function () {
                this.parentNode.remove();
            }
        }

        var tasks = document.querySelectorAll(".task");
        for ( var i = 0; i < tasks.length; i++) {
            tasks[i].onclick = function () {
                this.classList.toggle('completed');
            }
        }

        document.querySelector("#new-task input").value = " ";
    }
}