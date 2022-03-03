import styled from 'styled-components';
import { BsPlus } from 'react-icons/bs';
import { useCallback, useState } from 'react';

export default function TodoInsert({ onInsert }) {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (value === '') {
        alert('리스트를 작성해주세요.');
        return;
      }
      onInsert(value);
      setValue('');
    },
    [value, onInsert],
  );
  return (
    <Form onSubmit={onSubmit}>
      <Input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <Button type="submit">
        <BsPlus />
      </Button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: pink;
`;

const Input = styled.input`
  flex: 1;
  padding: 1rem;
  border: none;
  outline: none;
  background: none;
  font-size: 1rem;
`;

const Button = styled.button`
  border: 1px solid red;
  padding: 1rem;
  border: none;
  outline: none;
  background: blueviolet;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: burlywood;
    svg {
      color: black;
    }
  }
  svg {
    font-size: 1.5rem;
    color: white;
  }
`;
