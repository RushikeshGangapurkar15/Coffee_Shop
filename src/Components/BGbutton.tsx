import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PlusIcon} from './CustomIcons';
import {BORDERRADIUS, SPACING} from '../theme/theme';

interface BGbuttonProps {
  color: string;
  name: string;
  BGColor: string;
  size: number;
}

const BGbutton: React.FC<BGbuttonProps> = ({color, name, BGColor, size}) => {
  return (
    <View style={[styles.IconBG, {backgroundColor: BGColor}]}>
      {name == 'plus' ? (
        <PlusIcon color={color} width={size} height={size} />
      ) : (
        <></>
      )}
    </View>
  );
};

export default BGbutton;

const styles = StyleSheet.create({
  IconBG: {
    height: SPACING.space_30,
    width: SPACING.space_30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BORDERRADIUS.radius_8,
  },
});
