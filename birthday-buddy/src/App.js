import { useState } from 'react'
import data from './data'
import BirthdayList from './components/BirthdayList'

const App = () => {
  const [people, setPeople] = useState(data)
  const clearListHandler = () => {
    setPeople([])
  }
  return (
    <main>
      <sec className="container">
        <h3>{people.length} Birthdays today</h3>
        <BirthdayList people={people} />
        <button className="btn btn-block" onClick={clearListHandler}>
          Clear List
        </button>
      </sec>
    </main>
  )
}

export default App
