export const ALREADY_LAUNCH = 'src/containers/splash-screen/already-launch';

export const launched = () => ({
    type: ALREADY_LAUNCH
});

const initialState = {
    loading: false,
    alreadyLaunch: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ALREADY_LAUNCH:
            return { ...state, alreadyLaunch: true };
        default:
            return state;
    }
};

export default reducer;
