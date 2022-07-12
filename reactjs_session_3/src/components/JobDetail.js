import React, { useState } from "react";
import removeIcon from "../public/remove.png";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
const JobDetail = (props) => {
  const { job, id, deleteJob, updateJob } = props;
  const [jobName, setJobName] = useState(job)
  const [isShowInput, setIsShowInput] = useState(false);
  const deleteCurrentJob = (id) => {
    deleteJob(id);
  };

  const updateJobInfo = () => {
    updateJob(id, jobName)
  }

  const inputStyle = {
    marginTop: 16,
    marginBottom: 16,
  };
  return (
    <div className="fl ac ">
      {!isShowInput && <p className="mr-10">{job}</p>}
      {isShowInput && <input style={inputStyle} className="mr-10" value={jobName} onChange={(e) => setJobName(e.target.value)}/>}

      <img
        onClick={() => deleteCurrentJob(id)}
        style={{ width: 20, height: 20 }}
        className="mr-10"
        src={removeIcon}
        alt=""
      />
      <Button variant="primary" onClick={() => setIsShowInput(!isShowInput)}>Update</Button>
      {isShowInput && <Button onClick={updateJobInfo}>Confirm</Button>}
      <ButtonGroup aria-label="Basic example">
      <Button variant="secondary">Left</Button>
      <Button variant="secondary">Middle</Button>
      <Button variant="secondary">Right</Button>
    </ButtonGroup>
    </div>
  );
};

export default JobDetail;
