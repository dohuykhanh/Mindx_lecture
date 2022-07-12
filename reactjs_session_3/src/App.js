import './App.css';
import AddJob from './components/AddJob';
import UpdateJob from './components/UpdateJob';
import JobDetail from './components/JobDetail';
import {useState} from 'react'

function App() {
  const [jobList, setJobList] = useState([
    {
      id: 1,
      name: 'This is job number 1'
    },
    {
      id: 2,
      name: 'This is job number 2'
    },
    {
      id: 3,
      name: 'This is job number 3'
    },
    {
      id: 4,
      name: 'This is job number 4'
    },
  ]);

  const addJob = (job) => {
    console.log('job', job) // Output: This is new job
    job.id = jobList.length + 1
    setJobList([...jobList, job])
  }

  const updateJobAnotherVersion = (id, jobname)  => {
    const newJobList = [...jobList]
    newJobList.forEach(el => {
      if (el.id === id) {
        el.name = jobname
      }
    })
    setJobList(newJobList)
  }

  const deleteJob = (id) => {
    const newJobList = jobList.filter(el => {
      return el.id !== id
    })
    setJobList(newJobList)
  }
  return (
    <div className="App">
      <div className='fl'>
        <AddJob addJob={addJob}/>
        <UpdateJob />
      </div>
      {jobList.map((job) => <JobDetail id={job.id} job={job.name} key={job.id} 
      deleteJob={deleteJob}/>)}
    </div>
  );
}

export default App;
