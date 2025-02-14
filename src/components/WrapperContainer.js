import {SafeAreaView, StyleSheet, View, useColorScheme} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const WrapperContainer = ({style = {}, children}) => {
  const systemTheme = useColorScheme();
  const userTheme = useSelector(state => state?.Theme?.currentTheme);
  const theme = userTheme === 'system' ? systemTheme : userTheme;
  console.log('first====>', systemTheme);
  console.log('first====dsd>', userTheme);
  const isDark = theme === 'dark';

  return (
    <View
      style={[
        styles.Container,
        {backgroundColor: isDark ? '#121212' : '#fff'},
        style,
      ]}>
      <SafeAreaView style={{flex: 1}}>{children}</SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
});

export default WrapperContainer;
