import {Image, ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Entypo from 'react-native-vector-icons/Entypo';
import Colors from '../Styles/Colors';
import WrapperContainer from '../components/WrapperContainer';
import MyHeader from '../components/Header';
import MyText from '../components/TextComponent';
import MyTextInput from '../components/TextInputComponent';
import MyButton from '../components/CustomButton';
import {AxiosBaseUrl} from '../config/axiosBaseUrl';
import {checkMinLength} from '../utils/validations';
import ToastMessage from '../Hooks/ToastMessage';
import {useConfirmPasswordMutation} from '../store/Reducers/CallingProducts';
import {logo} from '../utils/ImageLinks';
const ConfirmPassword = ({navigation, route}) => {
  // const {otp, userEmail} = route.params;
  // console.log('data from route:', otp, userEmail);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const {Toasts} = ToastMessage();
  // const [ConfirmPassword] = useConfirmPasswordMutation();
  const updatePassword = async () => {
    try {
      if (password === confirmPassword) {
        const newPassword = confirmPassword;
        if (
          checkMinLength(password, 8, 'Password') &&
          checkMinLength(confirmPassword, 8, 'Password')
        ) {
          return Toasts(
            'Error',
            'Password must be at least 8 characters long',
            'error',
            4000,
          );
        }
        let payload = {
          userEmail: userEmail,
          otp: otp,
          newPassword: newPassword,
        };
        const res = await ConfirmPassword(payload);
        if (res.data.success) {
          Toasts('INFO', res.data.message, 'info', 4000);
          navigation.navigate('LogIn');
        } else {
          Toasts('INFO', res.data.message, 'info', 4000);
        }
      } else {
        Toasts('INFO', 'Password must be same!', 'error', 4000);
      }
    } catch (error) {
      console.log(
        'Error occurred at confirm password:',
        error.response ? error.response.data : error.message,
      );
      Toasts('Error', 'Something went wrong, please try again.', 'error', 4000);
    }
  };

  return (
    <WrapperContainer>
      <ScrollView>
        <View style={styles.cont_01}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: responsiveHeight(5),
            }}>
            <Image style={styles.Logo} source={logo} />
          </View>
          <View style={styles.recover}>
            <MyText
              color={Colors.black}
              fontWeight={'bold'}
              fontSize={responsiveFontSize(3.5)}
              textStyle={styles.HelloAgain}
              text={'Confirm Password'}
            />
            <MyText
              fontSize={responsiveFontSize(2)}
              textStyle={{...styles.slogan, width: responsiveWidth(70)}}
              text={'Please Enter to confirm your password'}
            />
          </View>
          <View style={styles.cont_01_01}>
            <MyTextInput
              value={password}
              onChangeText={text => {
                setPassword(text);
              }}
              placeholder={'Enter Password'}
              feildName={'Password'}
              textstyle={{fontSize: responsiveFontSize(1.2)}}
            />
            <MyTextInput
              value={confirmPassword}
              onChangeText={text => {
                setConfirmPassword(text);
              }}
              placeholder={'Enter Password'}
              feildName={'Confirm Password'}
              textstyle={{fontSize: responsiveFontSize(1.2)}}
            />

            <View>
              <MyButton
                onPress={() => {
                  // updatePassword();
                }}
                fontWeight={'bold'}
                color={Colors.white}
                style={styles.btn}
                textstyle={{fontWeight: 'bold'}}
                text={'Confirm'}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </WrapperContainer>
  );
};

export default ConfirmPassword;

const styles = StyleSheet.create({
  header: {marginTop: responsiveHeight(2)},
  cont_01: {
    flex: 1,
    justifyContent: 'space-between',
    marginVertical: responsiveHeight(4),
  },
  recover: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  HelloAgain: {
    fontSize: responsiveFontSize(3),
    color: Colors.black,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  slogan: {
    fontSize: responsiveFontSize(2),
    textAlign: 'center',
  },
  cont_01_01: {
    flex: 0.8,
    marginHorizontal: responsiveWidth(10),
    justifyContent: 'space-around',
    marginVertical: responsiveHeight(7),
  },
  cont_02: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: responsiveHeight(19),
  },

  btn: {
    marginTop: responsiveHeight(4),
  },
  Logo: {
    height: responsiveHeight(25),
    width: responsiveWidth(100),
    resizeMode: 'cover',
  },
});
