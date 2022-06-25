import { configureStore } from "@reduxjs/toolkit";
// reducer
import users from "../Slices/users/users";

//create Store con todas las herramientas ya definidas
//ir agregando todos los reducers que creemos en slices
export default configureStore({
    reducer: {
        users
    }
});