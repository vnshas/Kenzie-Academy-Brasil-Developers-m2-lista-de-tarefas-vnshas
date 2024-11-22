const tasks = [
  
  /*{title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"},*/
];

const form = document.querySelector(".form__container")



function renderElements(tasks){
  const myUL = document.querySelector(".tasks__list")
  //console.log(typeof(myUL))
  for(let i = 0;i < tasks.length;i++){
    //console.log(tasks[i].title)
    const newLi = createTaskItem(tasks[i])
    //console.log(newLi)
    myUL.appendChild(newLi)
  }
  
}

function createTaskItem(object){
  //console.log(object)
  const listItem = document.createElement("li")
  const containerItem = document.createElement("div")
  const taskSpan = document.createElement("span")
  const taskTitle = document.createElement("p")
  const removeTask = document.createElement("button")
  listItem.classList.toggle("task__item")
  containerItem.classList.toggle("task-info__container")
  taskSpan.classList.toggle("task-type")
  removeTask.classList.toggle("task__button--remove-task")

  
 
  
  document.addEventListener("click", (e) =>{
    const targetEl = e.target
    const parentEL = targetEl.closest("li")

    
    if (targetEl.classList.contains("task__button--remove-task")){
      parentEL.remove()
      
    }
  
  })
    

  
  
  const taskType = object.type
 
 
  if (taskType == "Urgente"){
      taskSpan.classList.toggle("span-urgent")
  }
  else if(taskType == "Importante"){
      taskSpan.classList.toggle("span-important")
  }
  else if (taskType == "Normal"){
      taskSpan.classList.toggle("span-normal")
  }
  
  

  taskTitle.innerText = object.title

  listItem.appendChild(containerItem)
  containerItem.appendChild(taskSpan)
  containerItem.appendChild(taskTitle)
  listItem.appendChild(removeTask)

  
  //const myUL = document.querySelector(".tasks__list")
  return listItem

  
}





form.addEventListener("submit",function(event){
  event.preventDefault()

  const inputTask = document.querySelector(".form__input--text")
  const selectTask = document.querySelector(".form__input--priority")
  
 
  tasks.push({"title":inputTask.value, "type": selectTask.value})
  
  
  renderElements(tasks)
  //console.log(tasks)
  tasks.pop()
  
})

