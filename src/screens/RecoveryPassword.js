import {ScrollView, StyleSheet, View} from 'react-native';
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
import ToastMessage from '../Hooks/ToastMessage';
import {useForgetPasswordMutation} from '../store/API/CallingProducts';
const RecoveryPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  const {Toasts} = ToastMessage();
  const [ForgetPassword, {isLoading}] = useForgetPasswordMutation();
  const CodeSender = async () => {
    if (!email) {
      Alert.alert('Error', 'Please enter an email');
      return;
    }
    try {
      let payload = {
        userEmail: email,
      };
      const response = await ForgetPassword(payload);
      Toasts('Otp Sent!', response?.data?.message, 'info', 5000);
      navigation.navigate('Otp', {
        email: email,
      });
    } catch (error) {
      Toasts('Error', 'Email Not Exist', 'error', 5000);
    }
  };
  // const CodeSender = async () => {
  //   // Check if email is provided
  //   if (!email) {
  //     Toasts('Error', 'Please enter an email', 'error', 5000);
  //     return;
  //   }

  //   // Validate email format (simple check, can be improved)
  //   const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  //   if (!emailPattern.test(email)) {
  //     Toasts('Error', 'Please enter a valid email address', 'error', 5000);
  //     return;
  //   }

  //   try {
  //     let payload = {
  //       userEmail: email,
  //     };
  //     const response = await ForgetPassword(payload);
  //     if (response?.data?.success) {
  //       Toasts(
  //         'OTP Sent!',
  //         response.data.message || 'Check your email for the OTP.',
  //         'info',
  //         5000,
  //       );
  //       navigation.navigate('Otp', {email: email});
  //     } else {
  //       console.log('------>', response?.error?.data?.message);
  //       Toasts(
  //         'Error',
  //         response?.error?.data?.message ||
  //           'Something went wrong, please try again.',
  //         'error',
  //         5000,
  //       );
  //     }
  //   } catch (error) {
  //     // Handle various error scenarios

  //     if (error?.response) {
  //       // Server-side error (e.g. 400, 500 status codes)
  //       if (error.response.status === 400) {
  //         Toasts('Error', 'Email does not exist or invalid.', 'error', 5000);
  //       } else if (error.response.status === 500) {
  //         Toasts(
  //           'Error',
  //           'Server error, please try again later.',
  //           'error',
  //           5000,
  //         );
  //       } else {
  //         Toasts(
  //           'Error',
  //           error.response.data?.message || 'An unexpected error occurred.',
  //           'error',
  //           5000,
  //         );
  //       }
  //     } else if (error?.request) {
  //       // Network error (e.g. no response from server)
  //       Toasts(
  //         'Error',
  //         'Network error, please check your connection and try again.',
  //         'error',
  //         5000,
  //       );
  //     } else {
  //       // Generic error (for unexpected cases)
  //       Toasts(
  //         'Error',
  //         'An unexpected error occurred. Please try again.',
  //         'error',
  //         5000,
  //       );
  //     }

  //     console.error('Error in CodeSender:', error);
  //   }
  // };

  return (
    <WrapperContainer>
      <MyHeader
        onPressleft={() => {
          navigation.goBack();
        }}
        style={styles.header}
        leftView={
          <Entypo name="chevron-small-left" size={40} color={Colors.black} />
        }
      />
      <ScrollView>
        <View style={styles.cont_01}>
          <View style={styles.recover}>
            <MyText
              color={Colors.black}
              fontWeight={'bold'}
              fontSize={responsiveFontSize(3.5)}
              textStyle={styles.HelloAgain}
              text={'Recovery Passwrod'}
            />
            <MyText
              fontSize={responsiveFontSize(2)}
              textStyle={{...styles.slogan, width: responsiveWidth(70)}}
              text={
                'Please Enter Your Email Address To Recieve a Verification Code'
              }
            />
          </View>
          <View style={styles.cont_01_01}>
            <MyTextInput
              value={email}
              onChangeText={text => {
                setEmail(text);
              }}
              autoCapitalize="none"
              placeholder={'Enter e-mail or password'}
              feildName={'Email Address'}
              textstyle={{fontSize: responsiveFontSize(1.2)}}
            />

            <View>
              <MyButton
                onPress={() => {
                  CodeSender();
                }}
                fontWeight={'bold'}
                color={Colors.white}
                style={styles.btn}
                textstyle={{fontWeight: 'bold'}}
                text={'Send Code'}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </WrapperContainer>
  );
};

export default RecoveryPassword;

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
});
