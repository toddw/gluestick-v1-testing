/* @flow */
export const ADD_TODO = "TODOS_ADD_TODO";
export const REMOVE_TODO = "TODOS_REMOVE_TODO";
export const FETCH_TODOS = "TODOS_FETCH_TODOS";

export function fetchTodos () {
  return {
    type: FETCH_TODOS,
    promise: (httpClient:Object) => httpClient.get("http://localhost:4000")
  };
}

export function removeTodo (index:number) {
  return {
    type: REMOVE_TODO,
    index
  };
}

export function addTodo (item:string) {
  return {
    type: ADD_TODO,
    promise: (httpClient:Object) => httpClient.post("http://localhost:4000", {
      item
    })
  };
}

