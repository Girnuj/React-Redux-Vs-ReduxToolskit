import { createSlice } from "@reduxjs/toolkit"; 
import axios from "axios";

//Se pueden crear diferentes Slice(reducer) en diferentes carpetas para modularizar
//Reducer, states and actions of "users"
export const userSlice = createSlice({
    //definir reducer y su estado/os
    name: 'users',
    initialState: {
        list: []
    },
    //igualar el estado a la accion que hincimos mas abajo
    //reducers = .actions
    reducers: {
        //aqui todas las aciones que utilecemos
        setUserList: (state, action) => {
            state.list = action.payload;
            // state.list.push(action.payload) esto es lo mismo
        },

        // o simplemente podemos hacer como antes

        // setUserList(state, action){
        //     return {                 
        //         ...state,
        //         user: action.payload
        //     }
        // }
        
        //para hacer diferente logica se debe igualar el estado a la logica, 
        // no hay necesidad de crear variables de por medio

        // setUserList: (state, action) => {
        //     state.list = state.list.filter(e => e.x != e.x)
        // }

    }
});
//exportamos para utilizar en la accion o funcion (fetchAllUsers)
export const { setUserList } = userSlice.actions;// igualar a las acciones que estan dentro del reducer

//exportamos el reducer 'user' para agregarlo en el store = configureStore
export default userSlice.reducer;

//traemos la informacion y se guarda en el estado en que igualamos la action.payload
//las funciones/acciones se pueden hacer en otro archivo y exportarlos
export const fetchAllUsers = () => (dispatch) => {
    axios.get('https://reqres.in/api/users?per_page=4')
    .then((response) => {
        dispatch(setUserList(response.data.data))
    }).catch(e => console.error(`error fetchAllUsers '${e}'`))
}