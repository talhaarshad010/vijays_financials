import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import WrapperContainer from '../components/WrapperContainer';
import MyText from '../components/TextComponent';
import {logo} from '../utils/ImageLinks';
import Colors from '../Styles/Colors';
const Modes = ({}) => {
  const [isNormal, setNormal] = useState(false);
  const [isPro, setPro] = useState(false);
  return (
    <WrapperContainer>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.cont_01}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: responsiveHeight(10),
              }}>
              <Image style={styles.Logo} source={logo} />
            </View>
            <View>
              <MyText
                color={'#000'}
                text={'Select Mode'}
                fontSize={responsiveFontSize(3)}
                fontWeight={'bold'}
                textStyle={{textAlign: 'center'}}
              />
            </View>

            <View style={{paddingVertical: responsiveHeight(5)}}>
              <View
                style={{
                  alignSelf: 'center',
                  height: responsiveHeight(7),
                  width: responsiveWidth(90),
                  backgroundColor: Colors.white,
                  shadowColor: 'gray',
                  shadowOffset: {width: 0, height: 2},
                  shadowOpacity: 0.5,
                  shadowRadius: 4,
                  elevation: 5,
                  borderRadius: responsiveWidth(10),
                  paddingHorizontal: responsiveWidth(5),
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    setNormal(!isNormal);
                  }}
                  style={{
                    paddingHorizontal: responsiveWidth(3),
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      setNormal(!isNormal);
                    }}
                    style={{
                      height: responsiveWidth(6),
                      width: responsiveWidth(6),
                      borderColor: '#000',
                      borderWidth: responsiveWidth(0.2),
                      borderRadius: responsiveWidth(1),
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    {!isNormal ? (
                      <Image
                        source={require('../assets/Images/tick.png')}
                        style={{
                          height: responsiveWidth(4),
                          width: responsiveWidth(4),
                          tintColor: '#000',
                        }}
                      />
                    ) : null}
                  </TouchableOpacity>
                </TouchableOpacity>
                <MyText
                  text={'Normal Mode'}
                  fontSize={responsiveFontSize(2)}
                  color={'#000'}
                  fontWeight={'bold'}
                />
              </View>
              <View
                style={{
                  alignSelf: 'center',
                  height: responsiveHeight(7),
                  width: responsiveWidth(90),
                  backgroundColor: Colors.white,
                  shadowColor: 'gray',
                  shadowOffset: {width: 0, height: 2},
                  shadowOpacity: 0.5,
                  shadowRadius: 4,
                  elevation: 5,
                  borderRadius: responsiveWidth(10),
                  paddingHorizontal: responsiveWidth(5),
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: responsiveHeight(4),
                }}>
                <TouchableOpacity
                  onPress={() => {
                    setPro(!isPro);
                  }}
                  style={{
                    paddingHorizontal: responsiveWidth(3),
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      setPro(!isPro);
                    }}
                    style={{
                      height: responsiveWidth(6),
                      width: responsiveWidth(6),
                      borderColor: '#000',
                      borderWidth: responsiveWidth(0.2),
                      borderRadius: responsiveWidth(1),
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    {!isPro ? (
                      <Image
                        source={require('../assets/Images/tick.png')}
                        style={{
                          height: responsiveWidth(4),
                          width: responsiveWidth(4),
                          tintColor: '#000',
                        }}
                      />
                    ) : null}
                  </TouchableOpacity>
                </TouchableOpacity>
                <MyText
                  text={'Pro Mode'}
                  fontSize={responsiveFontSize(2)}
                  color={'#000'}
                  fontWeight={'bold'}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </WrapperContainer>
  );
};

export default Modes;

const styles = StyleSheet.create({
  cont_01: {
    flex: 1,
  },
  Logo: {
    height: responsiveHeight(25),
    width: responsiveWidth(100),
    resizeMode: 'cover',
  },
});
