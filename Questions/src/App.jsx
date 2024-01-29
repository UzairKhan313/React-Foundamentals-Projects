import { useState } from 'react'
import data from './data'
import Questions from './components/Questions'

const App = () => {
  const [questions, setQuestions] = useState(data)
  const [activeId, setActiveId] = useState(null)

  const changeActiveIdHandler = (id) => {
    const newQuestionId = id
    if (newQuestionId === activeId) {
      setActiveId(null)
    } else {
      setActiveId(id)
    }
  }

  return (
    <main>
      <Questions
        questions={questions}
        activeId={activeId}
        onChangeToggleId={changeActiveIdHandler}
      />
    </main>
  )
}
export default App
