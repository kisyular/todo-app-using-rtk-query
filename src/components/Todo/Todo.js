import { useState } from 'react'
import { FaTrash } from 'react-icons/fa'

const Todo = (todo) => {
	const [isCompleted, setIsCompleted] = useState(todo.todo.completed)

	return (
		<div className='flex mb-4 items-center space-x-3 border-2 rounded-lg sm:px-4 sm:py-3 px-2 border-gray-700'>
			<div className='flex items-center'>
				<input
					type='checkbox'
					className='form-checkbox h-6 w-6 text-green-600'
					checked={isCompleted}
					onChange={() => {
						setIsCompleted(!isCompleted)
						console.log(todo.todo.id)
					}}
				/>
			</div>
			<p
				className={`w-full text-green text-xl ${
					isCompleted && 'line-through'
				}`}
			>
				{todo.todo.title}
			</p>
			<FaTrash
				className='text-2xl text-red-700'
				onClick={() => {
					console.log(todo.todo.id)
				}}
			/>
		</div>
	)
}

export default Todo
