import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Colors from '../Styles/Colors';
import WrapperContainer from '../components/WrapperContainer';
import MyText from '../components/TextComponent';
import MyTextInput from '../components/TextInputComponent';
import MyButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {userLOGIN} from '../store/Reducers/AuthSlice';
import ToastMessage from '../Hooks/ToastMessage';
import {checkMinLength, validateEmail} from '../utils/validations';
import {useLoginMutation} from '../store/Reducers/CallingProducts';
const LogIn = ({}) => {
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const {Toasts} = ToastMessage();
  const [value, setvalue] = useState({
    Email: 'Test@gmail.com',
    Pass: '123456789',
  });
  const navigation = useNavigation();
  const [Login] = useLoginMutation();
  const dd = useSelector(state => state);
  console.log('Redux', dd);

  //---------------USER LOGIN FUNCTION---------------
  const isUserLogin = async () => {
    try {
      const payload = {
        userEmail: value.Email,
        userPassword: value.Pass,
      };
      if (!validateEmail(value.Email)) {
        return Toasts(
          'Error',
          'Please enter a valid email address',
          'error',
          2000,
        );
      }

      if (checkMinLength(value.Pass, 8, 'Password')) {
        return Toasts(
          'Error',
          'Password must be at least 8 characters long',
          'error',
          2000,
        );
      }
      const res = await Login(payload);
      if (res?.data?.data) {
        Toasts('Loged In', 'User logedIn Successfully', 'success', 4000);
      }
      const {userName, userEmail, isToken} = res.data.data;

      let payload1 = {
        userName: userName,
        userEmail: userEmail,
        isToken: isToken,
      };
      dispatch(userLOGIN(payload1));
    } catch (error) {
      Toasts('Error', data.error, 'error', 4000);
    }
  };

  return (
    <WrapperContainer>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.cont_01}>
            <View>
              <MyText
                fontSize={responsiveFontSize(3.5)}
                fontWeight={'bold'}
                color={Colors.black}
                textStyle={styles.HelloAgain}
                text={'Hello Again!'}
                onPress={() => {
                  navigation.navigate('Mubi');
                }}
              />
              <MyText
                fontSize={responsiveFontSize(2)}
                textStyle={styles.slogan}
                text={'Welcome Back You’ve Been Missed!'}
              />
            </View>
            <View style={styles.cont_01_01}>
              <View>
                <MyTextInput
                  placeholder={'Enter e-mail or password'}
                  feildName={'Email Address'}
                  textstyle={{fontSize: responsiveFontSize(1.5)}}
                  value={value.Email}
                  onChangeText={text =>
                    setvalue(txt => ({
                      ...txt,
                      Email: text,
                    }))
                  }
                />
                <MyTextInput
                  placeholder={'Password'}
                  feildName={'Password'}
                  RightView={true}
                  textstyle={{fontSize: responsiveFontSize(1.5)}}
                  value={value.Pass}
                  onChangeText={text =>
                    setvalue(txt => ({
                      ...txt,
                      Pass: text,
                    }))
                  }
                />
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('RecoveryPassword');
                  }}
                  style={{
                    alignItems: 'flex-end',
                    marginTop: responsiveHeight(1),
                  }}>
                  <MyText
                    fontSize={responsiveFontSize(1.7)}
                    text={'Recovery Password'}
                  />
                </TouchableOpacity>
              </View>

              <View>
                {isLoading ? (
                  <View>
                    <ActivityIndicator size={'large'} color={Colors.blue} />
                  </View>
                ) : (
                  <MyButton
                    color={Colors.white}
                    fontWeight={'bold'}
                    onPress={() => {
                      isUserLogin();
                    }}
                    style={styles.btn}
                    text={'Sign In'}
                  />
                )}
              </View>
            </View>
            <View style={styles.cont_02}>
              <MyText text={'Already Have An Account?'} />
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('SignUp');
                }}>
                <MyText
                  fontWeight={'bold'}
                  color={Colors.black}
                  fontSize={responsiveFontSize(2)}
                  text={'SignUp For Free'}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </WrapperContainer>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  header: {marginTop: responsiveHeight(2)},
  cont_01: {
    flex: 1,
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
    marginHorizontal: responsiveWidth(10),
    marginVertical: responsiveHeight(7),
  },
  cont_02: {
    flexDirection: 'row',
    bottom: 0,
    alignSelf: 'center',
    marginTop: responsiveHeight(19),
  },

  btn: {
    marginTop: responsiveHeight(4),
  },
});
