import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'


function TaskCard({task}) {
  //desde TaskCard ya tengo acceso al context. por eso react trae la biblioteca useContext, para poder usar el context q contiene este componente
  
  //este valor, es el valor de la variable x q esta en taskcontext
 const {deleteTask} = useContext(TaskContext)
   
  return (
    //como el taskcontext contiene a los elemenos hijos, entonces taskcard al ser elemento hijo va dentro de las etiquetas de taskcontext
    
<div className="bg-gray-800 text-white p-4 rounded-md">
<h1 className = "text-xl font-bold capitalize ">{task.title}</h1>
<p className = "text-gray-500 text-sm">{task.description}</p>
<button className = "bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400" onClick ={() =>deleteTask(task.id)

} 
// una vez que se de el click se va a ejecutar la funcion de delete
>Eliminar tarea</button>
</div>

  );
}

export default TaskCard

