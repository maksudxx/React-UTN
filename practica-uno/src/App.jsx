import "./App.css";
import { Counter } from "./components/counter/Counter";
import { Form } from "./components/form/Form";
import { Info } from "./components/info/Info";
import { Navbar } from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* punto 2 */}
      <Form />
      {/* Punto 3 */}
      <Info />
      {/* punto 4 */}
      <Counter />
    </div>
  );
}

export default App;
