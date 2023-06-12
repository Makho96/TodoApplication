import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import {Props, ContextData, TodoFilterType} from '../../types/TodoContext.types';
import { TodoItemProps, TodoList } from '../../types/Todo.types';


const TodoContext = createContext<ContextData>({
  activeTodoCount: 0,
  todoList: [],
  handleTodoUpdate: () => null,
  handleTodoAdd: () => null,
  handleTodoComplete: () => null,
  handleTodoRemove: () => null,
  handleClearComplete: () => null,
  handleFilter: () => null
})

export const TodoContextProvider = ({children}: Props) => {
  const [todoList, setTodoList] = useState<TodoList>([]);
  const [backupList, setbackupList] = useState<TodoList>([]);
  const [activeTodoCount, setActiveTodoCount] = useState(0);

  useEffect(() => {
    const activeCount = todoList.reduce((accumulator, todo) => {
      return !todo.isComplete ? accumulator + 1 : accumulator
    }, 0)
    setActiveTodoCount(activeCount)
  }, [todoList])

  const handleTodoAdd = useCallback((todoParams: TodoItemProps) => {
    setTodoList(prevState => [...prevState, todoParams])
    setbackupList(prevState => [...prevState, todoParams])
  }, []);

  const handleTodoUpdate = useCallback((id: string, newValue: string) => {
    setTodoList(prevState => [...prevState.map((todoItem) => {
        return {
          ...todoItem,
          value: id === todoItem.id ? newValue : todoItem.value
        }
      })
    ]);
    setbackupList(prevState => [...prevState.map((todoItem) => {
        return {
          ...todoItem,
          value: id === todoItem.id ? newValue : todoItem.value
        }
      })
    ]);
  }, [])

  const handleClearComplete = useCallback(() => {
    setTodoList(prevState => [...prevState.filter(todoItem => !todoItem.isComplete)])
    setbackupList(prevState => [...prevState.filter(todoItem => !todoItem.isComplete)])
  }, [])

  const handleTodoComplete = useCallback((id: string) => {
    setTodoList(prevState => [...prevState.map((todoItem) => {
        return {
          ...todoItem,
          isComplete: id === todoItem.id ? !todoItem.isComplete : todoItem.isComplete
        }
      })
    ]);
    setbackupList(prevState => [...prevState.map((todoItem) => {
        return {
          ...todoItem,
          isComplete: id === todoItem.id ? !todoItem.isComplete : todoItem.isComplete
        }
      })
    ]);
  }, []);

  const handleTodoRemove = useCallback((id: string) => {
    setTodoList(prevState => [...prevState.filter(todoItem => todoItem.id !== id)])
    setbackupList(prevState => [...prevState.filter(todoItem => todoItem.id !== id)])
  }, [])

  const handleFilter = useCallback((filterId: TodoFilterType) => {
    if (filterId === 0) {
      setTodoList(backupList) 
      return
    }
    if (filterId === 1) {
      setTodoList([...backupList.filter(todoItem => !todoItem.isComplete)])
      return
    }
    if (filterId === 2) {
      setTodoList([...backupList.filter(todoItem => todoItem.isComplete)])
      return      
    }
  }, [backupList])


  return (
    <TodoContext.Provider
      value = {{
        activeTodoCount,
        todoList,
        handleClearComplete,
        handleTodoAdd,
        handleTodoUpdate,
        handleTodoComplete,
        handleTodoRemove,
        handleFilter
      }}>
      {children}
    </TodoContext.Provider>
  );
}

const useTodos = () => useContext(TodoContext)

export default useTodos