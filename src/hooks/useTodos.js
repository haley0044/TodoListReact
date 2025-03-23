import { useState } from "react";

export function useTodos() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isComposing, setIsComposing] = useState(false);
  const [filter, setFilter] = useState("all");

  const addTodo = () => {
    const trimmedValue = inputValue.trim();
    if (trimmedValue) {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Date.now(), text: trimmedValue, completed: false },
      ]);
      setInputValue("");
    }
  };

  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return {
    todos: filteredTodos,
    inputValue,
    setInputValue,
    isComposing,
    setIsComposing,
    filter,
    setFilter,
    addTodo,
    toggleComplete,
    removeTodo,
    clearCompleted,
  };
}
