import axios from 'axios';

const URL = 'http://localhost:3003/api/todos';

export function changeDescription(event) {
  return {
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
  }
};

export function search() {
  return (dispatch, getState) => {
    const description = getState().todo.description
    const search = description ? `&description__regex=/${description}/` : "";
    axios.get(`${URL}?sort=-createdAt${search}`)
      .then(response => dispatch({type: 'TODO_SEARCHED', payload: response.data}))
  }
}

export function add(description) {
  return dispatch => {
    axios.post(URL, {description})
      .then(response => dispatch({ type: 'TODO_CLEAR', payload: response.data }))
      .then(() => dispatch(search()));
  }
}

export function markAsDone(todo) {
  return dispatch => {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
      .then(() => dispatch(search()));
  }
}

export function markAsPending(todo) {
  return dispatch => {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
      .then(() => dispatch(search()));
  }
}

export function removeToDo(todo) {
  return dispatch => {
    axios.delete(`${URL}/${todo._id}`)
      .then(() => dispatch(search()));
  }
}

export function clearToDoDescription() {
  return [
    {
      type: 'TODO_CLEAR'
    },
    search()
  ]
}