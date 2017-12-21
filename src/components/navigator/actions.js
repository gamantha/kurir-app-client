import { AppNavigator } from './';

const onboardingAction = AppNavigator.router.getActionForPathAndParams('Onboarding');
const tempNavState = AppNavigator.router.getStateForAction(onboardingAction);
const registerAction = AppNavigator.router.getActionForPathAndParams('Register');
const initialNavState = AppNavigator.router.getStateForAction(registerAction, tempNavState);

export default initialNavState;
