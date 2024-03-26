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
import FavoriteItem from '../Components/FavoriteItem';

const FavoriteScreen = ({navigation}: any) => {
  const FavoritesList = useStore((state: any) => state.FavoritesList);
  const addToFavoriteList = useStore((state: any) => state.addToFavoriteList);
  const deleteFromFavoriteList = useStore(
    (state: any) => state.deleteFromFavoriteList,
  );
  const tabBarHeight = useBottomTabBarHeight();

  const ToggleFavourite = (favourite: boolean, type: string, id: string) => {
    favourite ? deleteFromFavoriteList(type, id) : addToFavoriteList(type, id);
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
              <HeaderBar title="Favorites" />

              {FavoritesList.length == 0 ? (
                <EmptyAnimation title="Cart is empty" />
              ) : (
                <View style={styles.ListItemContainer}>
                  {FavoritesList.map((data: any) => (
                    <TouchableOpacity
                      key={data.id}
                      onPress={() => {
                        navigation.push('Details', {
                          index: data.index,
                          id: data.id,
                          type: data.type,
                        });
                      }}>
                      <FavoriteItem
                        id={data.id}
                        imagelink_portrait={data.imagelink_portrait}
                        name={data.name}
                        special_ingredient={data.special_ingredient}
                        type={data.type}
                        ingredients={data.ingredients}
                        average_rating={data.average_rating}
                        ratings_count={data.ratings_count}
                        roasted={data.roasted}
                        description={data.description}
                        favourite={data.favourite}
                        ToggleFavourite={ToggleFavourite}
                      />
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default FavoriteScreen;

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
