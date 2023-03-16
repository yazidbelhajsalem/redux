import { createSlice } from "@reduxjs/toolkit";

export const TodoSlice = createSlice({
  name: "Todos",
  initialState: [
    {
      id: 1,
      title: "todo1",
      status: true,
    },

    { id: 2, title: "todo2", status: false },

    { id: 3, title: "todo3", status: true },
  ],
  reducers: {
    Addtodo:(state,actions)=>{
      const tab=[...state,actions.payload]
   return tab   
    }
  },
});

export const {Addtodo} = TodoSlice.actions;

export default TodoSlice.reducer;
