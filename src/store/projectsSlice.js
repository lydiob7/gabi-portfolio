import { createSlice } from '@reduxjs/toolkit';
import daomos from 'data/daomos';
import aukai from 'data/aukai';
import rito from 'data/rito';
import webDesign from 'data/webDesign';

import daomosImg from 'assets/images/projects/daomos.png';
import diodeImg from 'assets/images/projects/diode.jpg';
import aukaiImg from 'assets/images/projects/aukai.jpg';
import ritoImg from 'assets/images/projects/rito.png';
import diode from 'data/diode';

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
                id: diode?.id,
                behanceLink: diode?.behanceLink,
                data: diode,
                title: diode?.title,
                type: 'case-study',
                status: 'only-behance',
                img: diodeImg
            },
            {
                id: aukai?.id,
                behanceLink: aukai?.behanceLink,
                data: aukai,
                title: aukai?.title,
                type: 'case-study',
                status: 'only-behance',
                img: aukaiImg
            },
            {
                id: daomos?.id,
                behanceLink: daomos?.behanceLink,
                data: daomos,
                title: daomos?.title,
                type: 'case-study',
                status: 'ready',
                img: daomosImg
            },
            {
                id: rito?.id,
                behanceLink: rito?.behanceLink,
                data: rito,
                title: rito?.title,
                type: 'case-study',
                status: 'not-ready',
                img: ritoImg
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
