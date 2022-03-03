import TodoListItem from './TodoListItem';
import styled from 'styled-components';

export default function TodoList({ todos, onRemove, onToggle, onEdit }) {
  return (
    <TodoListWrap>
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
          onEdit={onEdit}
        />
      ))}
    </TodoListWrap>
  );
}

const TodoListWrap = styled.div`
  padding: 0 0.5rem;
`;
