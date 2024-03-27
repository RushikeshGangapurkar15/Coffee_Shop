import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../theme/theme';
import LottieView from 'lottie-react-native';
interface PopUpanupanimationProps {
  style: any;
  source: any;
}

const PopUpanupanimation: React.FC<PopUpanupanimationProps> = ({
  style,
  source,
}) => {
  return (
    <View style={styles.lotteContainer}>
      <LottieView style={style} source={source} autoPlay loop={false} />
    </View>
  );
};

export default PopUpanupanimation;

const styles = StyleSheet.create({
  lotteContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: COLORS.secondaryBlackRGBA,
    justifyContent: 'center',
  },
});
