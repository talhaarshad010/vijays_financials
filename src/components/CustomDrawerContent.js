import React, {useEffect, useState} from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {userLOGOUT} from '../store/Reducers/AuthSlice';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import MyText from './TextComponent';
import Colors from '../Styles/Colors';

const CustomDrawerContent = props => {
  const userName = useSelector(state => state.AllReducer.Auth.isName);
  const dispatch = useDispatch();
  const [selectedItem, setSelectedItem] = useState('Home');

  const handleItemPress = item => {
    setSelectedItem(item);
  };

  const CustomDrawerItem = ({label, onPress, isSelected}) => {
    const navigation = useNavigation();

    return (
      <DrawerItem
        label={label}
        onPress={() => {
          navigation.navigate(label);
          onPress(label);
        }}
        labelStyle={{
          color: isSelected ? '#5B9EE1' : '#000',
          fontSize: isSelected ? responsiveFontSize(3) : responsiveFontSize(2),
          fontWeight: isSelected ? 'bold' : '500',
        }}
      />
    );
  };

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        style={{
          marginTop: responsiveHeight(8),
          marginHorizontal: responsiveWidth(3),
        }}
        {...props}>
        <View
          style={{
            marginBottom: responsiveHeight(3),
            marginHorizontal: responsiveWidth(5),
          }}>
          <Image
            source={require('../assets/Images/profile.png')}
            resizeMode="contain"
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}
          />
          <MyText
            color={Colors.grayInput}
            fontSize={responsiveFontSize(2)}
            text={'HEY!'}
            textStyle={{
              textAlign: 'center',
              marginTop: responsiveHeight(2),
            }}
          />
          <MyText
            fontSize={responsiveFontSize(3.5)}
            color={Colors.black}
            fontWeight={'bold'}
            text={userName}
            textStyle={{textAlign: 'center'}}
          />
        </View>
        {[
          {label: 'Home'},
          {label: 'Profile'},
          {label: 'Cart'},
          {label: 'Favourite'},
          {label: 'Orders'},
          {label: 'Notification'},
          {label: 'Account & Settings'},
        ].map(item => (
          <CustomDrawerItem
            key={item.label}
            label={item.label}
            onPress={handleItemPress}
            isSelected={selectedItem === item.label}
          />
        ))}
      </DrawerContentScrollView>
      <DrawerItem label="Sign Out" onPress={() => dispatch(userLOGOUT())} />
    </View>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({});
