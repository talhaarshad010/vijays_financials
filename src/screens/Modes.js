import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import WrapperContainer from '../components/WrapperContainer';
import MyText from '../components/TextComponent';
import {logo} from '../utils/ImageLinks';
import Colors from '../Styles/Colors';
import MyButton from '../components/CustomButton';
import {useSetModeMutation} from '../store/API/userAuth';
import ToastMessage from '../Hooks/ToastMessage';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {updateMode} from '../store/Reducers/AuthSlice';

const Modes = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {Toasts} = ToastMessage();

  const reduxMode = useSelector(state => state.Auth.mode);
  console.log('reduxMode in modes screen:', reduxMode);

  const [selectedMode, setSelectedMode] = useState(reduxMode);

  const [SETMODE] = useSetModeMutation();

  useEffect(() => {
    setSelectedMode(reduxMode);
  }, [reduxMode]);

  const handleSaveMode = async () => {
    if (!selectedMode) {
      Toasts('Error', 'Please select a mode', 'error', 2000);
      return;
    }

    try {
      dispatch(updateMode(selectedMode));
      const res = await SETMODE({mode: selectedMode});
      console.log('Mode responce from backend:', res);
      if (res?.data) {
        Toasts('Success', res?.data?.message, 'success', 2000);
        // navigation.replace('FinanceData');
      }
    } catch (error) {
      console.log('Error in mode screen:', error);
    }
  };

  return (
    <WrapperContainer>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.cont_01}>
            <View style={styles.logoContainer}>
              <Image style={styles.Logo} source={logo} />
            </View>

            <MyText
              color={'#000'}
              text={'Select Mode'}
              fontSize={responsiveFontSize(3)}
              fontWeight={'bold'}
              textStyle={{textAlign: 'center'}}
            />

            <View style={{paddingVertical: responsiveHeight(5)}}>
              {/* Normal Mode */}
              <TouchableOpacity
                onPress={() => setSelectedMode('Normal')}
                style={[
                  styles.modeContainer,
                  selectedMode === 'Normal' && styles.selectedMode,
                ]}>
                <View style={styles.radioButton}>
                  {selectedMode === 'Normal' && (
                    <Image
                      source={require('../assets/Images/tick.png')}
                      style={styles.tickIcon}
                    />
                  )}
                </View>
                <MyText
                  text={'Normal Mode'}
                  fontSize={responsiveFontSize(2)}
                  color={'#000'}
                  fontWeight={'bold'}
                />
              </TouchableOpacity>

              {/* Pro Mode */}
              <TouchableOpacity
                onPress={() => setSelectedMode('Pro')}
                style={[
                  styles.modeContainer,
                  selectedMode === 'Pro' && styles.selectedMode,
                ]}>
                <View style={styles.radioButton}>
                  {selectedMode === 'Pro' && (
                    <Image
                      source={require('../assets/Images/tick.png')}
                      style={styles.tickIcon}
                    />
                  )}
                </View>
                <MyText
                  text={'Pro Mode'}
                  fontSize={responsiveFontSize(2)}
                  color={'#000'}
                  fontWeight={'bold'}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{marginHorizontal: responsiveWidth(5)}}>
            <MyButton
              color={Colors.white}
              backgroundColor={Colors.blue}
              text={'Next'}
              fontWeight={'bold'}
              onPress={handleSaveMode} // Save mode & navigate
            />
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
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: responsiveHeight(10),
  },
  Logo: {
    height: responsiveHeight(25),
    width: responsiveWidth(100),
    resizeMode: 'cover',
  },
  modeContainer: {
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
    marginTop: responsiveHeight(2),
  },
  selectedMode: {
    borderColor: Colors.blue,
    borderWidth: 1,
  },
  radioButton: {
    height: responsiveWidth(6),
    width: responsiveWidth(6),
    borderColor: '#000',
    borderWidth: responsiveWidth(0.2),
    borderRadius: responsiveWidth(1),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: responsiveWidth(3),
  },
  tickIcon: {
    height: responsiveWidth(4),
    width: responsiveWidth(4),
    tintColor: '#000',
  },
});
