export default function loginReducer(state = {user_id: 0, username: ""}, action){
    switch (action.type) {

      case 'SET_USER':
      console.log(action.payload, "this is payload");
        return {
          ...state,
          user_id: action.payload.id,
          username: action.payload.username
        }


      default:
        return state;

    }
}
