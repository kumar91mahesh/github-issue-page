import { ADD_TODO } from '../actions';
import { RENDER_ITEM_LIST } from '../actions';

const initialState = {
  itemList: []
};

export default function toDoApp(state = initialState, action) {
  switch (action.type) {
    case RENDER_ITEM_LIST:
        return {
          ...state,
          itemList: action.itemList
        };
    case ADD_TODO:
      let newItemList = [
        ...state.itemList,
        {
          ...action.toDoItem
        }
      ];
      return {
        ...state,
        itemList: newItemList
      };
    default:
      return state;
  }
}