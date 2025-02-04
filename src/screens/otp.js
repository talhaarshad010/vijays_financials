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
import {useVerifyOtpMutation} from '../store/API/CallingProducts';
const OTP = ({navigation, route}) => {
  const {email} = route.params;
  const [otp, setOtp] = useState('');
  const [Email, setEmail] = useState(email);
  const {Toasts} = ToastMessage();
  const [VerifyOtp] = useVerifyOtpMutation();

  // const CodeVerify = async () => {
  //   try {
  //     let payload = {
  //       userEmail: Email,
  //       otp: otp,
  //     };
  //     const res = await VerifyOtp(payload);
  //     console.log('Received message: ', res.data.message);
  //     if (res.data.message) {
  //       Toasts('INFO', res.data.message, 'info', 4000);
  //       navigation.navigate('ConfirmPassword', {otp: otp, userEmail: Email});
  //     } else {
  //       Toasts('INFO', res.data.message, 'info', 4000);
  //     }
  //   } catch (error) {
  //     console.log('error=====>', error.message);
  //     // Toasts('Error', error.res.data.message, 'error', 4000);
  //   }
  // };

  const CodeVerify = async () => {
    // Check if email or OTP is missing before proceeding
    if (!Email || !otp) {
      Toasts('Error', 'Please provide both email and OTP', 'error', 4000);
      return;
    }

    try {
      let payload = {
        userEmail: Email,
        otp: otp,
      };

      // Call the OTP verification function
      const res = await VerifyOtp(payload);

      if (res?.data?.success) {
        // Success case
        Toasts(
          'INFO',
          res.data.message || 'OTP verified successfully',
          'info',
          4000,
        );
        navigation.navigate('ConfirmPassword', {otp: otp, userEmail: Email});
      } else {
        // Failure case (API response success = false)
        Toasts(
          'Error',
          res?.data?.message || 'Something went wrong during verification',
          'error',
          4000,
        );
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);

      // Handle different types of errors

      if (error?.response) {
        // Server-side error (e.g. 400, 500 status codes)
        if (error.response.status === 400) {
          Toasts(
            'Error',
            error.response.data?.message || 'Invalid OTP or user not found',
            'error',
            4000,
          );
        } else if (error.response.status === 500) {
          Toasts(
            'Error',
            'Server error, please try again later',
            'error',
            4000,
          );
        } else {
          Toasts(
            'Error',
            error.response.data?.message || 'Unexpected error occurred',
            'error',
            4000,
          );
        }
      } else if (error?.request) {
        // Network error (e.g. no response from server)
        Toasts(
          'Error',
          'Network error, please check your connection and try again',
          'error',
          4000,
        );
      } else {
        // Generic error (for unexpected cases)
        Toasts(
          'Error',
          'An unexpected error occurred, please try again',
          'error',
          4000,
        );
      }
    }
  };

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
              text={'Otp Verification'}
            />
            <MyText
              fontSize={responsiveFontSize(2)}
              textStyle={{...styles.slogan, width: responsiveWidth(70)}}
              text={'Please Enter OTP For Changing Password'}
            />
          </View>
          <View style={styles.cont_01_01}>
            <MyTextInput
              onChangeText={text => {
                setOtp(text);
              }}
              value={otp}
              placeholder={'Enter Otp'}
              feildName={'Otp'}
              textstyle={{fontSize: responsiveFontSize(1.2)}}
            />

            <View>
              <MyButton
                onPress={() => {
                  CodeVerify();
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

export default OTP;

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
