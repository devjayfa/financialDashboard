import {createSlice} from "@reduxjs/toolkit";
import {users} from "../MockData/data";

type UserState = {
    users: typeof users;
    selectedUserId: number | null;
}

const initialState: UserState = {
    users,
    selectedUserId: 1,
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setSelectedUser:(state,action)=>{
            state.selectedUserId = action.payload;
          
        }
    }

})

export const {setSelectedUser} = userSlice.actions;
export default userSlice.reducer;