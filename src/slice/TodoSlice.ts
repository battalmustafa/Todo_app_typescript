import { createSlice } from "@reduxjs/toolkit";



interface Todo {
    id: string;
    message: string;
    completed: boolean;
  }



export const todoSlice = createSlice({
    name: "todos",
    initialState: [] as Todo[],
    reducers: {
        add: (state, action) => {
         console.log(action.payload);
           state.push(action.payload);
           return state;

           
        },
        remove: (state, action) => {
            
                const todoListArr = state;
                todoListArr.forEach((todo: { id: any; }, index: any) => {
                    if (todo.id === action.payload) {
                        todoListArr.splice(index, 1);

                    }
                });
              return state;
            
        },
       done: (state, action) => {
        console.log(action.payload);
        const completedTodo: any = state.find(todo => todo.id === action.payload);
        console.log(completedTodo);
            if(completedTodo.completed === true)
           completedTodo.completed = false;
           else
           completedTodo.completed = true;
            return state;
          },
        

    },
});

export const {
    add,
    remove,
    done,
} = todoSlice.actions;

export default todoSlice.reducer;