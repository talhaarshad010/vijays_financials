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

const MyHeader = ({
  leftView,
  ScreenName,
  rightView,
  rightText,
  style = {},
  onPressleft = () => {},
  onPressright = () => {},
}) => {
  return (
    <View style={{...styles.header, ...style}}>
      <View style={styles.child_01}>
        {leftView && (
          <TouchableOpacity onPress={onPressleft} style={styles.left}>
            {leftView}
          </TouchableOpacity>
        )}
        <MyText
          color={Colors.black}
          fontWeight={'bold'}
          text={ScreenName}
          fontSize={responsiveFontSize(2.5)}
          textStyle={styles.ScreenName}
        />
      </View>
      {rightView ? (
        <TouchableOpacity onPress={onPressright} style={styles.right}>
          {rightView}
        </TouchableOpacity>
      ) : (
        <Text>{rightText}</Text>
      )}
    </View>
  );
};

export default MyHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(3),
    paddingVertical: responsiveHeight(1),
  },
  child_01: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: responsiveWidth(55),
  },
  ScreenName: {
    color: Colors.black,
    fontSize: responsiveFontSize(2.5),
    fontWeight: '600',
  },
});
