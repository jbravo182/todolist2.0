import { React, useEffect, useState, useCallback, useContext } from 'react'
import { useQueryClient, useMutation } from 'react-query'
import deleteTodoRequest from '../api/deleteTodoRequest';
import updateTodoRequest from '../api/updateTodoRequest';
import { debounce } from 'lodash'
import { TokenContext } from './../App';


export const TodoItem = ({ todo }) => {
    const [task, setTask] = useState(todo.task)
    const [token] = useContext(TokenContext)


    const queryClient = useQueryClient();

    const { mutate: updateTodo } = useMutation(
        (updatedTodo) => updateTodoRequest(updatedTodo, token),
        {
            onSettled: () => {
                queryClient.invalidateQueries('todos')
            }
        })


    const { mutate: deleteTodo } = useMutation(
        (updatedTodo) => deleteTodoRequest(updatedTodo, token),
        {
            onSettled: () => {
                queryClient.invalidateQueries('todos')
            }
        })

    const debouncedUpdateTodo = useCallback(
        debounce(updateTodo, 600),
        [updateTodo]
    );

    useEffect(() => {
        if (task !== todo.task) {
            debouncedUpdateTodo({
                ...todo,
                task,
            });
        }

    }, [task]);

    return (
        <div className='centerForm'>
            <input

                checked={todo.status}
                type="checkbox"

                onChange={() =>
                    updateTodo({
                        ...todo,
                        status: !todo.status,
                    })
                }

            />

            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />

            <button onClick={() => deleteTodo(todo)}>Delete</button>

        </div>
    )
}
