import { TodoCounter } from "./Component/TodoCounter";
import { TodoSearch } from "./Component/TodoSearch";
import { TodoList } from "./Component/TodoList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>
      <CreateTodoButton />
    </div>
  );
}
function TodoItem() {
  return (
    <li>
      <span>V</span>
      <p>Hola como estas</p>
      <span>X</span>
    </li>
  );
}

function CreateTodoButton() {
  return <h1>hola</h1>;
}

export default App;
