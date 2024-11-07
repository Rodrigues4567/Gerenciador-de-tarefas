import styles from './tasks.module.css'
import { MdKeyboardArrowRight } from "react-icons/md";

function Tasks(props) {
    return (
        <>
            <div className={styles.container}>
                <ul>
                    {props.tasks.map((task) => (
                        <li key={task.id}>
                            <div className={styles.items}>
                                <button className={styles.task_title}>{task.title}</button>
                                <button className={styles.task_description}><MdKeyboardArrowRight /></button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Tasks
