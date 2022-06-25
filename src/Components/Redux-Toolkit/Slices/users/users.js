import { createSlice } from "@reduxjs/toolkit"; 
import axios from "axios";

//Reducer, states and actions 
export const userSlice = createSlice({
    //definir reducer y su estado
    name: 'users',
    initialState: {
        list: []
    },
    //igualar el estado a la accion que incimos mas abajo
    reducers: {
        setUserList: (state, action) => {
            state.list = action.payload;
        }
    }
});
//exportamos para utilizar en la accion
export const { setUserList } = userSlice.actions;

export default userSlice.reducer;
//traemos la informacion y se guarda en el estado en que igualamos la action.payload
//las funciones se pueden hacer en otro archivo y exportarlos
export const fetchAllUsers = () => (dispatch) => {
    axios.get('https://reqres.in/api/users?per_page=4')
    .then((response) => {
        dispatch(setUserList(response.data.data))
    })
}