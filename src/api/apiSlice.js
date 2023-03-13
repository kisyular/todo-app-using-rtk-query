import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: ' http://localhost:3500',
	}),
	tagTypes: ['Todos'],
	endpoints: (builder) => ({
		getTodos: builder.query({
			query: () => '/todos',
			transformResponse: (response) =>
				response.sort((a, b) => b.id - a.id),
			providesTags: ['Todos'],
		}),
		addTodo: builder.mutation({
			query: (newTodo) => ({
				url: '/todos',
				method: 'POST',
				body: newTodo,
			}),
			invalidatesTags: ['Todos'],
		}),
	}),
})

export const { useGetTodosQuery, useAddTodoMutation } = apiSlice
