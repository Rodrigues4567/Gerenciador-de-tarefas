import { useState } from 'react'
import './App.css'
import AddTask from './components/AddTasks'
import Tasks from './components/tasks'


function App() {
  const [tasks, setTasks] = useState([{
    id: 0,
    title: 'Ler livro de algoritmos',
    description: 'Ler dois capitulos do livro',
    isCompleted: false
  }, 
  {
    id: 1,
    title: 'Estudar Javascript',
    description: 'Ver uma video-aula do curso em video',
    isCompleted: false
  },
  {
    id: 2,
    title: 'Lavar a louça',
    description: 'lavar as 15h',
    isCompleted: false
  }])

  // Função para marcar uma tarefa como finalizada (atualiza o estado)
  function onTaskClick(taskId) {
    const newTask = tasks.map((task) => {
      if (task.id == taskId) {
        return {...task, isCompleted: !task.isCompleted}
      }
      return task
    })

    setTasks(() => newTask)
  }

  // Função para deletar uma tarefa
  function deleteTask(taskId) {
    const newDelete = tasks.filter((task) => task.id !== taskId)

    setTasks(() => newDelete)
  }

  // Adicionar nova tarefa
  function onAddTaskSubmit(title, description) {
    const addTask = {
      id: tasks.length + 1,
      title: title,
      description: description,
      isCompleted: false
    }

    setTasks(() => [...tasks, addTask])
  }

  return (
    <>
      <h1>Gerenciador de tarefas</h1>
      <AddTask onAddTaskSubmit={onAddTaskSubmit} />
      <Tasks tasks={tasks} onTaskClick={onTaskClick} deleteTask={deleteTask} />
    </>
  )
}

export default App
