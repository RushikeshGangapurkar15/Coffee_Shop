import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import GradientBGicon from '../Components/GradientBGicon';
import PaymentMethod from '../Components/PaymentMethod';
import PaymentFooter from '../Components/PaymentFooter';
import LinearGradient from 'react-native-linear-gradient';
import {ChipIcon, VisaIcon} from '../Components/CustomIcons';
import {useStore} from '../Store/store';
import PopUpanupanimation from '../Components/PopUpanupanimation';

const PaymentList = [
  {
    name: 'Wallet',
    icon: 'icon',
    isIcon: true,
  },
  {
    name: 'Google Pay',
    icon: require('../assets/app_images/gpay.png'),
    isIcon: false,
  },
  {
    name: 'Apple Pay',
    icon: require('../assets/app_images/applepay.png'),
    isIcon: false,
  },
  {
    name: 'Amazon Pay',
    icon: require('../assets/app_images/amazonpay.png'),
    isIcon: false,
  },
];

const PaymentScreen = ({navigation, route}: any) => {
  const [paymentMode, setPaymentMode] = useState('Credit card');
  const [showAnimation, setShowAnimation] = useState(false);

  const addToOrderHistryList = useStore(
    (state: any) => state.addToOrderHistryList,
  );
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);

  const buttonPressHandler = () => {
    setShowAnimation(true);
    addToOrderHistryList();
    calculateCartPrice();
    setTimeout(() => {
      setShowAnimation(false);
      navigation.navigate('History');
    }, 2000);
  };

  return (
    <View style={styles.screenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      {showAnimation && (
        <PopUpanupanimation
          style={styles.lotteAnimation}
          source={require('../lottie/successful.json')}
        />
      )}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollviewFlex}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <GradientBGicon
              name="Back"
              color={COLORS.primaryLightGreyHex}
              size={FONTSIZE.size_16}
            />
          </TouchableOpacity>
          <Text style={styles.HeaderText}>Payment</Text>
          <View style={styles.empty} />
        </View>

        <View style={styles.PaymentOptions}>
          <TouchableOpacity onPress={() => setPaymentMode('Credit card')}>
            <View
              style={[
                styles.creditcard,
                {
                  borderColor:
                    paymentMode == 'Credit card'
                      ? COLORS.primaryOrangeHex
                      : COLORS.primaryGreyHex,
                },
              ]}>
              <Text style={styles.creditcardTitle}>Credit Card</Text>
              <View style={styles.creditcardBg}>
                <LinearGradient
                  style={styles.linerGradient}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}
                  colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
                  <View style={styles.creditcardRow}>
                    <ChipIcon
                      width={FONTSIZE.size_20 * 2}
                      height={FONTSIZE.size_20 * 2}
                      color={COLORS.primaryOrangeHex}
                    />
                    <VisaIcon
                      width={FONTSIZE.size_20 * 2}
                      height={FONTSIZE.size_20 * 2}
                      color={COLORS.primaryOrangeHex}
                    />
                  </View>
                  <View style={styles.creditcardNumberContainer}>
                    <Text style={styles.creditcardNumber}>5234</Text>
                    <Text style={styles.creditcardNumber}>9852</Text>
                    <Text style={styles.creditcardNumber}>7852</Text>
                    <Text style={styles.creditcardNumber}>9478</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={styles.creditcardName}>
                      <Text style={styles.subTitle}>Card Holder Name</Text>
                      <Text style={styles.Title}>Rushi Gangapurkar</Text>
                    </View>
                    <View style={styles.creditcardDate}>
                      <Text style={styles.subTitle}>Expiry Date</Text>
                      <Text style={styles.Title}>03/30</Text>
                    </View>
                  </View>
                </LinearGradient>
              </View>
            </View>
          </TouchableOpacity>
          {PaymentList.map((data: any) => (
            <TouchableOpacity
              key={data.name}
              onPress={() => setPaymentMode(data.name)}>
              <PaymentMethod
                paymentMode={paymentMode}
                name={data.name}
                icon={data.icon}
                isIcon={data.isIcon}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <PaymentFooter
        buttonTitle={`Pay with ${paymentMode} `}
        price={{price: route.params.amount, currency: '$'}}
        buttonPressHandler={buttonPressHandler}
      />
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,

    backgroundColor: COLORS.primaryBlackHex,
  },
  scrollviewFlex: {flexGrow: 1},
  headerContainer: {
    paddingHorizontal: SPACING.space_24,
    paddingVertical: SPACING.space_15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  HeaderText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
  },
  empty: {
    height: SPACING.space_36,
    width: SPACING.space_36,
  },
  PaymentOptions: {
    padding: SPACING.space_15,
    gap: SPACING.space_15,
  },
  creditcard: {
    padding: SPACING.space_10,
    gap: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_15,
    borderWidth: 3,
  },
  creditcardTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
    marginLeft: SPACING.space_10,
  },
  creditcardBg: {
    backgroundColor: COLORS.primaryGreyHex,
    borderRadius: BORDERRADIUS.radius_25,
  },
  linerGradient: {
    borderRadius: BORDERRADIUS.radius_25,
    gap: SPACING.space_36,
    paddingHorizontal: SPACING.space_15,
    paddingVertical: SPACING.space_15,
  },
  creditcardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  creditcardNumberContainer: {
    flexDirection: 'row',
    gap: SPACING.space_10,
    alignItems: 'center',
  },
  creditcardNumber: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
    letterSpacing: SPACING.space_4 + SPACING.space_2,
  },
  creditcardName: {alignItems: 'flex-start'},
  creditcardDate: {alignItems: 'center'},
  subTitle: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryLightGreyHex,
  },
  Title: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
  },
  lotteAnimation: {
    flex: 1,
  },
});
