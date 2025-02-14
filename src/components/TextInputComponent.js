import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Feather from 'react-native-vector-icons/Feather';
import MyText from './TextComponent';

const MyTextInput = ({
  inputstyle = {},
  textstyle = {},
  placeholder,
  inputtype,
  onChangeText,
  value,
  placeholderTextColor,
  RightView,
  LeftView,
  props,
  feildName,
}) => {
  const [isShow, setIsShow] = useState(false);
  const theme = useSelector(state => state?.Theme?.currentTheme);
  const isDarkMode = theme === 'dark';

  return (
    <View>
      <MyText
        fontWeight="bold"
        fontSize={responsiveFontSize(2.2)}
        text={feildName}
        textStyle={{
          fontWeight: 'bold',
          fontSize: responsiveFontSize(2),
          marginVertical: responsiveHeight(1),
        }}
      />
      <View
        style={[
          styles.inputstyle,
          inputstyle,
          {backgroundColor: isDarkMode ? '#333' : '#fff'}, // Dark mode vs light mode background
        ]}>
        <View style={styles.child_01}>
          {!!LeftView && <View>{LeftView}</View>}
          <View style={{flexDirection: 'column'}}>
            <TextInput
              allowFontScaling={false}
              secureTextEntry={isShow}
              cursorColor={isDarkMode ? 'white' : 'black'}
              keyboardType={inputtype}
              placeholder={placeholder}
              onChangeText={onChangeText}
              value={value}
              placeholderTextColor={
                placeholderTextColor || (isDarkMode ? '#ccc' : '#777')
              }
              {...props}
              style={[
                styles.textstyle,
                textstyle,
                {color: isDarkMode ? 'white' : 'black'}, // Apply theme color
              ]}
            />
          </View>
        </View>
        {!!RightView && (
          <TouchableOpacity onPress={() => setIsShow(!isShow)}>
            <Feather
              name={isShow ? 'eye' : 'eye-off'}
              size={20}
              color={isDarkMode ? 'white' : 'black'}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default MyTextInput;

const styles = StyleSheet.create({
  inputstyle: {
    height: responsiveHeight(7),
    borderRadius: responsiveWidth(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(4),
    elevation: 2,
  },
  textstyle: {
    width: responsiveWidth(70),
    flex: 1,
  },
  child_01: {
    width: responsiveWidth(58),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
