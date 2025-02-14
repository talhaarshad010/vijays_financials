import {StyleSheet, View, Switch} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import MyText from './TextComponent';
import Colors from '../Styles/Colors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {toggleTheme} from '../store/Reducers/appTheme'; // Assuming path to themeSlice is correct

const MySwitch = ({switchName}) => {
  const dispatch = useDispatch();
  const currentTheme = useSelector(state => state?.theme?.currentTheme); // Get current theme from Redux store

  const toggleSwitch = () => {
    dispatch(toggleTheme()); // Dispatch action to toggle theme
  };

  return (
    <View style={styles.mainCont}>
      <MyText
        text={switchName}
        color={Colors.black}
        fontSize={responsiveFontSize(2.2)}
      />
      <View>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={currentTheme === 'dark' ? '#f5dd4b' : Colors.blue} // Adjust thumb color based on theme
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={currentTheme === 'dark'} // Set switch state based on current theme
        />
      </View>
    </View>
  );
};

export default MySwitch;

const styles = StyleSheet.create({
  mainCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: responsiveWidth(5),
    marginTop: responsiveHeight(1.5),
  },
});
