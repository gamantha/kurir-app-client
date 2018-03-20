import React from 'react';
import { Provider } from 'react-redux';
import SplashScreen from '../../../../src/containers/SplashScreen';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import Toast from 'react-native-simple-toast';
import renderer from 'react-test-renderer';

const middlewares = [];
const mockStore = configureStore(middlewares);

const initialState = {};

jest.mock('react-native-simple-toast', () => 'Toast');
test('SplashScreen renders correctly', () => {
    const tree = shallow(<SplashScreen />, {
        context: { store: mockStore(initialState) }
    });
    expect(tree.dive()).toMatchSnapshot();
});
