import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{ id: 1, text: "Hello World"}]
};

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            };
            state.todos.push(todo);
        },
        removeToDo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        }, 
        updateToDo: (state, action) => {
            state.todos.map((todo) => {
                if(todo.id === action.payload.id) {
                    todo.text = action.payload.text;
                }
            })
        }
    }
});

export const { addTodo, removeToDo, updateToDo } = todoSlice.actions;
export default todoSlice.reducer;