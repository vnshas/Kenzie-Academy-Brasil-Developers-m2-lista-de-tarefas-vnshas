const tasks = [
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"},
];

function renderElements(tasks){
  const myUL = document.querySelector(".tasks__list")
  console.log(typeof(myUL))
  for(let i = 0;i < tasks.length;i++){
    const newLi = createTaskItem(tasks[i])
    document.myUL.appendChild(newLi)
  }
}

function createTaskItem(object){
  const listItem = document.createElement("li")
  const containerItem = document.createElement("div")
  const taskSpan = document.createElement("span")
  const taskTitle = document.createElement("p")
  const removeTask = document.createElement("button")
  listItem.classList.toggle("task__item")
  containerItem.classList.toggle("task-info__container")
  taskSpan.classList.toggle("task-type")
  removeTask.classList.toggle("task__button--remove-task")

  
  
  const taskType = object.type
  

  if (taskType == "urgente"){
    taskSpan.classList.toggle("span-urgent")
  }
  else if(taskType == "importante"){
    taskSpan.classList.toggle("span-important")
  }
  else{
    taskSpan.classList.toggle("span-normal")
  }

  taskTitle.innerText = object.title

  listItem.appendChild(containerItem)
  listItem.appendChild(removeTask)
  containerItem.appendChild(taskSpan)
  containerItem.appendChild(taskTitle)
}


renderElements(tasks)
