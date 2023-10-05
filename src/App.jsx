import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <div className="container">
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
