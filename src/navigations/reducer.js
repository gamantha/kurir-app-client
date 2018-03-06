import AppNavigator from '.';

const initState = AppNavigator.router.getStateForAction(
    AppNavigator.router.getActionForPathAndParams('Dashboard')
);

const navReducer = (state = initState, action) => {
    const nextState = AppNavigator.router.getStateForAction(action, state);
    return nextState || state;
};

export default navReducer;
