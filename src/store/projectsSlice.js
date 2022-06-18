import { createSlice } from '@reduxjs/toolkit';
import rito from 'data/rito';
import shakaApp from 'data/shakaApp';

export const setProject = (projectId) => (dispatch, getState) => {
    const currentLanguage = getState()?.ui?.appSettings?.currentLanguage;
    const stateList = getState()?.entities?.projects?.list;
    let currentProject = stateList?.filter((project) => project?.id === projectId);
    if (currentProject) {
        currentProject = {
            id: currentProject[0]?.id,
            behanceLink: currentProject[0]?.behanceLink,
            ...currentProject[0]?.data[currentLanguage]
        };
        dispatch(setProjectText(currentProject));
    }
};

const slice = createSlice({
    name: 'projects',
    initialState: {
        list: [
            { id: rito?.id, behanceLink: rito?.behanceLink, data: rito },
            { id: shakaApp?.id, behanceLink: shakaApp?.behanceLink, data: shakaApp }
        ],
        currentProject: {}
    },
    reducers: {
        setProjectText: (state, action) => {
            state.currentProject = action.payload;
        }
    }
});

export const { setProjectText } = slice.actions;

export default slice.reducer;
