import { createStore } from 'redux'

const initialState = {
  sidebarShow: true,
  position: [],
  loading: false,
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    case 'UPDATE_POSITION':
      console.log('type', type, 'rest', rest);
      return {...state, position: rest.payload}
    case 'SET_LOADING':
      return {...state, loading: rest.payload} 
    default:
      return state
  }
}

const store = createStore(changeState)
export default store
