/*
* state状态对象
*/
export default {
  todos: JSON.parse(window.localStorage.getItem('todos_key') || '[]')
}
