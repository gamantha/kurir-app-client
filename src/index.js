import React from 'react';
import { BackHandler } from 'react-native';
import {
    createReduxBoundAddListener,
    createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers';
import { addNavigationHelpers, NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import AppNavigator from './navigations';

export const navigationMiddleware = createReactNavigationReduxMiddleware(
    'root',
    state => state['navigation']
);

const addListener = createReduxBoundAddListener('root');

class RootView extends React.Component {
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }

    onBackPress = () => {
        const { dispatch, navigation } = this.props;
        if (navigation.index === 0) {
            return false;
        }
        dispatch(NavigationActions.back());
        return true;
    };

    render() {
        const { navigation, dispatch } = this.props;
        return (
            <AppNavigator
                navigation={addNavigationHelpers({
                    dispatch,
                    state: navigation,
                    addListener
                })}
            />
        );
    }
}

const mapStateToProps = state => ({
    navigation: state['navigation']
});

// export const selectUserLoginReducer = () => state => state.get('userLogin');

export default connect(mapStateToProps)(RootView);
