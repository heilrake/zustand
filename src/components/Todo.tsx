import { FC } from 'react';
import { Checkbox, HStack, Text } from '@chakra-ui/react';
import { ITodo } from '../typing/models';
import { useTodosStore } from '../store';

const Todo: FC<ITodo> = ({ id, title, completed }) => {
  const toggleTodo = useTodosStore((state) => state.toggleCompletedTodo);

  return (
    <HStack spacing={4}>
      <Checkbox isChecked={completed} onChange={() => toggleTodo(id)} />
      <Text>{title}</Text>
    </HStack>
  );
};

export default Todo;
