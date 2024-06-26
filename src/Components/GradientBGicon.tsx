import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, SPACING} from '../theme/theme';
import {BackIcon, HeartIcon, MenuIcon} from './CustomIcons';

interface GradientBGiconProps {
  name: string;
  color: string;
  size: number;
}

const GradientBGicon: React.FC<GradientBGiconProps> = ({name, color, size}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
        style={styles.linerGradientBG}>
        {name == 'Menu' && (
          <MenuIcon width={size} height={size} color={color} />
        )}
        {name == 'Back' && (
          <BackIcon width={size} height={size} color={color} />
        )}
        {name == 'Heart' && (
          <HeartIcon width={size} height={size} color={color} />
        )}
      </LinearGradient>
    </View>
  );
};

export default GradientBGicon;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: COLORS.secondaryDarkGreyHex,
    borderRadius: SPACING.space_12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.secondaryGreyHex,
    overflow: 'hidden',
  },
  linerGradientBG: {
    height: SPACING.space_36,
    width: SPACING.space_36,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
