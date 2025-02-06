import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Colors from '../Styles/Colors';
import MyText from './TextComponent';

const MyButton = ({
  isLoading,
  text,
  onPress = () => {},
  style,
  textstyle,
  color,
  fontWeight,
  backgroundColor = Colors.blue, // Default background color
  textColor = Colors.white, // Default text color
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{...styles.Container, backgroundColor, ...style}}>
      {isLoading ? (
        <ActivityIndicator size={'large'} color={Colors.white} />
      ) : (
        <MyText
          color={color}
          fontSize={responsiveFontSize(2.5)}
          fontWeight={fontWeight}
          style={{...styles.textstyle, color: textColor, ...textstyle}}
          text={text}
          textStyle={{
            color: Colors.white,
            fontWeight: 'bold',
          }}
        />
      )}
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  Container: {
    height: responsiveHeight(7),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: responsiveWidth(10),
  },
  textstyle: {
    fontSize: responsiveFontSize(2.3),
  },
});
