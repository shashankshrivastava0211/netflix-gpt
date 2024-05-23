import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice(
    {
        name:"user",
        initialState:null,
        reducers:{
            addUser : (state,action)=>{
                return action.payload//ye kuch le skta hai jse hamne uid lia hai 

            },
            removeUser : (state,action)=>{
                return null;//.payload nhi hai toh kuchg le nhi skta 
            }
        }
    }
)
export const { addUser, removeUser }=userSlice.actions
export default userSlice.reducer