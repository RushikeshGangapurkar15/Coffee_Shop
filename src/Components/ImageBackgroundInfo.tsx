import {
  ImageBackground,
  ImageProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import GradientBGicon from './GradientBGicon';
import {COLORS, FONTSIZE, SPACING} from '../theme/theme';

interface ImageBackgroundInfoProps {
  EnableBackHandler: boolean;
  ImageLink: ImageProps;
  type: string;
  id: string;
  favorite: boolean;
  name: string;
  specialIngredient: string;
  ingredient: string;
  avg_rating: number;
  rating: string;
  roasted: string;
  backHandler?: any;
  toggleFavorite: any;
}

const ImageBackgroundInfo: React.FC<ImageBackgroundInfoProps> = ({
  EnableBackHandler,
  ImageLink,
  type,
  id,
  favorite,
  name,
  specialIngredient,
  ingredient,
  avg_rating,
  rating,
  roasted,
  backHandler,
  toggleFavorite,
}) => {
  return (
    <View>
      <ImageBackground source={ImageLink} style={styles.ItemBackgroundImage}>
        {EnableBackHandler ? (
          <View style={styles.ImageHeaderWithBack}>
            <TouchableOpacity onPress={() => backHandler()}>
              <GradientBGicon
                name="Back"
                color={COLORS.primaryLightGreyHex}
                size={FONTSIZE.size_16}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => toggleFavorite(favorite, type, id)}>
              <GradientBGicon
                name="Heart"
                color={
                  favorite ? COLORS.primaryRedHex : COLORS.primaryLightGreyHex
                }
                size={FONTSIZE.size_16}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.ImageHeaderWithoutBack}>
            <TouchableOpacity
              onPress={() => toggleFavorite(favorite, type, id)}>
              <GradientBGicon
                name="Heart"
                color={
                  favorite ? COLORS.primaryRedHex : COLORS.primaryLightGreyHex
                }
                size={FONTSIZE.size_16}
              />
            </TouchableOpacity>
          </View>
        )}
      </ImageBackground>
    </View>
  );
};

export default ImageBackgroundInfo;

const styles = StyleSheet.create({
  ItemBackgroundImage: {
    width: '100%',
    aspectRatio: 20 / 25,
    justifyContent: 'space-between',
  },
  ImageHeaderWithBack: {
    padding: SPACING.space_30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ImageHeaderWithoutBack: {
    padding: SPACING.space_30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
