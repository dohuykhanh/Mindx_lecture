import React, {useState} from "react";

const AddJob = (props) => {
    const {addJob} = props
    const [text, setText] = useState('');

    const onClickAddJob = () => {
        const payload = {
            name: text
        }
        addJob(payload)
    }

    const onChangeText = (event) => {

        setText(event.target.value)
    }
    return (
        <div className="fl">
            <input onChange={onChangeText} type="text" className="mr-10" placeholder="Please insert job ..."/>
            <button className="mr-10" onClick={onClickAddJob}>
                Add Job
            </button>
        </div>
    )
}

export default AddJob
