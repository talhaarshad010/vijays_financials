import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WrapperContainer from '../components/WrapperContainer';
import MyHeader from '../components/Header';
import {BackIcon} from '../utils/shortCuts';
import {logo} from '../utils/ImageLinks';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const financeData = () => {
  return (
    <WrapperContainer>
      <SafeAreaView>
        <View>
          <MyHeader
            rightView={<Image source={logo} style={styles.Logo} />}
            leftView={BackIcon}
            ScreenName={'Information'}
          />
        </View>
      </SafeAreaView>
    </WrapperContainer>
  );
};

export default financeData;

const styles = StyleSheet.create({
  Logo: {
    height: responsiveHeight(7),
    width: responsiveWidth(10),
    resizeMode: 'cover',
  },
});
