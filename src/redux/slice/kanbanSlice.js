import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    tickets: [],
    users: [],
    filters: {
        groupBy: "user",
        orderBy: "priority"
    },
};

const kanbanSlice = createSlice({
    name: "kanban",
    initialState,
    reducers: {
        setTickets: (state, action) => {
            state.tickets = action.payload;
        },
        setUsers: (state, action) => {
            state.users = action.payload;
        },
        setGroupBy: (state, action) => {
            state.filters.groupBy = action.payload;
        },
        setOrderBy: (state, action) => {
            state.filters.orderBy = action.payload;
        },
    }
});

export const {setTickets, setUsers, setGroupBy, setOrderBy} = kanbanSlice.actions;

export default kanbanSlice.reducer;
