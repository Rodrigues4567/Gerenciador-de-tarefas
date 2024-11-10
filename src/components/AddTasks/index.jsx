import { useState } from 'react'
import styles from './addTask.module.css'

function AddTask(props) {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    
    return (
        <>
            <div className={styles.container}>
                <div className={styles.inputs}>
                    <input type="text" className={styles.input_text} placeholder='Digite o título da tarefa' onChange={(event) => setTitle(event.target.value)} />

                    <input type="text" className={styles.input_text} placeholder='Digite a descrição da tarefa' onChange={(event) => setDescription(event.target.value)} />

                    <input onClick={() => props.onAddTaskSubmit(title, description)} className={styles.button} type="submit" value="Adicionar" />
                </div>
            </div>
        </>
    )
}

export default AddTask
