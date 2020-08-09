export const ADD_TODO = 'ADD_TODO';
export const LOAD_ITEM_LIST = 'LOAD_ITEM_LIST';
export const RENDER_ITEM_LIST = 'RENDER_ITEM_LIST';


export function addToDo(title) {
  return {
    type: ADD_TODO,
    toDoItem: {
      _id: (new Date().getTime()),
      title
    }
  };
}

export function loadItemList() {
  return {
    type: LOAD_ITEM_LIST
  };
}