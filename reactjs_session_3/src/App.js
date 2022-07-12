import './App.css';
import AddJob from './components/AddJob';
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

  const updateJob = (id, jobname)  => {
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
      </div>
      {jobList.map((job) => <JobDetail updateJob={updateJob} id={job.id} job={job.name} key={job.id} 
      deleteJob={deleteJob}/>)}

<Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default App;
