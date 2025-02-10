import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, ScrollView} from 'react-native';
import WrapperContainer from '../components/WrapperContainer';
import MyHeader from '../components/Header';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import RNPickerSelect from 'react-native-picker-select';
import MyTextInput from '../components/TextInputComponent';
import Colors from '../Styles/Colors';
import MyText from '../components/TextComponent';
import MyButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useCreateCompanyMutation} from '../store/API/userAuth';
import ToastMessage from '../Hooks/ToastMessage';

const FinanceData = () => {
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [ntnNumber, setNtnNumber] = useState('');
  const [salesTaxNumber, setSalesTaxNumber] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [province, setProvince] = useState('');
  const [website, setWebsite] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [registerAddress, setRegisterAddress] = useState('');

  const navigation = useNavigation();

  const [CREATE_COMPANY, {isLoading}] = useCreateCompanyMutation();

  const {Toasts} = ToastMessage();

  const businessTypes = [
    {label: 'Retail', value: 'retail'},
    {label: 'Wholesale', value: 'wholesale'},
    {label: 'Manufacturing', value: 'manufacturing'},
    {label: 'Service', value: 'service'},
    {label: 'Other', value: 'other'},
  ];

  const handleSubmit = async () => {
    try {
      let payload = {
        companyName: companyName,
        businessType: businessType,
        registerAddress: registerAddress,
        email: email,
        phoneNumber: phoneNumber,
        NtnNumber: ntnNumber,
        salesTaxNumber: salesTaxNumber,
        country: country,
        province: province,
        city: city,
      };
      const res = await CREATE_COMPANY(payload);
      console.log('responce in create company:', res);
      if (res?.data) {
        Toasts('Companyy Added!', res.data?.message, 'success', 4000);
        navigation.replace('Home');
        (companyName = null),
          (businessType = null),
          (registerAddress = null),
          (email = null),
          (phoneNumber = null),
          (ntnNumber = null),
          (salesTaxNumber = null),
          (country = null),
          (province = null),
          (city = null);
      }
      if (res?.error) {
        Toasts(
          'Invalid Information!',
          res?.error?.data?.message,
          'error',
          4000,
        );
      }
    } catch (error) {
      console.log('error in create comapny:', error);
    }
  };

  return (
    <WrapperContainer>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.btnContainer}>
          <MyButton
            isLoading={isLoading}
            onPress={() => {
              handleSubmit();
            }}
            text={'Submit'}
            fontWeight={'bold'}
            backgroundColor={Colors.blue}
            color={Colors.white}
          />
        </View>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={{flex: 1, marginBottom: responsiveHeight(13)}}>
            <View>
              <MyHeader
                onPressleft={() => {
                  navigation.goBack();
                }}
                showLeftIcon={true}
                MarginLeft={responsiveWidth(5)}
                ScreenName={'Add Company'}
              />
            </View>
            <View style={styles.formContainer}>
              <MyTextInput
                placeholder={'Company Name'}
                feildName={'Company Name'}
                inputtype={'default'}
                textstyle={{fontSize: responsiveFontSize(1.7)}}
                value={companyName}
                onChangeText={text => {
                  setCompanyName(text);
                }}
              />
              <MyText
                color={Colors.black}
                fontWeight={'bold'}
                fontSize={responsiveFontSize(2.2)}
                style={styles.feildName}
                text={'Business Type'}
                textStyle={{
                  fontWeight: 'bold',
                  fontSize: responsiveFontSize(2),
                  marginVertical: responsiveHeight(1),
                }}
              />
              <View style={styles.pickerContainer}>
                <RNPickerSelect
                  onValueChange={setBusinessType}
                  items={businessTypes}
                  placeholder={{
                    label: 'Select Business Type (Optional)',
                    value: null,
                    color: 'gray',
                  }}
                  style={{
                    ...pickerSelectStyles,
                    placeholder: {
                      fontSize: responsiveFontSize(1.9),
                      color: 'gray',
                    },
                  }}
                  value={businessType}
                />
              </View>
              <MyTextInput
                placeholder={'Register Address (Optional)'}
                feildName={'Register Address'}
                inputtype={'default'}
                textstyle={{fontSize: responsiveFontSize(1.7)}}
                value={registerAddress}
                onChangeText={text => {
                  setRegisterAddress(text);
                }}
              />
              <MyTextInput
                placeholder={'Email'}
                feildName={'Email'}
                inputtype={'email-address'}
                textstyle={{fontSize: responsiveFontSize(1.7)}}
                value={email}
                onChangeText={text => {
                  setEmail(text);
                }}
              />
              <MyTextInput
                placeholder={'Phone Number (Cell ot Ptcl)'}
                feildName={'Phone Number'}
                inputtype={'number-pad'}
                textstyle={{fontSize: responsiveFontSize(1.7)}}
                value={phoneNumber}
                onChangeText={text => {
                  setPhoneNumber(text);
                }}
              />
              <MyTextInput
                placeholder={'NTN Number'}
                feildName={'NTN Number'}
                inputtype={'number-pad'}
                textstyle={{fontSize: responsiveFontSize(1.7)}}
                value={ntnNumber}
                onChangeText={text => {
                  setNtnNumber(text);
                }}
              />
              <MyTextInput
                placeholder={'Sales Tax Number (Optional)'}
                feildName={'Sales Tax Number'}
                inputtype={'number-pad'}
                textstyle={{fontSize: responsiveFontSize(1.7)}}
                value={salesTaxNumber}
                onChangeText={text => {
                  setSalesTaxNumber(text);
                }}
              />
              <MyTextInput
                placeholder={'Country'}
                feildName={'Country'}
                inputtype={'default'}
                textstyle={{fontSize: responsiveFontSize(1.7)}}
                value={country}
                onChangeText={text => {
                  setCountry(text);
                }}
              />
              <MyTextInput
                placeholder={'Province'}
                feildName={'Province'}
                inputtype={'default'}
                textstyle={{fontSize: responsiveFontSize(1.7)}}
                value={province}
                onChangeText={text => {
                  setProvince(text);
                }}
              />
              <MyTextInput
                placeholder={'City'}
                feildName={'City'}
                inputtype={'default'}
                textstyle={{fontSize: responsiveFontSize(1.7)}}
                value={city}
                onChangeText={text => {
                  setCity(text);
                }}
              />
              <MyTextInput
                placeholder={'Website'}
                feildName={'Website'}
                inputtype={'url'}
                textstyle={{fontSize: responsiveFontSize(1.7)}}
                value={website}
                onChangeText={text => {
                  setWebsite(text);
                }}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </WrapperContainer>
  );
};

