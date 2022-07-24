import "./App.css";
import React, { createContext, useState } from "react";
import UserInfo from "./components/UserInfo";

export const UserContext = createContext();
function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userContextValue, setUserContextValue] = useState(null)
  const url = "https://studentmanagement321.herokuapp.com/login";
  const submitForm = async (e) => {
    e.preventDefault();
    const data = {
      name: userName,
      password,
    };
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    response.json().then((val) => {
      // Local Storage
      // localStorage.setItem("username", val.name);
      // localStorage.setItem("password", val.password);
      // localStorage.setItem("id", val._id); 
      // Context API
      setUserContextValue(val)
      console.log('user Context', userContextValue)
    });
  };

  return (
    <div className="App">
      <UserContext.Provider value={userContextValue}>
        <div>
          <span>User name:</span>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <span>Password:</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={(e) => submitForm(e)}>Log in</button>
        <UserInfo />
      </UserContext.Provider>
    </div>
  );
}

export default App;
