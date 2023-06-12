import {memo, FC, KeyboardEvent, useState, useCallback, useRef} from 'react';
import useTodos from '../../../store/TodoContext';
import Checkbox from '../../Checkbox';

import { TodoItemProps } from '../../../types/Todo.types';

import { CloseSvg } from '../../../constants/icon';

const TodoItem: FC<TodoItemProps> = (props) => {
  const {id, value, isComplete} = props;
  const [editMode, setEditMode] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const {handleTodoRemove, handleTodoComplete, handleTodoUpdate} = useTodos();
  const inputRef = useRef<HTMLInputElement>(null)
  // console.log(id)

  const editModeHandler = useCallback(() => {
    if (isComplete) return
    setEditMode(true)
    inputRef.current?.focus()
  }, [isComplete, inputRef])

  const todoUpdateHandler = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
    if (event.which === 13) {
      handleTodoUpdate(id, inputValue)
      setEditMode(false)
      return
    }
    if (event.which === 27) {
      setEditMode(false)
      setInputValue(value)
      return
    }
  }, [handleTodoUpdate, id, inputValue, value])

  return (
    <div className='w-full flex justify-between items-center py-4 px-2 group'>
      <div className='w-full flex justify-start items-center text-2xl text-skin-main-color font-normal gap-4'>
        <Checkbox
          id = {id}
          inictalChecked = {isComplete}
          onchange={() => {handleTodoComplete(id)}}
        />
        {editMode ? (
            <input 
              className='border-b border-skin-main-color'
              type='text'
              value={inputValue}
              onKeyUp={todoUpdateHandler}
              onChange={(e) => {setInputValue(e.target.value)}}
              style = {{width: 'calc(100% - 80px)'}}
              ref = {inputRef}
            />
          ) : (
          <label onClick={editModeHandler} className={`${isComplete ? 'line-through text-skin-secondary-color' : ''}`}>
            {value}
          </label>
        )}
      </div>
      <div className='flex justify-end items-center gap-1'>
        <button 
          onClick={() => handleTodoRemove(id)} 
          type='button'
          className='hidden group-hover:block'
          >
          <span className='removeSVG'>
            <CloseSvg />
          </span>
        </button>
      </div>
    </div>
  )
}

export default memo(TodoItem, (prevProps, nextProps) => {
  if (
    prevProps.id === nextProps.id && 
    prevProps.value === nextProps.value && 
    prevProps.isComplete === nextProps.isComplete
  ) return true
  return false
})