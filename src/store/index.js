import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";
import { fetchUsers } from "./thunks/fetchUsers";
import { addUser } from "./thunks/addUser";
import { removeUser } from "./thunks/removeUser";

export const store = configureStore({
  reducer: {
    users: usersReducer
  }
})

export { fetchUsers, addUser, removeUser }


