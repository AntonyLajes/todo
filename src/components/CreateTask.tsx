import { FormEvent, useState } from 'react'
import styles from './CreateTask.module.css'

export function CreateTask({createTask}: {createTask: (taskContent: string) => void}){
    
    const [inputValue, setInputValue] = useState('')

    function onCreateTask(e: FormEvent<HTMLFormElement>){
        e.preventDefault()
        createTask(inputValue)
        setInputValue('')
    }
    
    return (
        <div className={styles.container}>
            <form action="submit" onSubmit={e => onCreateTask(e)}>
                <input 
                    type="text"
                    placeholder='Adicione uma nova tarefa' 
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)}
                    required
                />
                <button type="submit">Criar</button>
            </form>
        </div>
    )
}