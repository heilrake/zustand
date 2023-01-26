import { FC } from 'react';
import { Stack } from '@chakra-ui/react';
import { useFilterStore, useTodosStore } from '../store';
import { ITodo } from '../typing/models';
import Todo from './Todo';

const TodoList: FC = () => {
  const filter = useFilterStore((state) => state.filter);
  const todos = useTodosStore((state) => {
    switch (filter) {
      case 'completed':
        return state.todos.filter((todo) => todo.completed);
      case 'uncompleted':
        return state.todos.filter((todo) => !todo.completed);

      default:
        return state.todos;
    }
  });

  return (
    <Stack minH="300px">
      {todos.map((todo: ITodo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </Stack>
  );
};

export default TodoList;
