import "./App.css";
import { getUser, getListQuestion } from "./axios/axios.service";
import React, { useEffect, useState } from "react";

function Item (prop) {
  return (
    <div>{prop.text}</div>
  )
}

function App() {
  const [question, setQuestion] = useState();
  const login = async (data) => {
    const respond = await getUser(data);
    if (respond) {
      localStorage.setItem("token", respond.data.accessToken);
    }
  };

  const getQuestion = async () => {
    const respond = await getListQuestion();
    if (respond.status === 200) {
      setQuestion(respond.data);
    }
  };

  useEffect(() => {
    (async function () {
      await login({
        username: "traclam",
        password: "lam123456",
      });
    })();
  }, []);
  return (
    <div className="App">
      <button onClick={async() => await getQuestion()}>Get List Question</button>
      <div>
          {question?.data?.map((el, id) => <Item key={id} text={el.text} />)}
      </div>
    </div>
  );
}

export default App;
