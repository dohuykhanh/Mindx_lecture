import { Provider } from "react-redux";
import "./App.css";
import AddComponent from "./components/AddComponent";
import NumberComponent from "./components/NumberComponent";
import SubtractComponent from "./components/SubtractComponent";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <AddComponent />
          <NumberComponent />
          <SubtractComponent />
        </div>
      </div>
    </Provider>
  );
}

export default App;
