import { v1 as uuidv1 } from 'uuid';

export const addTodo = (inputValue, todos, setTodos, setInputValue) => {
  const updatedTodo = [{ todoText: inputValue, id: uuidv1() }, ...todos];
  setTodos(updatedTodo);
  setInputValue('');
};

export const deleteTodo = (id, todos, setTodos) => {
  const filteredTodos = todos.filter((i) => i.id !== id);
  setTodos(filteredTodos);
};

export const checkTodo = (id, completed, setCompleted) => {
  if (completed.includes(id)) {
    setCompleted(completed.filter((c) => c !== id));
  } else {
    setCompleted([...completed, id]);
  }
};
