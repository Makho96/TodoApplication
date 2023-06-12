import AddTodoForm from "./AddTodoForm"
import TodoList from "./TodoList"
import Footer from "./Footer"

const Todo = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-wrap flex-col gap-4">
      <h1 className="text-skin-red-color text-8xl font-roboto font-thin">
        todos
      </h1>
      <div 
        className="bg-skin-modal-background w-[800px]"
        style={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 0px 5px 0px'}}
        >
        <AddTodoForm />
        <TodoList />
        <Footer />
      </div>
    </div>
  )
}

export default Todo