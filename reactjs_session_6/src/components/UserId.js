import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";

const UserId = () => {
    // const userId = localStorage.getItem("id")
    const contextVal = useContext(UserContext)
    const [id, setId] = useState("")

    useEffect(() => {
        if (contextVal && contextVal._id ) {
            setId(contextVal._id)
        }
    }, [contextVal]);
    return (
        <div>
            <div>
                {id}
            </div>
        </div>
    )
}

export default UserId