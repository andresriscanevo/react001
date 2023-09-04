import "./TodoCounter.css";

function TodoCounter({ total, completed }) {
  return (
    <h1 className="TodoCounter">
      Has completado <span>{completed}</span> TODO de <span>{total}</span>
    </h1>
  );
}
export { TodoCounter };
