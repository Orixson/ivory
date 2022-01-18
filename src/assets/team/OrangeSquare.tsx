import React, { FC, memo } from 'react';
import Svg, { Circle, Rect } from 'react-native-svg';

const OrangeSquare: FC = memo(({ style, color = '#EE6E45' }) => (
  <Svg width="52" height="52" viewBox="0 0 52 52" fill="none">
    <Rect x="2.5" y="2.5" width="47" height="47" stroke={color} strokeWidth="5" fillOpacity="0.5" />
  </Svg>
));

export default OrangeSquare;
