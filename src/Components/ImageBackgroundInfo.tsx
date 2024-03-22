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
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import {
  BeanIcon,
  BeansIcon,
  DropIcon,
  LocationIcon,
  StarIcon,
} from './CustomIcons';

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

        <View style={styles.ImageInfoOuterContainer}>
          <View style={styles.ImageInfoInnerContainer}>
            <View style={styles.InfoContainerRow}>
              <View>
                <Text style={styles.ItemTitleText}>{name}</Text>
                <Text style={styles.ItemSubtitleText}>{specialIngredient}</Text>
              </View>

              <View style={styles.ItemPropertyContainer}>
                <View style={styles.PropertyFirst}>
                  {type == 'Bean' ? (
                    <BeanIcon
                      height={FONTSIZE.size_18}
                      width={FONTSIZE.size_18}
                      color={COLORS.primaryOrangeHex}
                    />
                  ) : (
                    <BeansIcon
                      height={FONTSIZE.size_24}
                      width={FONTSIZE.size_24}
                      color={COLORS.primaryOrangeHex}
                    />
                  )}

                  <Text
                    style={[
                      styles.PropertyTextFirst,
                      {
                        marginTop:
                          type == 'Bean'
                            ? SPACING.space_4 + SPACING.space_2
                            : 0,
                      },
                    ]}>
                    {type}
                  </Text>
                </View>
                <View style={[styles.PropertyFirst]}>
                  {type == 'Bean' ? (
                    <LocationIcon
                      height={FONTSIZE.size_16}
                      width={FONTSIZE.size_16}
                      color={COLORS.primaryOrangeHex}
                    />
                  ) : (
                    <DropIcon
                      height={FONTSIZE.size_16}
                      width={FONTSIZE.size_16}
                      color={COLORS.primaryOrangeHex}
                    />
                  )}

                  <Text
                    style={[
                      styles.PropertyTextFirst,
                      {marginTop: SPACING.space_2 + SPACING.space_4},
                    ]}>
                    {ingredient}
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.InfoContainerRow}>
              <View style={styles.RatingContainer}>
                <StarIcon
                  color={COLORS.primaryOrangeHex}
                  width={FONTSIZE.size_20}
                  height={FONTSIZE.size_20}
                />

                <Text style={styles.RatingText}>{avg_rating} </Text>
                <Text style={styles.RatingCountText}>({rating}) </Text>
              </View>

              <View style={styles.RoastedContainer}>
                <Text style={styles.RoastedText}>{roasted}</Text>
              </View>
            </View>
          </View>
        </View>
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
  ImageInfoOuterContainer: {
    paddingVertical: SPACING.space_24,
    paddingHorizontal: SPACING.space_30,
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopLeftRadius: BORDERRADIUS.radius_20 * 2,
    borderTopRightRadius: BORDERRADIUS.radius_20 * 2,
  },
  ImageInfoInnerContainer: {
    justifyContent: 'space-between',
    gap: SPACING.space_15,
  },
  InfoContainerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ItemTitleText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_24,
    color: COLORS.primaryWhiteHex,
  },
  ItemSubtitleText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_12,
    color: COLORS.primaryWhiteHex,
  },
  ItemPropertyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.space_20,
  },
  PropertyFirst: {
    height: 55,
    width: 55,
    borderRadius: BORDERRADIUS.radius_15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primaryBlackHex,
  },
  PropertyTextFirst: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_10,
    color: COLORS.primaryWhiteHex,
  },
  RatingContainer: {
    flexDirection: 'row',
    gap: SPACING.space_10,
    alignItems: 'center',
  },
  RatingText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
  },
  RatingCountText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_12,
    color: COLORS.primaryWhiteHex,
  },
  RoastedContainer: {
    height: 55,
    width: 55 * 2 + SPACING.space_20,
    borderRadius: BORDERRADIUS.radius_15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primaryBlackHex,
  },
  RoastedText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_10,
    color: COLORS.primaryWhiteHex,
  },
});
