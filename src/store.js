import { createStore } from 'redux'

const initialState = {
  sidebarShow: true,
  position: [],
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    case 'UPDATE_POSITION':
      console.log('type', type, 'rest', rest);
      return {...state, position: type.payload}
    default:
      return state
  }
}

const store = createStore(changeState)
export default store
