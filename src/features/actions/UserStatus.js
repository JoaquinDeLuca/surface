import { createSlice } from "@reduxjs/toolkit";
    
const initialState = {
    id: null,
    name: null,
    email: null,
    photo: null,
    role: null,
}
const userSlice = createSlice({

    name: 'user',
    initialState,
        
   

    reducers:{
        setCredentials: (state, actions) =>{
                state.id = actions.payload.id
                state.name = actions.payload.name
                state.email = actions.payload.email
                state.photo = actions.payload.photo
                state.role = actions.payload.role
                
         },
         removeCredentials: (state,actions) =>{
            state.id = null
            state.name = null
            state.email = null
            state.photo = null
            state.role = null
        }
    }
})

export default userSlice.reducer
export const { setCredentials, removeCredentials } = userSlice.actions