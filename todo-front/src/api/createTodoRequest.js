import { API_URL } from "../config"



export default (todo, token) => {
    return fetch(`${API_URL}/todos/`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            task: todo.task,
            status: false
        })
    })
        .then(response => response.json())
}