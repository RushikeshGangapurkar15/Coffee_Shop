import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useStore} from '../Store/store';

const HomeScreen = () => {
  const CoffeeList = useStore((state: any) => state.CoffeeList);
  const BeansList = useStore((state: any) => state.BeanList);
  const [categories, setCategories] = useState([undefined]);
  const [searchText, setSeatchText] = useState(undefined);
  const [categoryIndex, setCategryIndex] = useState({
    index: 0,
    category: categories[0],
  });
  const [sortedCoffee, setSortedCoffee] = useState();
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
