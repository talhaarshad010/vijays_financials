import {StyleSheet, Text, View, Switch} from 'react-native';
import React, {useState} from 'react';
import MyText from './TextComponent';
import Colors from '../Styles/Colors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const MySwitch = ({switchName}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
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
          thumbColor={Colors.blue}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
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
