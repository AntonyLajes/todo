import { EmptyTaskList } from './EmptyTaskList'
import { Task } from './Task'
import { TaskInfo } from '../interfaces/TaskInfo'
import styles from './TasksField.module.css'
import { TasksFieldHeader } from './TasksFieldHeader'

export function TasksField({tasks, onChangeValue}: {tasks: Array<TaskInfo>, onChangeValue: (task: TaskInfo, actionType: string) => void}){

    const sortedTasks: Array<TaskInfo> = tasks.sort((a, b) => {
        if (a.isDone === b.isDone) {
          return 0;
        }
        return a.isDone ? 1 : -1;
      });

    return (
        <>
            <header className={styles.header}>
                <TasksFieldHeader tasks={sortedTasks}/>
            </header>
            <section className={styles.section}>
                {
                    sortedTasks.length > 0
                    ? sortedTasks.map(
                        task => <Task 
                                    key={task.id} 
                                    task={task} 
                                    onChangeValue={(taskDetails, actionType) => onChangeValue(taskDetails, actionType)}
                                />
                        )
                    : <EmptyTaskList/>
                }
            </section>
        </>
    )
}