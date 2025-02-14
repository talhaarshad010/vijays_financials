import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const MyText = ({
  text,
  textStyle,
  fontSize,
  color,
  fontWeight,
  onPress,
  children,
}) => {
  const theme = useSelector(state => state?.Theme?.currentTheme);
  const isDarkMode = theme === 'dark';

  return (
    <Text
      onPress={onPress}
      style={[
        textStyle,
        {
          fontSize,
          color: color || (isDarkMode ? 'white' : 'black'), // Apply theme color
          fontWeight,
        },
      ]}
      allowFontScaling={false}>
      {text} {children}
    </Text>
  );
};

export default MyText;
