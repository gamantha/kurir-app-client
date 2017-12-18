import React from 'react';
import { Label } from 'native-base';

import Onboarding from 'react-native-onboarding-swiper';

const OnboardingComponent = () => (
  <Onboarding
    pages={[
      {
        backgroundColor: '003c8f',
        image: <Label>Test</Label>,
        title: 'Test',
        subtitle: 'Me',
      },
      {
        backgroundColor: '003c8f',
        image: <Label>Test2</Label>,
        title: 'Test',
        subtitle: 'Me',
      },
      {
        backgroundColor: '003c8f',
        image: <Label>Test3</Label>,
        title: 'Test',
        subtitle: 'Me',
      },
    ]}
  />
);

export default OnboardingComponent;
