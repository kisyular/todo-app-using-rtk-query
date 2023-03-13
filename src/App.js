import TodoList from './components/Todo/TodoList'
import AddTodo from './components/Todo/AddTodo'
function App() {
	return (
		<div className='flex justify-center items-center pt-10 flex-col p-1'>
			<AddTodo />
			<TodoList />
		</div>
	)
}

export default App
