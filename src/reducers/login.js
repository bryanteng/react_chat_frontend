export default function loginReducer(state = {user_id: 1, username: "bryan"}, action){
    switch (action.type) {

      case 'SET_USER_ID':
        return {
          ...state,
          user_id: action.payload
        }

      case 'SET_USERNAME':
      return{
        ...state,
        username: action.payload
      }

      default:
        return state;

    }
}
