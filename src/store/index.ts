import { filter } from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import { create } from 'zustand';
import { ITodo } from '../typing/models';

interface TodoState {
  todos: ITodo[];
  addTodo: (title: string) => void;
  //   removeTodo: (id: string) => void;
  toggleCompletedTodo: (id: string) => void;
}

interface IFilterState {
  filter: string;
  setFilter: (value: string) => void;
}

export const useTodosStore = create<TodoState>((set, get) => ({
  todos: [
    { id: '1', title: 'Learn js', completed: true },
    { id: '2', title: 'Learn js', completed: true },
  ],

  // addTodo: (title: string) =>
  //   set((state) => {
  //     const newTodo = { id: nanoid(), title, completed: false } as ITodo;

  //     return { todos: [...state.todos, newTodo] };
  //   }),
  // addTodo: (title: string) => {
  //   set((state) => ({
  //     todos: [
  //       ...state.todos,
  //       {
  //         id: nanoid(),
  //         title,
  //         completed: false,
  //       } as ITodo,
  //     ],
  //   }));
  // },
  addTodo: (title: string) => {
    const newTodo = { id: nanoid(), title, completed: false } as ITodo;
    set({ todos: [...get().todos, newTodo] });
  },

  toggleCompletedTodo: (id: string) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? ({ ...todo, completed: !todo.completed } as ITodo) : todo,
      ),
    }));
  },
}));

export const useFilterStore = create<IFilterState>((set) => ({
  filter: 'all',

  setFilter: (value: string) => set({ filter: value }),
}));
