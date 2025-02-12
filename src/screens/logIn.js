import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
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
import ToastMessage from '../Hooks/ToastMessage';
import {checkMinLength, validateEmail} from '../utils/validations';
import {useSignInMutation} from '../store/API/userAuth';
import {logo} from '../utils/ImageLinks';
import {IsLogin, login} from '../store/Reducers/AuthSlice';
const LogIn = ({}) => {
  const dispatch = useDispatch();
  const {Toasts} = ToastMessage();
  const [value, setvalue] = useState({
    Email: '',
    Pass: '',
  });
  const navigation = useNavigation();
  const [Login, {isLoading}] = useSignInMutation();
  const userData = useSelector(state => state?.Auth);
  console.log('ReduxData in login screen', userData);

  //---------------USER LOGIN FUNCTION---------------
  const isUserLogin = async () => {
    try {
      const payload = {
        email: value.Email,
        password: value.Pass,
      };

      if (!validateEmail(value.Email)) {
        return Toasts(
          'Error',
          'Please enter a valid email address',
          'error',
          4000,
        );
      }

      if (checkMinLength(value.Pass, 8, 'Password')) {
        return Toasts(
          'Error',
          'Password must be at least 8 characters long',
          'error',
          4000,
        );
      }

      const res = await Login(payload);
      console.log('Login Data from backend:', res);

      if (res?.data) {
        const userData = {
          token: res?.data?.token,
          email: res?.data?.user?.email,
          mode: res?.data?.user?.mode || '',
          name: res?.data?.user?.name,
          companies: res?.data?.user?.companies,
        };
        dispatch(login(userData));
        Toasts('Logged In', res.data?.message, 'success', 4000);
        if (!userData.mode) {
          navigation.replace('Modes');
        } else {
          navigation.replace('Home');
        }
      } else if (res?.error) {
        Toasts('Error', res.error?.data?.message, 'error', 4000);
      }
    } catch (error) {
      console.log('Error in signIn:', error);
    }
  };

  return (
    <WrapperContainer>
      <SafeAreaView>
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
            <View style={styles.cont_01_01}>
              <View>
                <MyTextInput
                  placeholder={'Enter e-mail'}
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
                <MyButton
                  isLoading={isLoading}
                  color={Colors.white}
                  fontWeight={'bold'}
                  style={styles.btn}
                  textstyle={{fontWeight: 'bold'}}
                  text={'Sign In'}
                  onPress={isUserLogin}
                />
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
  },
  Logo: {
    height: responsiveHeight(25),
    width: responsiveWidth(100),
    resizeMode: 'cover',
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
    marginVertical: responsiveHeight(3),
  },
  cont_02: {
    flexDirection: 'row',
    bottom: 0,
    alignSelf: 'center',
    marginTop: responsiveHeight(17),
    justifyContent: 'center',
    alignItems: 'center',
  },

  btn: {
    marginTop: responsiveHeight(4),
  },
});
