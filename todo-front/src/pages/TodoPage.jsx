import React, { useContext } from "react";
// import APIHelper from "./APIHelper.js";
import { useQuery } from 'react-query'
import ClipLoader from 'react-spinners/ClipLoader'
import { TodoItem } from "../components/TodoItem";
import readTodosRequest from "../api/readTodosRequest";
import { CreateTodoForm } from "../components/CreateTodoForm";
import { TokenContext } from './../App';


export const TodoPage = () => {

    const [token] = useContext(TokenContext);

    const {isLoading, data: todos} = useQuery('todos', () => readTodosRequest(token));

    return (
        <div>
            <h1 className="heading">To-Do App</h1>
            {isLoading ? (
                <ClipLoader size={150} />
            ) : (
                todos.map((todo) => (
                    <TodoItem todo={todo} key={todo._id} />
                ))
            )}
            <CreateTodoForm />
            </div>
    )
}
