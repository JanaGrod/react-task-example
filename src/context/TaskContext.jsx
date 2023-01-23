
import {createContext, useState, useEffect} from 'react'
import {tasks as data} from '../data/tasks'
//nombre del contexto
export const TaskContext = createContext()

//componente que va a englobar a todos
export function TaskContextProvider(props) {
  const [tasks, setTasks] =useState([]);

  

  function createTask(task){
    setTasks([...tasks,
      {
      title: task.title, 
      id:tasks.length, // esto es para que cada vez que se cree una tarea, le de un id correspondiente diferente. si el arreglo tiene 3 elememtos, al crear una nueva tarea le correspondera el id 4, etc
      description: task.description

    } ])//esto es: que traiga el arreglo de TaskList que se llama tasks, y ademas que agregue una tarea nueva, que la llamamos task q es la q pasamos como parametro en la funcion
  }

  
  function deleteTask(taskId){
    setTasks(tasks.filter(task => task.id !== taskId))


  }
  
    
  useEffect(() =>{
    setTasks(data)
 } , [])
  return (
    //creando ese componente que va a englobar a todos

    //al value de taskcontext se le pasan las funciones de los componentes.
    // el arreglo de tareas,la funcion de crear y de eliminar 
    <TaskContext.Provider value ={{ tasks, 
    deleteTask, 
    createTask}}>
     {props.children}
    </TaskContext.Provider>


  )
}

//export default TaskContext
