import { useState, useEffect } from 'react'
import JobInfo from './components/JobInfo'

const url = 'https://course-api.com/react-tabs-project'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [jobs, setJobs] = useState([])

  // current items.

  const fetchJobs = async () => {
    const response = await fetch(url)
    const newJobs = await response.json()
    setJobs(newJobs)
    setIsLoading(false)
  }
  useEffect(() => {
    fetchJobs()
  }, [])

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading" />
      </section>
    )
  }

  return (
    <section className="jobs-center">
      {/* button container */}
      <JobInfo jobs={jobs} />
    </section>
  )
}
export default App
