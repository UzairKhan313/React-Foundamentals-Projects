import { useState, useEffect } from 'react'
import JobInfo from './components/JobInfo'
import BtnContainer from './components/BtnContainer'

const url = 'https://course-api.com/react-tabs-project'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [currentJob, setCurrentJob] = useState(1)

  // current items.
  const setCurrentItemHandler = (jobNum) => {
    setCurrentJob(jobNum)
  }

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
      <BtnContainer
        jobs={jobs}
        currentJob={currentJob}
        onSetCurrentJob={setCurrentItemHandler}
      />
      <JobInfo jobs={jobs} currentJob={currentJob} />
    </section>
  )
}
export default App
