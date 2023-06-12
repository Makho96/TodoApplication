import useTodos from "../../../store/TodoContext"
import TodoItem from "../TodoItem"
const TodoList = () => {
  const {todoList} = useTodos()
  return (
    <div className='border-y border-skin-main-color'>
      <ul className="h-[260px] overflow-y-auto">
        {todoList.map((item, index, arr) => {
          return (
            <li key={item.id} className={`${index !== arr.length - 1 ? 'border-b border-skin-main-color' : ''}`}>
              <TodoItem {...item}/>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default TodoList