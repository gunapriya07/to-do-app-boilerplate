const userInput=document.querySelector("#input");
const addBtn=document.getElementById("button");
const parentTodoContainer=document.getElementById("todolist");

let  listOfTodos= [];

addBtn.onclick = () => {
   listOfTodos.push(userInput.value);
   userInput.value= "";
   displayTodo();
};
function displayTodo() {
    let  newTodo = ""
        listOfTodos.map((todo, index) =>{
            newTodo += `<li>
            ${todo}
            <a onclick="editTodo(${index})">Edit</a>
            <a onclick="deleteTodo(${index})">Delete |</a>
        </li>`

    });
    parentTodoContainer.innerHTML=newTodo;

    }
function deleteTodo(indexValve){
        listOfTodos.splice(indexValve,1);
        displayTodo();
    }
function editTodo(indexValve){
        let updateTodo =prompt("please update the todo");
        listOfTodos.splice(indexValve,1,updateTodo);
        displayTodo();
    }
