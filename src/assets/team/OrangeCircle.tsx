import React, { FunctionComponent, memo } from 'react';
import Svg, { Circle } from 'react-native-svg';

const OrangeCircle: FunctionComponent = memo(({ style, color = '#EE6E45' }) => (
  <Svg width="52" height="52" viewBox="0 0 52 52" fill="none">
    <Circle cx="26" cy="26" r="23.5" stroke={color} strokeWidth="5" fillOpacity="0.5" />
  </Svg>
));

export default OrangeCircle;
