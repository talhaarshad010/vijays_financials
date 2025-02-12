import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
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
import {useSignUpMutation} from '../store/API/userAuth';
import {checkMinLength, validateEmail} from '../utils/validations';
import {useNavigation} from '@react-navigation/native';
const SignUp = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [Name, setName] = useState('');
  const {Toasts} = ToastMessage();
  const [Signup, {isLoading}] = useSignUpMutation();
  const navigation = useNavigation();

  //--------------------- using RTK QUERY function---------------------
  const isUserSignup = async () => {
    try {
      if (!email || !password || !Name) {
        return Toasts('Error', 'Please fill all fields', 'error', 2000);
      }

      if (!validateEmail(email)) {
        return Toasts(
          'Error',
          'Please enter a valid email address',
          'error',
          2000,
        );
      }

      if (checkMinLength(password, 8, 'Password')) {
        return Toasts(
          'Error',
          'Password must be at least 8 characters long',
          'error',
          2000,
        );
      }

      const payload = {
        name: Name,
        email: email,
        password: password,
      };
      const res = await Signup(payload);
      console.log('signUp', res);
      setemail('');
      setpassword('');
      setName('');
      if (res.error) {
        Toasts('Info', res?.error?.data?.message, 'info', 2000);
      } else {
        Toasts('Info', res?.data?.message, 'info', 2000);
        navigation.navigate('Login');
      }
    } catch (error) {
      console.log('Error', error);
    }
  };

  return (
    <WrapperContainer>
      {/* <View>
        <MyHeader
          onPressleft={() => {
            navigation.goBack();
          }}
          style={{marginTop: responsiveHeight(2)}}
          leftView={
            <Entypo name="chevron-small-left" size={40} color={Colors.black} />
          }
        />
      </View> */}
      <ScrollView>
        <View style={styles.cont_01}>
          <View>
            <MyText
              color={Colors.black}
              fontWeight={'bold'}
              fontSize={responsiveFontSize(3.5)}
              textStyle={styles.HelloAgain}
              text={'Create Account'}
            />
            <MyText
              fontSize={responsiveFontSize(2)}
              textStyle={styles.slogan}
              text={'Let’s Create Account Together'}
            />
          </View>
          <View style={styles.cont_01_01}>
            <View>
              <MyTextInput
                onChangeText={setName}
                value={Name}
                placeholder={'Enter Name'}
                feildName={'Your Name'}
                textstyle={{fontSize: responsiveFontSize(1.5)}}
              />
              <MyTextInput
                onChangeText={setemail}
                value={email}
                placeholder={'Enter e-mail'}
                feildName={'Email Address'}
                textstyle={{fontSize: responsiveFontSize(1.5)}}
              />
              <MyTextInput
                onChangeText={setpassword}
                value={password}
                placeholder={'Password'}
                feildName={'Password'}
                RightView={true}
                textstyle={{fontSize: responsiveFontSize(1.5)}}
              />
            </View>

            <View>
              <MyButton
                isLoading={isLoading}
                color={Colors.white}
                fontWeight={'bold'}
                style={styles.btn}
                textstyle={{fontWeight: 'bold'}}
                text={'Sign Up'}
                onPress={isUserSignup}
              />
            </View>
          </View>

          <View style={styles.cont_02}>
            <MyText
              textStyle={{color: 'gray'}}
              text={'Already Have An Account?'}
            />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <MyText
                fontWeight={'bold'}
                color={Colors.black}
                fontSize={responsiveFontSize(2)}
                text={'Sign In'}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </WrapperContainer>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  cont_01: {
    flex: 1,
    justifyContent: 'space-between',
    marginVertical: responsiveHeight(4),
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
    flex: 1,
    marginHorizontal: responsiveWidth(10),
    justifyContent: 'space-around',
    marginVertical: responsiveHeight(7),
  },
  cont_02: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: responsiveHeight(10),
  },
  btn: {
    marginTop: responsiveHeight(4),
  },
});
