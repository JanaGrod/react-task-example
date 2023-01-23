// se puede borrar el div porque igual esta todo contenido dentro del form


//para acceder al context en el q esta contenido todos los componentes, como este tambien
import {useState, useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskForm() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    //seria el valor que tiene el usecontext, que son los componentes del arreglo task, la funcion delete y create
    const {createTask} = useContext(TaskContext)

     // para acceder al valor que esta en el context. y de todo el objeto solo queremos el createtask
    

    const handleSubmit = (e) => {
        e.preventDefault()  
     //const newTask = {
        // title
     //}
     createTask({
         title, 
         description
     }); // para que al llenar los campos, esten vacios y no queden con el valor anterior 
     setTitle("")
     setDescription("")
     };
    
  return (
    <div className = "max-w-md mx-auto">
      <form on Submit = {handleSubmit} className = "bg-slate-800 p-10 mb-4">
          <h1 className = "text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
          <input placeholder = "Escribe tu tarea" 
          onChange = {(e) => setTitle(e.target.value) }
          value ={title}
          autoFocus
          className = "bg-slate-300 pd-3 w-full mb-2"//para que el cursor se ponga al principio
          />
          <textarea placeholder="Escribe la descripcion de la tarea" 
          className = "bg-slate-300 pd-3 w-full mb-2" onChange = {(e) => setDescription(e.target.value)}
          value = {description}
          ></textarea>
          <button className = "bg-indigo-500 px-3 py-1 text-white">
              Guardar
          </button>
      </form>
      </div>
    
  )
}

export default TaskForm
