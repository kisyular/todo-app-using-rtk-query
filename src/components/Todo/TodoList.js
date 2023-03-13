import React from 'react'
import Todo from './Todo'

import { useGetTodosQuery } from '../../api/apiSlice'
import { Error, Loading } from '../Status'

const TodoList = () => {
	const {
		data: todos,
		isLoading,
		isSuccess,
		isError,
		error,
	} = useGetTodosQuery()

	if (isLoading) return <Loading />
	if (isError) return <Error error={error} />
	return (
		<div>
			{isSuccess &&
				todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
		</div>
	)
}

export default TodoList