export default FinanceData;

const styles = StyleSheet.create({
  Logo: {
    height: responsiveHeight(7),
    width: responsiveWidth(10),
    resizeMode: 'cover',
  },
  formContainer: {
    paddingHorizontal: responsiveWidth(3),
  },
  feildName: {
    color: Colors.black,
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    marginVertical: responsiveHeight(1.5),
  },
  pickerContainer: {
    borderRadius: responsiveWidth(10),
    overflow: 'hidden',
    elevation: 2,
    backgroundColor: Colors.whiteinput,
  },
  btnContainer: {
    marginVertical: responsiveHeight(2),
    position: 'absolute',
    left: responsiveWidth(5),
    right: responsiveWidth(5),
    bottom: responsiveWidth(0),
    zIndex: 10,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    height: responsiveHeight(7),
    borderRadius: responsiveWidth(10),
    paddingHorizontal: responsiveWidth(4),
    backgroundColor: Colors.whiteinput,
    color: Colors.black,
    elevation: 2,
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
  },
  inputAndroid: {
    height: responsiveHeight(7),
    borderRadius: responsiveWidth(10),
    paddingHorizontal: responsiveWidth(4),
    backgroundColor: Colors.whiteinput,
    color: Colors.black,
    elevation: 2,
    fontSize: responsiveFontSize(2),
  },
  iconContainer: {
    top: 10,
    right: 12,
  },
});
