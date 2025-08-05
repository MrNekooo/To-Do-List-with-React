import { useState } from "react"

function Main(){

  
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState("")

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

  
  return (
    <>
    <div      className="flex items-center justify-center max-w-lg gap-5 bg-white rounded-md">
    
      <input  type="text"
              placeholder="Enter your Task ..."
              value={newTask}
              onChange={handleInputChange}
              className="h-full px-2 text-black rounded-md outline-none"
      />
      
      <button type="submit"
              onClick={addTask}
              className="h-full px-3 py-1 font-bold text-white transition-all ease-in delay-100 bg-blue-600 rounded-md hover:bg-blue-800">
        Add
      </button>
      
    </div>
    
    <ul       className="flex flex-col gap-2 mt-10">
      {tasks.map((task, index) => (
        
        <li   key={index}
              className="flex items-center justify-center gap-5 p-4 text-black bg-white rounded-md">
        
          <div className="font-bold"> {task} </div>
          
          
          <button type="submit"
                  onClick={() => deleteTask(index)}
                  className="px-3 py-1 font-bold text-white bg-red-600 rounded-md" >
            DELETE
          </button>
          
          <button type="submit"
                  className="px-3 py-1 font-bold text-white bg-blue-600 rounded-md" >
            GO UP
          </button>
          
          <button type="submit"
                  className="px-3 py-1 font-bold text-white bg-blue-600 rounded-md" >
            Go DOWN
          </button>
        </li>
        
      ))} 
    </ul>
    
    </>
  )
}

export default Main