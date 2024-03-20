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
import {BORDERRADIUS, COLORS, FONTSIZE, SPACING} from '../theme/theme';
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
            height={FONTSIZE.size_18}
            width={FONTSIZE.size_18}
            color={COLORS.primaryOrangeHex}
          />
          <Text style={styles.CardRatingText}>{avg_rating}</Text>
        </View>
      </ImageBackground>
      <Text>{name}</Text>
      <Text>{specialIngredient}</Text>

      <View>
        <Text>
          $ <Text>{price.price}</Text>
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
  CardLinerGrad: {},
  cardImageBack: {
    width: CARD_WIDTH,
    height: CARD_WIDTH,
    borderRadius: BORDERRADIUS.radius_20,
    marginBottom: SPACING.space_15,
    overflow: 'hidden',
  },
  CardRatingContainer: {},
  CardRatingText: {},
});
