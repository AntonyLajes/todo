import { Trash } from '@phosphor-icons/react'
import styles from './Task.module.css'
import { TaskInfo } from '../interfaces/TaskInfo'

export function Task({task, onChangeValue}: {task: TaskInfo, onChangeValue: (task: TaskInfo, actionType: string) => void}){

    function checkboxClicked(actionType: "update" | "delete"){
        onChangeValue(task, actionType)
    }

    return (
        <div className={styles.centralizeContainer}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <input 
                        type="checkbox" 
                        name="checkbox" 
                        id="checkbox" 
                        checked={task.isDone} 
                        onChange={() => checkboxClicked('update')}
                    />
                    <p className={task.isDone ? styles.taskDescriptionDone : styles.taskDescription}>
                        {task.description}
                    </p>
                    <button onClick={() => checkboxClicked('delete')}>
                        <Trash size={14}/>
                    </button>
                </div>
            </div>
        </div>
    )
}