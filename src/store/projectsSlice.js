import { createSlice } from '@reduxjs/toolkit';
import rito from 'data/rito';
import shakaApp from 'data/shakaApp';

const slice = createSlice({
    name: 'projects',
    initialState: {
        list: [
            { id: rito.title?.toLowerCase()?.split(' ').join('-'), data: rito },
            { id: shakaApp.title?.toLowerCase()?.split(' ').join('-'), data: shakaApp }
        ],
        currentProject: {}
    },
    reducers: {
        setProject: (state, action) => {
            state.currentProject = state.list?.filter((project) => project.id === action.payload)[0]?.data;
        }
    }
});

export const { setProject } = slice.actions;

export default slice.reducer;
