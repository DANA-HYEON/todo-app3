import styled, { css } from 'styled-components';
import {
  MdOutlineCheckBoxOutlineBlank,
  MdCheckBox,
  MdOutlineIndeterminateCheckBox,
  MdOutlineModeEditOutline,
} from 'react-icons/md';
import cn from 'classnames';
import { useState, useRef, useEffect, useCallback } from 'react';

export default function TodoListItem({ todo, onRemove, onToggle, onEdit }) {
  const { id, text, checked } = todo;

  const [tagName, setTagName] = useState('p');
  const [value, setValue] = useState(text);

  const inputRef = useRef();

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onEditText = () => {
    if (tagName === 'input') {
      console.log('render');
      inputRef.current.focus();
    } else {
      setTagName('input');
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onEdit(id, value);
    setTagName('p');
  };

  useEffect(() => {
    inputRef.current.focus();
  }, [tagName]);

  return (
    <TodoListItemWrap>
      <TodoListItemTextCover
        className={cn(checked, { checked })}
        onClick={() => onToggle(id)}
        onSubmit={onSubmit}
      >
        {checked ? <MdCheckBox /> : <MdOutlineCheckBoxOutlineBlank />}
        <TodoListItemText
          ref={inputRef}
          as={tagName}
          value={value}
          onChange={onChange}
          className={tagName === 'input' ? 'inputStyle' : null}
        >
          {tagName === 'p' ? text : null}
        </TodoListItemText>
      </TodoListItemTextCover>
      <TodoListItemIconCover>
        <MdOutlineModeEditOutline
          onClick={onEditText}
          className={tagName === 'input' ? 'inputStyle' : null}
        />
        <MdOutlineIndeterminateCheckBox onClick={() => onRemove(id)} />
      </TodoListItemIconCover>
    </TodoListItemWrap>
  );
}

const TodoListItemWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;

  & + & {
    border-top: 1px solid gray;
  }
`;

const TodoListItemTextCover = styled.form`
  display: flex;
  align-items: center;
  flex: 1;
  cursor: pointer;
  &:hover {
    color: #7cddac;
  }
  &.checked {
    p {
      text-decoration: line-through;
      color: gray;
    }
  }
  svg {
    font-size: 1.5rem;
    margin-right: 1rem;
  }
`;

const TodoListItemText = styled.p`
  font-weight: bold;

  &.inputStyle {
    font-size: 16px;
    border: none;
    border-bottom: 1px solid green;
    outline: none;
    padding: 0.125rem;
    color: green;
    margin: 16px 0;
  }
`;

const TodoListItemIconCover = styled.div`
  display: flex;
  gap: 10px;
  svg {
    font-size: 1.5rem;
    cursor: pointer;
    &:nth-child(1) {
      &:hover {
        color: green;
      }
      &.inputStyle {
        color: green;
      }
    }
    &:nth-child(2) {
      &:hover {
        color: red;
      }
    }
  }
`;
