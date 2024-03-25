import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useStore} from '../Store/store';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import ImageBackgroundInfo from '../Components/ImageBackgroundInfo';
import PaymentFooter from '../Components/PaymentFooter';

const DetailScreen = ({navigation, route}: any) => {
  // console.log('route = ', route.params);

  const ItemOfIndex = useStore((state: any) =>
    route.params.type == 'Coffee' ? state.CoffeeList : state.BeanList,
  )[route.params.index];

  const backHandler = () => {
    navigation.pop();
  };

  const addToCart = useStore((state: any) => state.addToCart);
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);
  const addToFavorite = useStore((state: any) => state.addToFavorite);
  const deleFromFavorite = useStore((state: any) => state.deleFromFavorite);
  const toggleFavorite = (favorite: boolean, type: string, id: string) => {
    // console.log('FAV', favorite);
    // console.log('Type:', type);
    // console.log('id', id);
    favorite ? deleFromFavorite(type, id) : addToFavorite(type, id);
  };

  const [price, setPrice] = useState(ItemOfIndex.prices[0]);
  const [fullDesc, setFullDesc] = useState(false);

  const addToCartHandler = ({
    id,
    index,
    name,
    roasted,
    imagelink_square,
    special_ingredient,
    type,
    price,
  }: any) => {
    addToCart({
      id,
      index,
      name,
      roasted,
      imagelink_square,
      special_ingredient,
      type,
      prices: [{...price, quantity: 1}],
    });
    // calculateCartPrice();
    navigation.navigate('Cart');
  };
  return (
    <View style={styles.screenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      {/* {console.log(ItemOfIndex)} */}
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
          ingredient={ItemOfIndex.ingredients}
          avg_rating={ItemOfIndex.average_rating}
          rating={ItemOfIndex.ratings_count}
          roasted={ItemOfIndex.roasted}
          backHandler={backHandler}
          toggleFavorite={toggleFavorite}
        />

        <View style={styles.FooterInfo}>
          <Text style={styles.InfoTitle}>Description</Text>
          {fullDesc ? (
            <TouchableWithoutFeedback onPress={() => setFullDesc(!fullDesc)}>
              <Text style={styles.description}>{ItemOfIndex.description}</Text>
            </TouchableWithoutFeedback>
          ) : (
            <TouchableWithoutFeedback onPress={() => setFullDesc(!fullDesc)}>
              <Text numberOfLines={3} style={styles.description}>
                {ItemOfIndex.description}
              </Text>
            </TouchableWithoutFeedback>
          )}

          <Text style={styles.InfoTitle}>Size</Text>
          <View style={styles.sizeOuterContainer}>
            {ItemOfIndex.prices.map((data: any) => (
              <TouchableOpacity
                key={data.size}
                style={[
                  styles.sizeBox,
                  {
                    borderColor:
                      data.size == price.size
                        ? COLORS.primaryOrangeHex
                        : COLORS.primaryDarkGreyHex,
                  },
                ]}
                onPress={() => setPrice(data)}>
                <Text
                  style={[
                    styles.SizeText,
                    {
                      fontSize:
                        ItemOfIndex.type == 'bean'
                          ? FONTSIZE.size_14
                          : FONTSIZE.size_16,

                      color:
                        data.size == price.size
                          ? COLORS.primaryOrangeHex
                          : COLORS.primaryLightGreyHex,
                    },
                  ]}>
                  {data.size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <PaymentFooter
          price={price}
          buttonHandler={() => {
            addToCartHandler({
              id: ItemOfIndex.id,
              index: ItemOfIndex.index,
              name: ItemOfIndex.name,
              roasted: ItemOfIndex.roasted,
              imagelink_square: ItemOfIndex.imagelink_square,
              special_ingredient: ItemOfIndex.special_ingredient,
              type: ItemOfIndex.type,
              price: price,
            });
          }}
          buttonTitle="Add To Cart"
        />
      </ScrollView>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  screenContainer: {flex: 1, backgroundColor: COLORS.primaryBlackHex},
  ScrollViewFlex: {flexGrow: 1, justifyContent: 'space-between'},
  FooterInfo: {
    padding: SPACING.space_20,
  },
  InfoTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
    marginBottom: SPACING.space_10,
  },
  description: {
    fontFamily: FONTFAMILY.poppins_regular,
    letterSpacing: 0.5,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
    marginBottom: SPACING.space_30,
  },
  sizeBox: {
    flex: 1,
    backgroundColor: COLORS.primaryDarkGreyHex,
    alignItems: 'center',
    justifyContent: 'center',
    height: SPACING.space_24 * 2,
    borderRadius: BORDERRADIUS.radius_10,
    borderWidth: 2,
  },
  sizeOuterContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
  },
  SizeText: {
    fontFamily: FONTFAMILY.poppins_medium,
  },
});
