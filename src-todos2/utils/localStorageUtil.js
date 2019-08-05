/*
* 使用localStorage储存数据的工具类
* 1.向外暴露函数（向外暴露一个功能）
* 2.向外暴露对象（向外暴露多个功能）
 */
const TODOS_KEY = 'todos_key'
export default {
  saveTodos(todos){ // 更新数据
    window.localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
  },
  getTodos(){ // 读取数据
    return JSON.parse(window.localStorage.getItem(TODOS_KEY) || '[]')
  },
}
