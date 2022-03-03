import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useCallback, useRef, useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'kpop 강의 듣기',
      checked: false,
    },
    {
      id: 2,
      text: '영화 보기',
      checked: false,
    },
    {
      id: 3,
      text: 'React 복습하기',
      checked: true,
    },
    {
      id: 4,
      text: '음악 감상',
      checked: true,
    },
  ]);

  const nextId = useRef(5);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text: text,
        checked: false,
      };

      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  const onRemove = useCallback(
    (id) => setTodos(todos.filter((todo) => id !== todo.id)),
    [todos],
  );

  const onToggle = useCallback(
    (id) =>
      setTodos(
        todos.map((todo) =>
          id === todo.id ? { ...todo, checked: !todo.checked } : todo,
        ),
      ),
    [todos],
  );

  const onEdit = useCallback(
    (id, value) =>
      setTodos(
        todos.map((todo) => (id === todo.id ? { ...todo, text: value } : todo)),
      ),
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList
        todos={todos}
        onRemove={onRemove}
        onToggle={onToggle}
        onEdit={onEdit}
      />
    </TodoTemplate>
  );
}

export default App;
