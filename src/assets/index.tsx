import { DEFAULT_ICON_SIZE } from '@constants/consts';
import { THEME } from '@constants/theme';
import React, { memo } from 'react';
import { TextStyle } from 'react-native';
import { Path, Svg } from 'react-native-svg';
import paths from './paths';
import { IconName } from './types';

export interface IIconBase {
  size?: number;
  color?: string;
  style?: TextStyle;
}

export interface IIconProps extends IIconBase {
  name: IconName;
}

const Icon = memo(
  ({
    name,
    size = DEFAULT_ICON_SIZE,
    style,
    color = style?.color?.toString() || THEME.inactive,
  }: IIconProps) => {
    const svgBoxDimensions = DEFAULT_ICON_SIZE;

    const svgProps = { height: size, width: size, style };

    return (
      <Svg viewBox={`0 0 ${svgBoxDimensions} ${svgBoxDimensions}`} {...svgProps}>
        <Path d={paths[name]} fill={color} strokeWidth={1} fillRule="evenodd" />
      </Svg>
    );
  },
);

export default Icon;
