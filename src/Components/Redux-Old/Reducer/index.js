import axios from "axios";

const initialState = {

    user2: [] 

}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USERS:
            return{
                ...state,
                user2: action.payload
            }
    
        default:
            break;
    }
}

export const fetchAllUsers2 = () => (dispatch) => {
    axios.get('https://reqres.in/api/users?per_page=4')
    .then((response) => {
        dispatch({
            type: GET_USERS,
            payload: response.data
        })
    }).catch(e => console.error(e))
}

export const GET_USERS = "fetchAllUsers2"