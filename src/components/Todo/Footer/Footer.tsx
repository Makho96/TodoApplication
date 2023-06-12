import {memo, useCallback, useState } from "react"
import useTodos from "../../../store/TodoContext"
import { TodoFilterType } from "../../../types/TodoContext.types"
const Footer = () => {
  const {activeTodoCount, handleClearComplete, handleFilter} = useTodos()
  const [activeFilter, setActiveFilter] = useState<TodoFilterType>(0)

  const handleFilterClick = useCallback((filterId: TodoFilterType) => {
    handleFilter(filterId)
    setActiveFilter(filterId)
  }, [handleFilter])
  
  return (
    <div className="flex justify-between items-center text-sm text-skin-secondary-color py-4 px-2">
      <span>{activeTodoCount} items left</span>
      <div className="flex justify-center items-start gap-4">
        <button 
          className={`py-1 px-2 border-x border-y ${activeFilter === 0 ? ' border-skin-secondary-color rounded' : 'border-transparent'}`}
          onClick={() => {handleFilterClick(0)}}
          >
            All
        </button>
        <button 
          className={`py-1 px-2 border-x border-y ${activeFilter === 1 ? ' border-skin-secondary-color rounded' : 'border-transparent'}`}
          onClick={() => {handleFilterClick(1)}}
          >
            Active
          </button>
        <button 
          className={`py-1 px-2 border-x border-y ${activeFilter === 2 ? ' border-skin-secondary-color rounded' : 'border-transparent'}`}
          onClick={() => {handleFilterClick(2)}}
          >
            Completed
          </button>
      </div>
      <button onClick={handleClearComplete} className="capitalize">Clear completed</button>
    </div>
  )
}

export default memo(Footer)