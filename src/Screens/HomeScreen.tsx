import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useStore} from '../Store/store';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import HeaderBar from '../Components/HeaderrBar';
import {SearchIcon} from '../Components/CustomIcons';

const getCategories = (data: any) => {
  let temp: any = {};

  for (let i = 0; i < data.length; i++) {
    if (temp[data[i].name] === undefined) {
      temp[data[i].name] = 1;
    } else {
      temp[data[i].name]++;
    }
  }

  let categories = Object.keys(temp);
  categories.unshift('All');

  return categories;
};

const getCoffeeList = (category: string, data: any) => {
  if (category == 'All') {
    return data;
  } else {
    let CoffeeList = data.filter((item: any) => item.name == category);
    return CoffeeList;
  }
};

const HomeScreen = () => {
  const CoffeeList = useStore((state: any) => state.CoffeeList);
  const BeansList = useStore((state: any) => state.BeanList);
  const [categories, setCategories] = useState(getCategories(CoffeeList));
  const [searchText, setSeatchText] = useState('');
  const [categoryIndex, setCategryIndex] = useState({
    index: 0,
    category: categories[0],
  });
  const [sortedCoffee, setSortedCoffee] = useState([
    ...getCoffeeList(categoryIndex.category, CoffeeList),
  ]);

  const tabBarHeight = useBottomTabBarHeight();
  // console.log(categories);
  // console.log(sortedCoffee.length);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollviewFlex}>
        {/* APP HEADER */}
        <HeaderBar title="CoFFee" />

        {/* Hero text */}
        <Text style={styles.heroText}>Find The Best {'\n'}Coffee for you</Text>

        {/* search input */}
        <View style={styles.InputContainer}>
          <TouchableOpacity style={styles.InputIcon}>
            <SearchIcon
              height={FONTSIZE.size_18}
              width={FONTSIZE.size_18}
              color={
                searchText.length > 0
                  ? COLORS.primaryOrangeHex
                  : COLORS.primaryLightGreyHex
              }
            />
          </TouchableOpacity>

          <TextInput
            placeholder="Find my coffee.."
            value={searchText}
            onChangeText={text => setSeatchText(text)}
            placeholderTextColor={COLORS.primaryLightGreyHex}
            style={styles.TextInput}
          />
        </View>

        {/* categories  */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryScroll}>
          {categories.map((data, index) => (
            <View key={index.toString()} style={styles.categoryScrollContainer}>
              <TouchableOpacity
                style={styles.categoryScrollViewItem}
                onPress={() => {
                  setCategryIndex({index: index, category: categories[index]});

                  setSortedCoffee(getCoffeeList(categories[index], CoffeeList));
                }}>
                <Text
                  style={[
                    styles.categoryTextActive,
                    categoryIndex.index == index
                      ? {color: COLORS.primaryOrangeHex}
                      : {},
                  ]}>
                  {data}
                </Text>
                {categoryIndex.index == index ? (
                  <View style={styles.activeCategory} />
                ) : (
                  <></>
                )}
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  scrollviewFlex: {
    flexGrow: 1,
  },
  heroText: {
    fontSize: FONTSIZE.size_28,
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryWhiteHex,
    paddingLeft: SPACING.space_30,
  },
  TextInput: {
    flex: 1,
    height: SPACING.space_20 * 3,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
    alignItems: 'center',
  },
  InputIcon: {marginHorizontal: SPACING.space_20},
  InputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: SPACING.space_30,
    borderRadius: BORDERRADIUS.radius_20,
    backgroundColor: COLORS.primaryDarkGreyHex,
  },
  categoryScrollContainer: {
    paddingHorizontal: SPACING.space_15,
    marginBottom: SPACING.space_20,
  },
  categoryScroll: {
    paddingHorizontal: SPACING.space_20,
    marginBottom: SPACING.space_20,
    color: COLORS.primaryWhiteHex,
  },
  categoryScrollViewItem: {
    alignItems: 'center',
  },
  categoryTextActive: {
    color: COLORS.primaryLightGreyHex,
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    marginBottom: SPACING.space_4,
  },
  activeCategory: {
    height: SPACING.space_10,
    width: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_10,
    backgroundColor: COLORS.primaryOrangeHex,
  },
});
