import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useStore} from '../Store/store';
import {COLORS} from '../theme/theme';
import ImageBackgroundInfo from '../Components/ImageBackgroundInfo';

const DetailScreen = ({navigation, route}: any) => {
  // console.log('route = ', route.params);

  const ItemOfIndex = useStore((state: any) =>
    route.params.type == 'Coffee' ? state.CoffeeList : state.BeanList,
  )[route.params.index];

  const backHandler = () => {
    navigation.pop();
  };

  const addToFavorite = useStore((state: any) => state.addToFavorite);
  const deleFromFavorite = useStore((state: any) => state.deleFromFavorite);
  const toggleFavorite = (favorite: boolean, type: string, id: string) => {
    // console.log('FAV', favorite);
    // console.log('Type:', type);
    // console.log('id', id);
    favorite ? deleFromFavorite(type, id) : addToFavorite(type, id);
  };

  return (
    <View style={styles.screenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <ImageBackgroundInfo
          EnableBackHandler={true}
          ImageLink={ItemOfIndex.imagelink_portrait}
          type={ItemOfIndex.type}
          id={ItemOfIndex.id}
          favorite={ItemOfIndex.favourite}
          name={ItemOfIndex.name}
          specialIngredient={ItemOfIndex.special_ingredient}
          ingredient={ItemOfIndex.ingredient}
          avg_rating={ItemOfIndex.avgerage_rating}
          rating={ItemOfIndex.rating_count}
          roasted={ItemOfIndex.roasted}
          backHandler={backHandler}
          toggleFavorite={toggleFavorite}
        />
      </ScrollView>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  screenContainer: {flex: 1, backgroundColor: COLORS.primaryBlackHex},
  ScrollViewFlex: {flexGrow: 1},
});
