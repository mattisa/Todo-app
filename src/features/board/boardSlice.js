import { createSlice } from '@reduxjs/toolkit';

/**
 *  1 - initial state
 *  3 - create slice
 *  4 - export reducer and actions
 *  5 - add the reducer to store
*/

const initialState = {
    notes: [
        {
            id: 0,
        },
    ],
    viewMode: 'grid' // 'grid' or 'list'
};

const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        addNote: (state, action) => {
            state.notes.unshift(action.payload.note);
        },
        deleteNote: (state, action) => {
            state.notes.splice(state.notes.findIndex((arrow) => arrow.id === action.payload), 1);
        },
        setViewMode: (state, action) => {
            state.viewMode = action.payload;
        }
    }
});

export default boardSlice.reducer;
export const { addNote, deleteNote, setViewMode } = boardSlice.actions;