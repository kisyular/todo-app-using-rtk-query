import React from 'react'
import Todo from './Todo'

const TodoList = () => {
	const todos = {
		todos: [
			{
				userId: 3,
				id: 1,
				title: 'Revise the employee handbook to include new policies',
				completed: false,
				changes: {
					completed: true,
				},
			},
			{
				userId: 6,
				id: 2,
				title: 'Develop a training program for new employees',
				completed: false,
			},
		],
	}
	return (
		<div>
			{todos.todos.map((todo) => (
				<Todo key={todo.id} todo={todo} />
			))}
		</div>
	)
}

export default TodoList
