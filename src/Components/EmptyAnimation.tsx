import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import {COLORS, FONTFAMILY, FONTSIZE} from '../theme/theme';

interface EmptyAnimationProps {
  title: string;
}

const EmptyAnimation: React.FC<EmptyAnimationProps> = ({title}) => {
  return (
    <View style={styles.emptyCartContainer}>
      <LottieView
        source={require('../lottie/coffeecup.json')}
        style={styles.lotteStyle}
        autoPlay
        loop
      />
      <Text style={styles.lotteText}>{title}</Text>
    </View>
  );
};

export default EmptyAnimation;

const styles = StyleSheet.create({
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  lotteStyle: {
    height: 300,
  },
  lotteText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryOrangeHex,
    textAlign: 'center',
  },
});
