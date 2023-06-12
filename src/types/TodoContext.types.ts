import { ReactNode } from 'react';
import { TodoList, TodoItemProps } from './Todo.types';

export interface Props {
  children: ReactNode;
}

export type TodoFilterType = 0 | 1 | 2

export interface ContextData {
  activeTodoCount: number;
  todoList: TodoList;
  handleClearComplete: () => void;
  handleTodoUpdate: (id: string, newValue: string) => void;
  handleTodoAdd: (todoParams: TodoItemProps) => void;
  handleTodoComplete: (id: string) => void;
  handleTodoRemove: (id: string) => void;
  handleFilter: (filterId: TodoFilterType) => void;
}