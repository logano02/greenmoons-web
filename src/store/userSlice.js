import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        userName: '',
        password: '',
        
    },
    reducers: {
        addCount: (state, action) => {
            state
            action.payload.name
        }
    }
})

export default userSlice.reducer