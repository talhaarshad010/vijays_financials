import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Colors from '../Styles/Colors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Feather from 'react-native-vector-icons/Feather';
import SplashScreen from 'react-native-splash-screen';
import MyText from './TextComponent';
const MyTextInput = ({
  inputstyle = {},
  textstyle = {},
  placeholder,
  onChangeText,
  value,
  placeholderTextColor,
  RightView,
  LeftView,
  props,
  feildName,
}) => {
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);
  return (
    <View>
      <MyText
        color={Colors.black}
        fontWeight={'bold'}
        fontSize={responsiveFontSize(2.2)}
        style={styles.feildName}
        text={feildName}
        textStyle={{
          fontWeight: 'bold',
          fontSize: responsiveFontSize(2),
          marginVertical: responsiveHeight(1),
        }}
      />
      <View style={{...styles.inputstyle, ...inputstyle}}>
        <View style={styles.child_01}>
          {!!LeftView ? <View>{LeftView}</View> : null}
          <View style={{flexDirection: 'column'}}>
            <TextInput
              allowFontScaling={false}
              secureTextEntry={isShow && true}
              cursorColor={'black'}
              placeholder={placeholder}
              onChangeText={onChangeText}
              value={value}
              placeholderTextColor={placeholderTextColor}
              {...props}
              style={{
                ...styles.textstyle,
                ...textstyle,
              }}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            setIsShow(!isShow);
          }}>
          {!!RightView ? (
            <View>
              <Feather
                name={isShow ? 'eye' : 'eye-off'}
                size={20}
                color="black"
              />
            </View>
          ) : null}
        </TouchableOpacity>
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
    backgroundColor: Colors.whiteinput,
    elevation: 2,
  },
  textstyle: {
    width: responsiveWidth(50),
    flex: 1,
    color: Colors.black,
  },
  child_01: {
    width: responsiveWidth(58),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  feildName: {
    color: Colors.black,
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    marginVertical: responsiveHeight(1.5),
  },
});
