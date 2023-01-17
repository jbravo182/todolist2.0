import { API_URL } from "../config"


export default (todo, token) => {

  return fetch(`${API_URL}/todos/${todo._id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": 'application/json'
    },
    body: JSON.stringify({
      task: todo.task,
      status: todo.status
    })
  })
    .then(response => response.json())
}