const todoForm = document.getElementById("todo-form");
const todoInput= todoForm.querySelector("input");
const todoList=document.getElementById("todo-list");

const TODOS_KEY="todolist"
let todoArray=[];


function OnSubmitTodoForm(event)
{
    event.preventDefault();

    const newTodo=todoInput.value;
    todoInput.value="";
    
    const newTodoObject={
        id: Date.now(),
        text: newTodo,
    }
    todoArray.push(newTodoObject);
    ShowTodolist(newTodoObject);
    SaveTodoList_LocalStorage();
}
 
function SaveTodoList_LocalStorage()
{ 
    localStorage.setItem(TODOS_KEY,JSON.stringify(todoArray)); 
}

function ShowTodolist(newTodoObject)
{
    const li=document.createElement('li');
    li.id=newTodoObject.id;
    const span=document.createElement('span');
    const removeButton=document.createElement('button');
    removeButton.innerText='Remove';
    removeButton.addEventListener("click",RemoveTodoListItem);
    li.appendChild(span);
    li.appendChild(removeButton);

    span.innerText=newTodoObject.text;
    todoList.appendChild(li);

}

function RemoveTodoListItem(event)
{
    const parentListItem=event.target.parentElement;
    const tooListID=parentListItem.id;
    todoArray=todoArray.filter(item=>item.id!==parseInt(tooListID));

    parentListItem.remove();
    SaveTodoList_LocalStorage();
}

todoForm.addEventListener("submit",OnSubmitTodoForm);

const savedTodos=localStorage.getItem(TODOS_KEY);
if(savedTodos!==null)
{
    const parsedTodos=JSON.parse(savedTodos);
    todoArray=parsedTodos;
    parsedTodos.forEach((element)=>
    {
        ShowTodolist(element);
    });
}