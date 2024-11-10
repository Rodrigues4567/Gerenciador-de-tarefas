import styles from './addTask.module.css'

function AddTask(props) {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.inputs}>
                    <input type="text" className={styles.input_text} placeholder='Digite o título da tarefa' />
                    <input type="text" className={styles.input_text} placeholder='Digite a descrição da tarefa' />
                    <input className={styles.button} type="submit" value="Adicionar" />
                </div>
            </div>
        </>
    )
}

export default AddTask
