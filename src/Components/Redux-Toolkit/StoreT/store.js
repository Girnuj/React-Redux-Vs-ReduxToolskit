import { configureStore } from "@reduxjs/toolkit";
// reducer
import users from "../Slices/users/users";
// import usersReducer from "../Slices/users/users"

//configureStore = createStore con todas las herramientas ya definidas, thuks and reduxDev
//ir agregando todos los reducers que creemos en slices
//no es necesario igualar la funcion a store = configureStore, por definicion ya sabe que es el store
export default configureStore({
    reducer: {     
        users,
        // o
        // users : usersReducer,
        // e importamos usersReducer en ves de users
    // otros slice o reducers
    }
});