import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";

const TodoList = () => {
  const url = "https://jsonplaceholder.typicode.com/todos/";
  const [todos, setTodos] = useState([]);
  const { data, loading, error } = useFetch(url);

  useEffect(() => {
    setTodos(data);
  }, [data]);

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="w-full grid grid-cols-1">
      {loading && <div>Loading the todos...</div>}
      {error && <div>Error occurred while fetching todos.</div>}

      <div className="col-span-1 border border-1 border-black sm:px-5 md:px-5">
        <h2 className="font-bold text-xl">Todos</h2>
        <div>
          {todos?.map((todo) => (
            <div className="ms-3" key={todo.id}>
              <h2 className="font-bold text-lg text-[#25725b41]">
                {todo.title}
              </h2>
              <p>{todo.completed ? "Completed" : "Not Completed"}</p>
              <button
                onClick={() => removeTodo(todo.id)}
                className="bg-red-500 text-white px-4 py-2 rounded mt-2"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;