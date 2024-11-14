import styles from './tasks.module.css'
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";

function Tasks({ tasks, onTaskClick, deleteTask }) {
    return (
        <>
            <div className={styles.container}>
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>
                            <div className={styles.items}>
                                <button onClick={() => onTaskClick(task.id)} className={`${styles.task_title} ${task.isCompleted && styles.line}`}>
                                    {task.title}
                                </button>
                                <button className={styles.task_description}><MdKeyboardArrowRight /></button>
                                <button onClick={() => deleteTask(task.id)} className={styles.task_description}><FaRegTrashAlt /></button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Tasks
