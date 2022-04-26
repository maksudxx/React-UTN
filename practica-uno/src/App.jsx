import "./App.css";
import { Counter } from "./components/counter/Counter";
import { Form } from "./components/form/Form";
import { Info } from "./components/info/Info";

function App() {
  return (
    <div className="App">
      {/* punto 2 */}
      <Form />
      <Info />
      <Counter />
    </div>
  );
}

export default App;
