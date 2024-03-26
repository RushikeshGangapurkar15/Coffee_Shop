import {
  ImageProps,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
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
import {MinusIcon, PlusIcon} from './CustomIcons';
interface CartItemProp {
  id: string;
  title: string;
  roasted: string;
  special_ingredient: string;
  imageLink_square: ImageProps;
  prices: any;
  type: string;
  incrementCartItem: any;
  decrementCartItem: any;
}

const CartItem: React.FC<CartItemProp> = ({
  id,
  title,
  roasted,
  special_ingredient,
  imageLink_square,
  prices,
  type,
  incrementCartItem,
  decrementCartItem,
}) => {
  return (
    <View>
      {prices.length != 1 ? (
        <>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
            style={styles.cartGrad}>
            <View style={styles.cartItemRow}>
              <Image source={imageLink_square} style={styles.cartItemImage} />
              <View style={styles.cartItemInfo}>
                <View>
                  <Text style={styles.catItemTitle}>{title}</Text>
                  <Text style={styles.catItemSubTitle}>
                    {special_ingredient}
                  </Text>
                </View>
                <View style={styles.cartRoastedContainer}>
                  <Text style={styles.cartRoastedText}>{roasted}</Text>
                </View>
              </View>
            </View>
            {prices.map((data: any, index: any) => (
              <View key={index.toString()} style={styles.SizeRowontainer}>
                <View style={styles.sizeValueContainer}>
                  <View style={styles.sizeBox}>
                    <Text
                      style={[
                        styles.SizeTExt,
                        {
                          fontSize:
                            type == 'Bean'
                              ? FONTSIZE.size_12
                              : FONTSIZE.size_16,
                        },
                      ]}>
                      {data.size}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: SPACING.space_4,
                      marginRight: SPACING.space_12,
                    }}>
                    <Text style={styles.sizeCurrency}>{data.currency}</Text>
                    <Text style={styles.sizePrize}>{data.price}</Text>
                  </View>
                </View>

                <View style={styles.sizeValueContainer}>
                  <TouchableOpacity
                    style={styles.CartItemIcon}
                    onPress={() => decrementCartItem(id, data.size)}>
                    <MinusIcon
                      height={FONTSIZE.size_10}
                      width={FONTSIZE.size_10}
                      color={COLORS.primaryWhiteHex}
                    />
                  </TouchableOpacity>
                  <View style={styles.sizeContainer}>
                    <Text style={styles.sizeQuantityText}>{data.quantity}</Text>
                  </View>
                  <TouchableOpacity
                    style={styles.CartItemIcon}
                    onPress={() => incrementCartItem(id, data.size)}>
                    <PlusIcon
                      height={FONTSIZE.size_10}
                      width={FONTSIZE.size_10}
                      color={COLORS.primaryWhiteHex}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </LinearGradient>
        </>
      ) : (
        <>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
            style={styles.cartSingleGrad}>
            <View>
              <Image
                source={imageLink_square}
                style={styles.cartSingleItemImage}
              />
            </View>
            <View style={styles.cartSigngleItemInfo}>
              <View>
                <Text style={styles.catItemTitle}>{title}</Text>
                <Text style={styles.catItemSubTitle}>{special_ingredient}</Text>
              </View>
              <View style={styles.singleSizeValueContainer}>
                <View style={styles.sizeBox}>
                  <Text
                    style={[
                      styles.SizeTExt,
                      {
                        fontSize:
                          type == 'Bean' ? FONTSIZE.size_12 : FONTSIZE.size_16,
                      },
                    ]}>
                    {prices[0].size}
                  </Text>
                </View>
                <Text style={styles.sizeCurrency}>
                  {prices[0].currency}
                  <Text style={styles.sizePrize}> {prices[0].price}</Text>
                </Text>
              </View>
              <View style={styles.singleSizeValueContainer}>
                <TouchableOpacity
                  style={styles.CartItemIcon}
                  onPress={() => decrementCartItem(id, prices[0].size)}>
                  <MinusIcon
                    height={FONTSIZE.size_10}
                    width={FONTSIZE.size_10}
                    color={COLORS.primaryWhiteHex}
                  />
                </TouchableOpacity>
                <View style={styles.sizeContainer}>
                  <Text style={styles.sizeQuantityText}>
                    {prices[0].quantity}
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.CartItemIcon}
                  onPress={() => incrementCartItem(id, prices[0].size)}>
                  <PlusIcon
                    height={FONTSIZE.size_10}
                    width={FONTSIZE.size_10}
                    color={COLORS.primaryWhiteHex}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
        </>
      )}
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  cartGrad: {
    flex: 1,
    gap: SPACING.space_12,
    padding: SPACING.space_12,
    borderRadius: BORDERRADIUS.radius_25,
  },
  cartItemImage: {
    height: 130,
    width: 130,
    borderRadius: BORDERRADIUS.radius_25,
  },
  cartItemRow: {
    flexDirection: 'row',
    gap: SPACING.space_12,
    flex: 1,
  },
  cartItemInfo: {
    flex: 1,
    paddingVertical: SPACING.space_4,
    justifyContent: 'space-between',
  },
  catItemTitle: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
  },
  catItemSubTitle: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_12,
    color: COLORS.secondaryLightGreyHex,
  },
  cartRoastedContainer: {
    height: 50,
    width: 50 * 2 + SPACING.space_20,
    borderRadius: BORDERRADIUS.radius_15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primaryDarkGreyHex,
  },
  cartRoastedText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_10,
    color: COLORS.primaryWhiteHex,
  },
  SizeRowontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  sizeBox: {
    backgroundColor: COLORS.primaryBlackHex,
    height: 40,
    width: 100,
    borderRadius: BORDERRADIUS.radius_10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  SizeTExt: {
    fontFamily: FONTFAMILY.poppins_medium,
    // fontSize: FONTSIZE.size_10,
    color: COLORS.secondaryLightGreyHex,
  },
  sizeValueContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sizeCurrency: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryOrangeHex,
  },
  sizePrize: {
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_semibold,
  },
  CartItemIcon: {
    backgroundColor: COLORS.primaryOrangeHex,
    padding: SPACING.space_12,
    borderRadius: BORDERRADIUS.radius_10,
  },
  sizeContainer: {
    backgroundColor: COLORS.primaryBlackHex,
    width: 60,
    borderRadius: BORDERRADIUS.radius_10,
    borderWidth: 2,
    borderColor: COLORS.primaryOrangeHex,
    alignItems: 'center',
    paddingVertical: SPACING.space_4,
  },
  sizeQuantityText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
  },
  cartSingleGrad: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SPACING.space_12,
    gap: SPACING.space_12,
    borderRadius: BORDERRADIUS.radius_25,
  },
  cartSingleItemImage: {
    height: 150,
    width: 150,
    borderRadius: BORDERRADIUS.radius_20,
  },
  cartSigngleItemInfo: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'space-around',
  },
  singleSizeValueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
