export default function loginReducer(state = {user_id: 4, username: ""}, action){
    switch (action.type) {

      case 'SET_USER':
      console.log(action.payload, "this is payload");
        return {
          ...state,
          user_id: action.payload.user_id,
          username: action.payload.username
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
