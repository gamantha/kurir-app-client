import React from 'react';
import EditProfile from '../../../../src/components/EditProfile';
import renderer from 'react-test-renderer';

test('EditProfile renders correctly', () => {
    const tree = renderer.create(<EditProfile />).toJSON();
    expect(tree).toMatchSnapshot();
});
