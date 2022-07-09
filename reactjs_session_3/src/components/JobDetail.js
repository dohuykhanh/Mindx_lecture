import React from "react";
import removeIcon from "../public/remove.png"

const JobDetail = (props) => {
    const {job, id, deleteJob} = props 
    const deleteCurrentJob = (id) => {
        deleteJob(id)
    }
    return (
        <div className="fl ac ">
            <p className="mr-10">{job}</p>
            <img onClick={() => deleteCurrentJob(id)} style={{width: 20, height: 20}} className="mr-10" src={removeIcon} alt="" />
            <button>Update</button>
        </div>
    )
}

export default JobDetail