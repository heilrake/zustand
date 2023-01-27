export interface ITodo {
  id: string;
  title: string;
  completed: boolean;
}

export interface IFilterState {
  filter: string;
  setFilter: (value: string) => void;
}
