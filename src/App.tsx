import { Header } from './components/Header'
import { CreateTask } from './components/CreateTask'
import styles from './App.module.css'
import { TasksField } from './components/TasksField'
import { useState } from 'react'
import { TaskInfo } from './interfaces/TaskInfo'

function App() {
  
  const [tasks, setTasks] = useState<Array<TaskInfo>>(
    [
      {
        id: 1,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex animi error quisquam porro dignissimos, doloremque asperiores tempora voluptatem ea quasi!",
        isDone: true
      },
      {
        id: 2,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex animi error quisquam porro dignissimos, doloremque asperiores tempora voluptatem ea quasi!",
        isDone: false
      },
      {
        id: 3,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex animi error quisquam porro dignissimos, doloremque asperiores tempora voluptatem ea quasi!",
        isDone: true
      },
      {
        id: 4,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex animi error quisquam porro dignissimos, doloremque asperiores tempora voluptatem ea quasi!",
        isDone: true
      },
      {
        id: 5,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex animi error quisquam porro dignissimos, doloremque asperiores tempora voluptatem ea quasi!",
        isDone: false
      },
      {
        id: 6,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex animi error quisquam porro dignissimos, doloremque asperiores tempora voluptatem ea quasi!",
        isDone: false
      },
    ]
  )

  function changeTaskValue(task: TaskInfo, actionType: string){
    const changedTask: Array<TaskInfo> = actionType === 'delete' ? deleteTask(task) : tasks.map(item => {
      if(item.id === task.id){
        return {...item, isDone: !task.isDone}
      }
      return item
    })
    setTasks(changedTask)
  }

  function deleteTask(taskToDelete: TaskInfo){
    return tasks.filter(task => task.id !== taskToDelete.id)
  }

  function createTask(taskContent: string){
    setTasks(
      [...tasks, {
          id: tasks.length + 1,
          description: taskContent,
          isDone: false
        }
      ]
    )
  }
  
  return (
    <>
      <header>
        <Header />
      </header>
      <body className={styles.body}>
        <CreateTask createTask={(taskContent) => createTask(taskContent)} />
        <TasksField tasks={tasks} onChangeValue={(taskDetails, actionType) => changeTaskValue(taskDetails, actionType)}/>
      </body>
    </>
  )
}

export default App
