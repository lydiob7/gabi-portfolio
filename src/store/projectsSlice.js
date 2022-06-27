import { createSlice } from '@reduxjs/toolkit';
import daomos from 'data/daomos';
import navis from 'data/navis';
import rito from 'data/rito';
import webDesign from 'data/webDesign';

export const setProject = (projectId) => (dispatch, getState) => {
    const currentLanguage = getState()?.ui?.appSettings?.currentLanguage;
    const stateList = getState()?.entities?.projects?.list;
    let currentProject = stateList?.filter((project) => project?.id === projectId);
    if (currentProject) {
        currentProject = {
            id: currentProject[0]?.id,
            behanceLink: currentProject[0]?.behanceLink,
            title: currentProject[0]?.title,
            ...currentProject[0]?.data[currentLanguage]
        };
        dispatch(setProjectText(currentProject));
    }
};

const slice = createSlice({
    name: 'projects',
    initialState: {
        list: [
            {
                id: daomos?.id,
                behanceLink: daomos?.behanceLink,
                data: daomos,
                title: daomos?.title,
                type: 'case-study',
                status: 'ready'
            },
            {
                id: rito?.id,
                behanceLink: rito?.behanceLink,
                data: rito,
                title: rito?.title,
                type: 'case-study',
                status: 'ready'
            },
            {
                id: navis?.id,
                behanceLink: navis?.behanceLink,
                data: navis,
                title: navis?.title,
                type: 'case-study',
                status: 'in-progress'
            },
            ...webDesign
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
