import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useStore} from '../Store/store';

const CartScreen = () => {
  const CartList = useStore((state: any) => state.CartList);

  console.log('cart', CartList);

  return (
    <View>
      <Text>CartScreen</Text>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
