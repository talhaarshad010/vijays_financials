import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Colors from '../Styles/Colors';
import {useNavigation} from '@react-navigation/native';
import MyText from './TextComponent';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Slots = ({slotName, img}) => {
  return (
    <TouchableOpacity style={styles.header}>
      <View style={styles.child_01}>
        <View>{img}</View>
        <MyText
          textStyle={{marginLeft: responsiveWidth(3)}}
          text={slotName}
          color={Colors.black}
          fontSize={responsiveFontSize(2.2)}
        />
      </View>
      <View>
        <AntDesign name="right" size={20} color={Colors.black} />
      </View>
    </TouchableOpacity>
  );
};

export default Slots;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(3),
    paddingVertical: responsiveHeight(1),
    marginHorizontal: responsiveWidth(2),
  },
  child_01: {
    flexDirection: 'row',
    alignItems: 'center',
    width: responsiveWidth(55),
  },
  ScreenName: {
    color: Colors.black,
    fontSize: responsiveFontSize(2.5),
    fontWeight: '600',
  },
});
