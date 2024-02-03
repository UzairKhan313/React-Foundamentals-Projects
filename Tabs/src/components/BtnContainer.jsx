import React from 'react'

const BtnContainer = ({ jobs, currentJob, onSetCurrentJob }) => {
  return (
    <div className="btn-container">
      {jobs.map((job, index) => {
        return (
          <button
            key={job.id}
            className={`job-btn ${currentJob === index ? 'active-btn' : ''}`}
            onClick={() => {
              onSetCurrentJob(index)
            }}
          >
            {job.company}
          </button>
        )
      })}
    </div>
  )
}

export default BtnContainer
