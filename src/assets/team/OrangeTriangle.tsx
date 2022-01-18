import React, { FC, memo } from 'react';
import Svg, { Path } from 'react-native-svg';

const OrangeTriangle: FC = memo(({ style, color = '#EE6E45' }) => (
  <Svg width="61" height="52" viewBox="0 0 61 52" fill="none">
    <Path d="M4.95225 49.25L30.5 5L56.0478 49.25H4.95225Z" stroke={color} strokeWidth="5" />
  </Svg>
));

export default OrangeTriangle;
