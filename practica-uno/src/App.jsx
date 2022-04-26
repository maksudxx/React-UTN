import "./App.css";
import { Counter } from "./components/counter/Counter";
import { Form } from "./components/form/Form";

function App() {
  return (
    <div className="App">
      {/* punto 2 */}
      <Form />
      <hr />
      <Counter />
      <hr />
    </div>
  );
}

export default App;
