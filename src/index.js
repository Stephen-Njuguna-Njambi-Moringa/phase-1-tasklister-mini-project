document.addEventListener("DOMContentLoaded", () => {
  // your code here.

 // values for form and input.
  let form = document.getElementById('create-task-form');
  let taskList = document.getElementById('tasks');

 // form submit event.
  form.addEventListener('submit', addTask);

 // delete 
  taskList.addEventListener('click', removeTask);

 // Adding Task.
  function addTask(e){
    e.preventDefault();

   // getting input values.
    let newTaskDescription = document.getElementById('new-task-description').value;
    console.log(newTaskDescription);

   // create a li element.
    let li = document.createElement('li');

   // Adding text node with input values.
    li.appendChild(document.createTextNode(newTaskDescription));

   // creating delete button element.

    let deleteBtn = document.createElement('button');

   // Appending the text node to delete button.
    deleteBtn.appendChild(document.createTextNode('x'));

   // Appending button to li.
    li.appendChild(deleteBtn);

   // Appending li to list.
    taskList.appendChild(li);
  }

  function removeTask(e){

    if(e.target.nodeName === 'Button'){
      if(confirm('Confirm Exit.')){
        let li = e.target.parentElement;
        taskList.removeChild(li);
      }
    }
  }

});


