import {
  Dimensions,
  Image,
  ImageBackground,
  ImageProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import {StarIcon} from './CustomIcons';
import BGbutton from './BGbutton';

const CARD_WIDTH = Dimensions.get('window').width * 0.32;

interface CoffeeCardProps {
  id: string;
  index: number;
  type: string;
  name: string;
  rosted: string;
  imageLink: ImageProps;
  specialIngredient: string;
  avg_rating: number;
  price: any;
  buttonPressHandler: any;
}
const CoffeeCard: React.FC<CoffeeCardProps> = ({
  id,
  index,
  type,
  rosted,
  imageLink,
  name,
  specialIngredient,
  avg_rating,
  price,
  buttonPressHandler,
}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.CardLinerGrad}
      colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
      <ImageBackground
        source={imageLink}
        style={styles.cardImageBack}
        resizeMode="cover">
        <View style={styles.CardRatingContainer}>
          <StarIcon
            height={FONTSIZE.size_16}
            width={FONTSIZE.size_16}
            color={COLORS.primaryOrangeHex}
          />
          <Text style={styles.CardRatingText}>{avg_rating}</Text>
        </View>
      </ImageBackground>
      <Text style={styles.cardTitle}>{name}</Text>
      <Text style={styles.cardSubTitle}>{specialIngredient}</Text>

      <View style={styles.cardFooter}>
        <Text style={styles.cardCurrency}>
          $ <Text style={styles.cardPrice}>{price.price}</Text>
        </Text>

        <TouchableOpacity>
          <BGbutton
            color={COLORS.primaryWhiteHex}
            name={'plus'}
            BGColor={COLORS.primaryOrangeHex}
            size={FONTSIZE.size_10}
          />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default CoffeeCard;

const styles = StyleSheet.create({
  CardLinerGrad: {
    padding: SPACING.space_15,
    borderRadius: BORDERRADIUS.radius_25,
  },
  cardImageBack: {
    width: CARD_WIDTH,
    height: CARD_WIDTH,
    borderRadius: BORDERRADIUS.radius_20,
    marginBottom: SPACING.space_15,
    overflow: 'hidden',
  },
  CardRatingContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.primaryBlackRGBA,
    alignItems: 'center',
    justifyContent: 'center',
    gap: SPACING.space_15,
    paddingHorizontal: SPACING.space_10,
    position: 'absolute',
    borderBottomLeftRadius: BORDERRADIUS.radius_20,
    borderTopRightRadius: BORDERRADIUS.radius_20,
    top: 0,
    right: 0,
  },
  CardRatingText: {
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.primaryWhiteHex,
    lineHeight: 22,
    fontSize: FONTSIZE.size_14,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SPACING.space_15,
  },
  cardTitle: {
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.primaryWhiteHex,

    fontSize: FONTSIZE.size_16,
  },
  cardSubTitle: {
    fontFamily: FONTFAMILY.poppins_light,
    color: COLORS.primaryWhiteHex,

    fontSize: FONTSIZE.size_10,
  },
  cardCurrency: {
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryOrangeHex,

    fontSize: FONTSIZE.size_18,
  },
  cardPrice: {color: COLORS.primaryWhiteHex},
});
