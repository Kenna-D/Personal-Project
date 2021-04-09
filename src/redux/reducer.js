const initialState = {
  username: '',
  profilePic: ''
};

const UPDATE_USER = 'UPDATE_USER';
const USER_LOGOUT = 'USER_LOGOUT'

export function updateUser(user){
  console.log( 'reducer updateUser', user)
  return {
    type: UPDATE_USER,
    payload: user
  }
};

export function logout(){
  return {
    type: USER_LOGOUT
  }
};

export default function reducer(state= initialState, action) {
  switch(action.type){
    case UPDATE_USER:
      console.log(action.payload)
      return {
        ...state, 
        username: action.payload.username,
        profilePic: action.payload.profilePic
      };
    case USER_LOGOUT:
      return initialState;
    default: return state;
  }
};