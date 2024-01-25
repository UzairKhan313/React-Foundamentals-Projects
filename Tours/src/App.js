import { useEffect, useState } from 'react'
import Loading from './components/Loading'
import Tours from './components/Tours'

const url = 'https://course-api.com/react-tours-project'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])

  const fetchTours = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setTours(tours)
      setIsLoading(false)
    } catch (err) {
      console.log(err)
      setIsLoading(false)
    }
  }

  const removeTourHandler = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button
            type="button"
            style={{ marginTop: '2rem' }}
            className="btn"
            onClick={fetchTours}
          >
            Refresh
          </button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <Tours tours={tours} onRemoveTour={removeTourHandler} />
    </main>
  )
}
export default App
