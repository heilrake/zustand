import { nanoid } from 'nanoid';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { ITodo, IFilterState } from '../typing/models';

interface TodoState {
  todos: ITodo[];
  addTodo: (title: string) => void;
  //   removeTodo: (id: string) => void;
  toggleCompletedTodo: (id: string) => void;
  fetchTodos: () => void;
}

export const useTodosStore = create(
  devtools<TodoState>((set, get) => ({
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

    fetchTodos: async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/?_limit=10');

        if (!res.ok) throw new Error('Failed to fetch! Try again!');
        set({ todos: await res.json() });
      } catch (error) {
        console.log(error);
      }
    },
  })),
);

export const useFilterStore = create<IFilterState>((set) => ({
  filter: 'all',

  setFilter: (value: string) => set({ filter: value }),
}));
