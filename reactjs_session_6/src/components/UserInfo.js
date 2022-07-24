import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../App'
import UserId from './UserId'

const UserInfo = () => {
    // localStorage
    // const name = localStorage.getItem("username")
    // const password = localStorage.getItem("password")

    // Context API
    const contextVal = useContext(UserContext)
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        if (contextVal) {
            setName(contextVal.name)
            setPassword(contextVal.password)
        }
    }, [contextVal]);
    return (
        <div>
            <div>
                User Name: {name}
            </div>
            <div>
                Password: {password}
            </div>
            <UserId />
        </div>
    )
}

export default UserInfo