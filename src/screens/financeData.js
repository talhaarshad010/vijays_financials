import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
} from 'react-native';
import WrapperContainer from '../components/WrapperContainer';
import MyHeader from '../components/Header';
import {BackIcon} from '../utils/shortCuts';
import {logo} from '../utils/ImageLinks';
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

const FinanceData = () => {
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [ntnNumber, setNtnNumber] = useState('');
  const [salesTaxNumber, setSalesTaxNumber] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [website, setWebsite] = useState('');
  const [businessType, setBusinessType] = useState('');

  const businessTypes = [
    {label: 'Retail', value: 'retail'},
    {label: 'Wholesale', value: 'wholesale'},
    {label: 'Manufacturing', value: 'manufacturing'},
    {label: 'Service', value: 'service'},
    {label: 'Other', value: 'other'},
  ];

  return (
    <WrapperContainer>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={{flex: 1}}>
            <MyHeader
              rightView={<Image source={logo} style={styles.Logo} />}
              leftView={BackIcon}
              ScreenName={'Add Company'}
            />
            <View style={styles.formContainer}>
              <MyTextInput
                placeholder={'Company Name'}
                feildName={'Company Name'}
                inputtype={'default'}
                textstyle={{fontSize: responsiveFontSize(1.7)}}
                value={companyName}
                onChangeText={text =>
                  setCompanyName(txt => ({
                    ...txt,
                    companyName: text,
                  }))
                }
              />
              <MyText
                color={Colors.black}
                fontWeight={'bold'}
                fontSize={responsiveFontSize(2.2)}
                style={styles.feildName}
                text={'Buisness Type'}
                textStyle={{
                  fontWeight: 'bold',
                  fontSize: responsiveFontSize(2),
                  marginVertical: responsiveHeight(1),
                }}
              />
              <View style={styles.pickerContainer}>
                <RNPickerSelect
                  onValueChange={value => setBusinessType(value)}
                  items={businessTypes}
                  placeholder={{
                    label: 'Select Business Type',
                    value: null,
                    color: 'gray', // Optional: you can change the color here
                  }}
                  style={{
                    ...pickerSelectStyles,
                    placeholder: {
                      fontSize: responsiveFontSize(1.9),
                      color: 'gray', // Optional: change the color if needed
                    },
                  }}
                  value={businessType}
                />
              </View>
              <MyTextInput
                placeholder={'Register Address'}
                feildName={'Register Address'}
                inputtype={'default'}
                textstyle={{fontSize: responsiveFontSize(1.7)}}
                value={companyName}
                onChangeText={text =>
                  setCompanyName(txt => ({
                    ...txt,
                    companyName: text,
                  }))
                }
              />
              <MyTextInput
                placeholder={'Email'}
                feildName={'Email'}
                inputtype={'email-address'}
                textstyle={{fontSize: responsiveFontSize(1.7)}}
                value={email}
                onChangeText={text =>
                  setEmail(txt => ({
                    ...txt,
                    email: text,
                  }))
                }
              />
              <MyTextInput
                placeholder={'Phone Number'}
                feildName={'Phone Number'}
                inputtype={'number-pad'}
                textstyle={{fontSize: responsiveFontSize(1.7)}}
                value={phoneNumber}
                onChangeText={text =>
                  setPhoneNumber(txt => ({
                    ...txt,
                    phoneNumber: text,
                  }))
                }
              />
              <MyTextInput
                placeholder={'NTN Number'}
                feildName={'NTN Number'}
                inputtype={'number-pad'}
                textstyle={{fontSize: responsiveFontSize(1.7)}}
                value={ntnNumber}
                onChangeText={text =>
                  setNtnNumber(txt => ({
                    ...txt,
                    ntnNumber: text,
                  }))
                }
              />
              <MyTextInput
                placeholder={'Sales Tax Number (Optional)'}
                feildName={'Sales Tax Number'}
                inputtype={'number-pad'}
                textstyle={{fontSize: responsiveFontSize(1.7)}}
                value={salesTaxNumber}
                onChangeText={text =>
                  setSalesTaxNumber(txt => ({
                    ...txt,
                    salesTaxNumber: text,
                  }))
                }
              />
              <MyTextInput
                placeholder={'City'}
                feildName={'City'}
                inputtype={'default'}
                textstyle={{fontSize: responsiveFontSize(1.7)}}
                value={city}
                onChangeText={text =>
                  setCity(txt => ({
                    ...txt,
                    city: text,
                  }))
                }
              />
              <MyTextInput
                placeholder={'Country'}
                feildName={'Country'}
                inputtype={'default'}
                textstyle={{fontSize: responsiveFontSize(1.7)}}
                value={country}
                onChangeText={text =>
                  setCountry(txt => ({
                    ...txt,
                    country: text,
                  }))
                }
              />
              <MyTextInput
                placeholder={'Website'}
                feildName={'Website'}
                inputtype={'url'}
                textstyle={{fontSize: responsiveFontSize(1.7)}}
                value={website}
                onChangeText={text =>
                  setWebsite(txt => ({
                    ...txt,
                    website: text,
                  }))
                }
              />
            </View>
            <View style={styles.btnContainer}>
              <MyButton
                text={'Submit'}
                fontWeight={'bold'}
                backgroundColor={Colors.blue}
                color={Colors.white}
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
    marginVertical: responsiveHeight(3),
    paddingHorizontal: responsiveWidth(3),
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
