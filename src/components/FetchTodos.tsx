import { Button } from '@chakra-ui/react';
import { FC } from 'react';
import { useTodosStore } from '../store';

const FetchTodos: FC = () => {
  const todos = useTodosStore((state) => state.fetchTodos);
  //use shallow from 'zustand/shallow' if you dont want rerender

  return (
    <div>
      <Button onClick={todos}>Get todos</Button>
    </div>
  );
};

export default FetchTodos;
