export interface TodoItemProps {
  id: string,
  value: string,
  isComplete: boolean
}

export type TodoList = TodoItemProps[]