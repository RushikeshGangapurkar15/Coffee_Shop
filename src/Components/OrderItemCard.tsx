import {Image, ImageProps, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';

interface OrderItemCardProps {
  type: string;
  name: string;
  imagelink_square: ImageProps;
  prices: any;
  ItemPrice: string;
  special_ingredient: string;
}

const OrderItemCard: React.FC<OrderItemCardProps> = ({
  type,
  name,
  imagelink_square,
  prices,
  ItemPrice,
  special_ingredient,
}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
      style={styles.CardLinearGred}>
      <View style={styles.cardInfo}>
        <View style={styles.cardImageInfo}>
          <Image source={imagelink_square} style={styles.cardImage} />
          <View>
            <Text style={styles.cardTitle}>{name}</Text>
            <Text style={styles.cardSubTitle}>{special_ingredient}</Text>
          </View>
          <View>
            <Text style={styles.cardCurrency}>
              $ <Text style={styles.cardPrice}>{ItemPrice}</Text>
            </Text>
          </View>
        </View>
      </View>
      {prices.map((data: any, index: any) => (
        <View key={index.toString()} style={styles.cardTableRow}>
          <View style={styles.cardTableRow}>
            <View style={styles.sizeBoxLeft}>
              <Text
                style={[
                  styles.sizeText,
                  {
                    fontSize:
                      type == 'Bean' ? FONTSIZE.size_12 : FONTSIZE.size_16,
                  },
                ]}>
                {data.size}
              </Text>
            </View>

            <View style={styles.sizeBoxRight}>
              <Text style={styles.sizeCurrency}>
                {data.currency}
                <Text style={styles.price}>{data.price}</Text>
              </Text>
            </View>
          </View>

          <View style={styles.cardTableRow}>
            <Text style={styles.cardQuantity}>
              x <Text style={styles.price}>{data.quantity}</Text>
            </Text>
            <Text style={styles.cardQuantity}>
              $ {(data.quantity * data.price).toFixed(2).toString()}
            </Text>
          </View>
        </View>
      ))}
    </LinearGradient>
  );
};

export default OrderItemCard;

const styles = StyleSheet.create({
  CardLinearGred: {
    gap: SPACING.space_20,
    padding: SPACING.space_20,
    borderRadius: BORDERRADIUS.radius_25,
  },
  cardInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardImageInfo: {
    flexDirection: 'row',
    gap: SPACING.space_20,
    alignItems: 'center',
  },
  cardImage: {
    borderRadius: BORDERRADIUS.radius_20,
    height: 90,
    width: 90,
  },
  cardTitle: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
  },
  cardSubTitle: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_12,
    color: COLORS.secondaryLightGreyHex,
  },
  cardCurrency: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryOrangeHex,
  },
  cardPrice: {
    color: COLORS.primaryWhiteHex,
  },
  cardTableRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sizeBoxLeft: {
    backgroundColor: COLORS.primaryBlackHex,
    height: 45,
    flex: 1,
    borderTopLeftRadius: BORDERRADIUS.radius_15,
    borderBottomLeftRadius: BORDERRADIUS.radius_15,
    borderRightWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: COLORS.primaryGreyHex,
  },
  sizeText: {
    fontFamily: FONTFAMILY.poppins_medium,

    color: COLORS.secondaryLightGreyHex,
  },
  sizeBoxRight: {
    backgroundColor: COLORS.primaryBlackHex,
    height: 45,
    flex: 1,
    borderTopRightRadius: BORDERRADIUS.radius_15,
    borderBottomRightRadius: BORDERRADIUS.radius_15,
    borderLeftWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftColor: COLORS.primaryGreyHex,
  },
  sizeCurrency: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryOrangeHex,
  },
  price: {
    color: COLORS.primaryWhiteHex,
  },
  cardQuantity: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryOrangeHex,
    textAlign: 'center',
    flex: 1,
  },
});
