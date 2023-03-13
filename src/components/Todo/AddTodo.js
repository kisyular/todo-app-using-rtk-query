import React from 'react'
import { useState } from 'react'

const AddTodo = () => {
	const [todo, setTodo] = useState('')

	const onSubmitForm = (e) => {
		e.preventDefault()
		console.log(todo)
		setTodo('')
	}

	return (
		<form onSubmit={onSubmitForm} className='w-full max-w-3xl'>
			<div className='flex flex-wrap -mx-3 mb-6'>
				<div className='w-full px-3'>
					<div className='bg-gray-100 rounded border border-gray-200 flex items-center justify-between'>
						<input
							type='text'
							placeholder='Enter your todo'
							value={todo}
							onChange={(e) => setTodo(e.target.value)}
							className='bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-full'
						/>
						<button className='py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none'>
							SUBMIT
						</button>
					</div>
				</div>
			</div>
		</form>
	)
}

export default AddTodo
