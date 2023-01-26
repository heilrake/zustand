import { FC } from 'react';
import { Text } from '@chakra-ui/react';
import { useTodosStore } from '../store';

const TotalTodos: FC = () => {
  const count = useTodosStore((state) => state.todos.length);
  return <Text fontWeight="bold">Total: {count}</Text>;
};

export default TotalTodos;
