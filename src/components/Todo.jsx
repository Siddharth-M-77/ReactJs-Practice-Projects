import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, editTodo, setTodos } from '../store/slices/todoSlice'

const Todo = () => {
    const [editId, setEditID] = useState(null)
    const todos = useSelector((store) => store.todos.todos)
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (editId !== null) {
            dispatch(editTodo({ idx: editId, updatedTodo: formData }))
            setEditID(null)
        }

        else {

            dispatch(setTodos([...todos, formData]))
        }

        setFormData({
            name: "",
            email: "",
            password: ""
        })
    }

    const handleDelete = (idx) => {
        dispatch(deleteTodo(idx))
    }
    const handleEdit = (todo, idx) => {
        setEditID(idx)
        setFormData({ ...todo })
    }


    return (
        <div className="flex items-center flex-col gap-5 justify-start min-h-screen bg-gray-100">
            <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">
                    Create an Todo
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Input */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                            Name
                        </label>
                        <input
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                            className="w-full text-black mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        />
                    </div>

                    {/* Email Input */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                            Email
                        </label>
                        <input
                            name='email'
                            onChange={handleChange}
                            value={formData.email}
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full text-black mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        />
                    </div>

                    {/* Password Input */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                            Password
                        </label>
                        <input
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="w-full text-black mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        />
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            <div className='flex items-center grid grid-cols-3 p-5 text-black justify-center gap-4'>
                {
                    todos.map((todo, idx) =>
                    (
                        <div key={idx} className='flex bg-blue-400 space-y-5 p-4 items-center justify-center rounded-lg w-full flex-col'>
                            <h2 className='  text-lg  text-white rounded-xs '>{todo.name}</h2>
                            <h2 className='text-lg  text-white rounded-xs '>{todo.email}</h2>
                            <h2 className='text-lg  text-white rounded-xs '>{todo.password}</h2>
                            <button onClick={() => handleDelete(idx)} className='text-lg bg-red-500 p-2 rounded-lg '>Delete</button>
                            <button onClick={() => handleEdit(todo, idx)} className='text-lg bg-red-500 p-2 rounded-lg '>Edit</button>
                        </div>
                    )
                    )
                }
            </div>
        </div>

    )
}

export default Todo
