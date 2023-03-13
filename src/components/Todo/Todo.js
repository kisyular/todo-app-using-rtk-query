import { useState } from 'react'
import { FaTrash } from 'react-icons/fa'

import {
	useUpdateTodoMutation,
	useDeleteTodoMutation,
} from '../../api/apiSlice'

const Todo = (todo) => {
	const [isCompleted, setIsCompleted] = useState(todo.todo.completed)
	const [updateTodo] = useUpdateTodoMutation()
	const [deleteTodo] = useDeleteTodoMutation()

	return (
		<div className='flex mb-4 items-center space-x-3 border-2 rounded-lg sm:px-4 sm:py-3 px-2 border-gray-700'>
			<div className='flex items-center'>
				<input
					type='checkbox'
					className='form-checkbox h-6 w-6 text-green-600'
					checked={isCompleted}
					onChange={() => {
						setIsCompleted(!isCompleted)
						updateTodo({
							id: todo.todo.id,
							userId: todo.todo.userId,
							title: todo.todo.title,
							completed: !isCompleted,
						})
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
					deleteTodo({ id: todo.todo.id })
				}}
			/>
		</div>
	)
}

export default Todo
