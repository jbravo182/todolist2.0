import React, { useState, useContext } from 'react'
import { useQueryClient, useMutation } from 'react-query';
import createTodoRequest from '../api/createTodoRequest';
import { TokenContext } from './../App';

export const CreateTodoForm = () => {
    
    const [task, setTask] = useState('')
    const [token] = useContext(TokenContext)


    const queryClient = useQueryClient();


    const { mutate: createTodo } = useMutation(
        (newTodo) => createTodoRequest(newTodo, token),
        {
            onSettled: () => {
                queryClient.invalidateQueries('todos')
            }
        })


    return (
        <form
            onSubmit={(e) => {
            e.preventDefault()
            if (!task) return
            createTodo({
                task,
            })
            setTask('')
        }}>
            <input 
            onChange={e => setTask(e.target.value)} 
            value={task}
            type="text" 
            />
            <button>Add Task</button>
        </form>
    )
}
