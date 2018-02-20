import React from 'react';
import SplashScreen from '../../../../src/containers/SplashScreen';
import Toast from 'react-native-simple-toast';
import renderer from 'react-test-renderer';

jest.mock('react-native-simple-toast', () => 'Toast');
test('SplashScreen renders correctly', () => {
    const tree = renderer.create(<SplashScreen />).toJSON();
    expect(tree).toMatchSnapshot();
});
