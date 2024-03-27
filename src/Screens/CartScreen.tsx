import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useStore} from '../Store/store';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {COLORS, SPACING} from '../theme/theme';
import HeaderBar from '../Components/HeaderrBar';
import EmptyAnimation from '../Components/EmptyAnimation';
import PaymentFooter from '../Components/PaymentFooter';
import CartItem from '../Components/CartItem';

const CartScreen = ({navigation, route}: any) => {
  const CartList = useStore((state: any) => state.CartList);
  const CartPrice = useStore((state: any) => state.CartPrice);
  const decrementCartItemQuantity = useStore(
    (state: any) => state.decrementCartItemQuantity,
  );
  const incrementCartItemQuantity = useStore(
    (state: any) => state.incrementCartItemQuantity,
  );
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);

  const tabBarHeight = useBottomTabBarHeight();
  const buttonPressHandler = () => {
    navigation.push('Payment', {amount: CartPrice});
  };
  const incrementCartItem = (id: string, size: string) => {
    incrementCartItemQuantity(id, size);
    calculateCartPrice();
  };
  const decrementCartItem = (id: string, size: string) => {
    decrementCartItemQuantity(id, size);
    calculateCartPrice();
  };

  return (
    <>
      <View style={styles.cartScreenContainer}>
        <StatusBar backgroundColor={COLORS.primaryBlackHex} />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.ScrollViewFlex}>
          <View style={[styles.ScrollInnerView, {marginBottom: tabBarHeight}]}>
            <View style={styles.ItemContainer}>
              <HeaderBar title="Cart" />

              {CartList.length == 0 ? (
                <EmptyAnimation title="Cart is empty" />
              ) : (
                <View style={styles.ListItemContainer}>
                  {CartList.map((data: any) => (
                    <TouchableOpacity
                      key={data.id}
                      onPress={() => {
                        navigation.push('Details', {
                          index: data.index,
                          id: data.id,
                          type: data.type,
                        });
                      }}>
                      <CartItem
                        id={data.id}
                        title={data.name}
                        roasted={data.roasted}
                        special_ingredient={data.special_ingredient}
                        imageLink_square={data.imagelink_square}
                        prices={data.prices}
                        type={data.type}
                        incrementCartItem={incrementCartItem}
                        decrementCartItem={decrementCartItem}
                      />
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>

            {CartList.length !== 0 ? (
              <PaymentFooter
                buttonTitle="Pay"
                price={{price: CartPrice, currency: '$'}}
                buttonPressHandler={buttonPressHandler}
              />
            ) : (
              <></>
            )}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  cartScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  ScrollInnerView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  ItemContainer: {
    flex: 1,
  },
  ListItemContainer: {
    paddingHorizontal: SPACING.space_20,
    gap: SPACING.space_20,
  },
});
