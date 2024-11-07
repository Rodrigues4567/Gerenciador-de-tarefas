import { useState } from 'react'
import './App.css'
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

  return (
    <>
      <h1>Gerenciador de tarefas</h1>
      <Tasks tasks={tasks} />
    </>
  )
}

export default App
