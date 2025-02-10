import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Colors from '../Styles/Colors';
import MyText from './TextComponent';
import {BackIcon} from '../utils/shortCuts'; // BackIcon is now a component
import {logo} from '../utils/ImageLinks';

const MyHeader = ({
  ScreenName,
  MarginLeft,
  style = {},
  showLeftIcon,
  onPressleft = () => {},
  onPressright = () => {},
}) => {
  return (
    <View style={[styles.header, style]}>
      {/* Conditionally render Left View (Back Icon) */}
      {showLeftIcon && (
        <TouchableOpacity onPress={onPressleft} style={styles.sideView}>
          {BackIcon}
        </TouchableOpacity>
      )}

      {/* Screen Name (Always Centered) */}
      <View style={styles.centerView}>
        <MyText
          color={Colors.black}
          fontWeight="bold"
          text={ScreenName}
          fontSize={responsiveFontSize(2.5)}
          textStyle={[styles.ScreenName, {marginLeft: MarginLeft}]}
        />
      </View>

      {/* Conditionally render Right View (Logo) */}
      <View onPress={onPressright} style={styles.sideView}>
        <Image source={logo} style={styles.Logo} />
      </View>
    </View>
  );
};

export default MyHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Ensure left and right icons do not overlap with the screen name
    paddingHorizontal: responsiveWidth(3),
    paddingVertical: responsiveHeight(1),
    width: '100%',
    elevation: 0.6,
    backgroundColor: Colors.white,
  },
  centerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ScreenName: {
    color: Colors.black,
    fontWeight: '600',
    textAlign: 'center',
  },
  sideView: {
    width: responsiveWidth(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  Logo: {
    height: responsiveHeight(5),
    width: responsiveWidth(15),
    resizeMode: 'cover',
  },
});
