import { useState } from 'react'
import HeaderComponent from './components/HeaderComponent'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([{
    id:'1',
    text:'Task 1',
    day:'Monday',
    reminder: false
  }])

  const addTask = (task) =>{
    const id = Math.floor(Math.random() * 10000 + 1)
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id)=>{
    setTasks(tasks.filter((task)=> task.id !==id))
  }

  const ToggleReminder = (id) =>{
    setTasks(
      tasks.map((task)=> 
      task.id === id ? {...task, reminder: 
      !task.reminder} : task
      )
    )
  }

  return (
    <div className="container">
        <HeaderComponent 
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
        />
        {showAddTask && <AddTask onAdd={addTask}/>}
        
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={ToggleReminder}/> : 'No Task to Show'}
        
    </div>
  );
}

export default App;
