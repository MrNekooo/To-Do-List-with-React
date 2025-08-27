import { useState } from "react"
import { useColor } from "./ColorMode"

function Main(){

  
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState("")
  const {mode, setMode} = useColor();

  function handleInputChange(e){
    setNewTask(e.target.value)
  }

  function addTask(){
    
    if(newTask.trim() !== ""){
      
              // need Updater Function
      setTasks(t => [...t, newTask])
      setNewTask("")
    }
    
  }

  function deleteTask(index){
    
                                      // need two arquments, but "_" it means "IGNORE ME"
    const updatedTasks = tasks.filter((_,i) => i !== index)
    setTasks(updatedTasks)
    
  }

  function moveUp(index){
    
    if(index > 0){
      const updatedTasks = [...tasks];

      [updatedTasks[index], updatedTasks[index - 1]] =
      [updatedTasks[index - 1], updatedTasks[index]]
      
      setTasks(updatedTasks)
    }
    
  }

  function moveDown(index){

    if(index < tasks.length - 1){
      const updatedTasks = [...tasks];

      [updatedTasks[index], updatedTasks[index + 1]] =
      [updatedTasks[index + 1], updatedTasks[index]]
      
      setTasks(updatedTasks)
    }
    
  }

  
  return (
    <div className={` flex flex-col items-center justify-center h-screen 
                        ${mode === "dark"
                        ? "text-white bg-black"
                        : "text-black bg-white"}`}>

    <div className="flex flex-col gap-3">
      <button onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`px-3 py-1 font-bold rounded-lg transition-all ease-in delay-75  
                            ${mode === "dark" 
                            ? "bg-teal-500 text-white hover:bg-teal-700"
                            : "bg-white text-black hover:bg-gray-400"}`} >
        Change mode
      </button>
      <h1 className={`mb-10 text-6xl font-bold`}>
        To Do List
      </h1> 
    </div>
    
    <div      className="flex items-center justify-center max-w-lg gap-5 bg-white rounded-md">
    
      <input  type="text"
              placeholder="Enter your Task ..."
              value={newTask}
              onChange={handleInputChange}
              className="h-full px-2 text-black rounded-md outline-none"
      />
      
      <button type="submit"
              onClick={addTask}
              className="h-full px-3 py-1 font-bold text-white transition-all ease-in delay-75 bg-teal-500 rounded-md hover:bg-teal-700">
        Add
      </button>
      
    </div>
    
    <ul       className="flex flex-col gap-2 mt-10">
      {tasks.map((task, index) => (
        
        <li   key={index}
              className={`flex items-center justify-center gap-5 p-4 rounded-md
                            ${mode === "dark"
                            ? "text-black bg-gray-700"
                            : "text-black bg-white"}`}>
        
          <div className={`font-bold
                            ${mode === "dark"
                            ? "text-white"
                            : "text-black"}`}> 
            {task} 
          </div>
          
          
          <button type="submit"
                  onClick={() => deleteTask(index)}
                  className="px-3 py-1 font-bold text-white transition-all ease-in delay-75 bg-red-600 rounded-md hover:bg-red-800" >
            DELETE
          </button>
          
          <button type="submit"
                  className="px-3 py-1 font-bold text-white transition-all ease-in delay-75 bg-teal-500 rounded-md hover:bg-teal-700" 
                  onClick={() => moveUp(index)}>
            GO UP
          </button>
          
          <button type="submit"
                  className="px-3 py-1 font-bold text-white transition-all ease-in delay-75 bg-teal-500 rounded-md hover:bg-teal-700" 
                  onClick={() => moveDown(index)}>
            GO DOWN
          </button>
        </li>
        
      ))} 
    </ul>
    
    <p className="mt-5 text-sm">CopyRight &copy;Nekooo {new Date().getFullYear()}</p>
    </div>
  )
}

export default Main