import {createSlice} from '@reduxjs/toolkit'
export const  userSlice =createSlice({
    name: "user",
    initialState : {value: {name :"" , email : "" , contact: "" }},
    reducers : {
        add : (state,action) => {
            state.value = action.payload
        },
    },

});
export const {add}= userSlice.reducer
export default userSlice.reducer;