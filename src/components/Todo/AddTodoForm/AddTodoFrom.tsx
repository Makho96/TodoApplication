import {memo, useCallback, useState, SyntheticEvent } from "react"
import useTodos from "../../../store/TodoContext"
import { generateRandomId } from "../../../helpers"
import { ChevronDownSvg } from '../../../constants/icon'

const AddTodoForm = () => {
  const {handleTodoAdd} = useTodos()
  const [inputValue, setInputValue] = useState('')

  const handleAddTodo = useCallback((e: SyntheticEvent) => {
    e.preventDefault()
    if(inputValue.trim() === '') return
    const todo = {
      id: generateRandomId(),
      value: inputValue,
      isComplete: false
    }
    handleTodoAdd(todo)
    setInputValue('')
  }, [inputValue, handleTodoAdd])

  return (
    <div className='w-full'>
      <form onSubmit={handleAddTodo}>
        <div className='flex justify-start items-center gap-4 px-2'>
          <div className='chevronDown'><ChevronDownSvg /></div>
          <input
            className='text-2xl italic font-thin py-3 w-full'
            placeholder='What needs to be done?'
            type="text"
            value={inputValue} 
            onChange={(e) => {setInputValue(e.target.value)}}
          />
        </div>
      </form>
    </div>
  )
}

export default memo(AddTodoForm)