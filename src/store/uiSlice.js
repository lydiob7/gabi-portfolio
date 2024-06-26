import { createSlice } from '@reduxjs/toolkit';
import { setProject } from 'store/projectsSlice';

import { appInformation, navigationConfig, socialLinks, supportedLanguages } from 'config';

export const languageChanged = (language) => (dispatch, getState) => {
    const currentProject = getState()?.entities?.projects?.currentProject;

    dispatch(currentLanguageChanged(language));
    dispatch(setProject(currentProject?.id));
};

const slice = createSlice({
    name: 'ui',
    initialState: {
        appInformation,
        appSettings: {
            currentLanguage: 'en',
            isLanguageCheckTriggered: true,
            isPreferredThemeCheckTriggered: true,
            isLanguageToggable: true,
            isThemeToggable: true,
            mantainanceMode: false,
            supportedLanguages: Object.keys(supportedLanguages).slice(0, -1),
            theme: 'light'
        },
        footer: {
            isMenuItemsListVisible: false,
            isSocialLinksListVisible: true,
            isVisible: true,
            menuItems: navigationConfig(supportedLanguages['default']).footermenu,
            socialLinks
        },
        headerSettings: {
            fixed: false,
            logoColor: 'default'
        },
        imageToOpen: null,
        sidebar: {
            menuItems: navigationConfig(supportedLanguages['default']).headermenu
        },
        textContent: supportedLanguages['default']
    },
    reducers: {
        changeLogoColor: (state, action) => {
            state.headerSettings.logoColor = action.payload;
        },

        themeDark: (state, action) => {
            state.appSettings.theme = 'dark';
        },

        themeLight: (state, action) => {
            state.appSettings.theme = 'light';
        },

        setImageToOpen: (state, action) => {
            state.imageToOpen = action.payload;
        },

        setThemePreferredCheckOn: (state, action) => {
            state.appSettings.isPreferredThemeCheckTriggered = true;
        },

        setThemePreferredCheckOff: (state, action) => {
            state.appSettings.isPreferredThemeCheckTriggered = false;
        },

        setThemeToggableOn: (state, action) => {
            state.appSettings.isThemeToggable = true;
        },

        setThemeToggableOff: (state, action) => {
            state.appSettings.isThemeToggable = false;
        },

        mantainanceModeEnabled: (state, action) => {
            state.appSettings.mantainanceMode = true;
        },

        mantainanceModeDisabled: (state, action) => {
            state.appSettings.mantainanceMode = false;
        },

        currentLanguageChanged: (state, action) => {
            state.appSettings.currentLanguage = action.payload;
            state.textContent = supportedLanguages[action.payload] || supportedLanguages['default'];
            state.footer.menuItems = navigationConfig(
                supportedLanguages[action.payload] || supportedLanguages['default']
            ).footermenu;
            state.sidebar.menuItems = navigationConfig(
                supportedLanguages[action.payload] || supportedLanguages['default']
            ).headermenu;
        }
    }
});

export const {
    changeLogoColor,
    themeDark,
    themeLight,
    setImageToOpen,
    setThemePreferredCheckOn,
    setThemePreferredCheckOff,
    setThemeToggableOn,
    setThemeToggableOff,
    currentLanguageChanged,
    mantainanceModeEnabled,
    mantainanceModeDisabled
} = slice.actions;

export default slice.reducer;
