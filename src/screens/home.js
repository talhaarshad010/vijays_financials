import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import WrapperContainer from '../components/WrapperContainer';
import MyHeader from '../components/Header';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import MyButton from '../components/CustomButton';
import Colors from '../Styles/Colors';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {useGetCompaniesMutation} from '../store/API/userAuth';
import MyText from '../components/TextComponent';
import Logout from 'react-native-vector-icons/SimpleLineIcons';
import {logout} from '../store/Reducers/AuthSlice';

const Home = () => {
  const navigation = useNavigation();
  const [isCompanies, setCompanies] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();
  const [GETCOMPANIES, {isLoading}] = useGetCompaniesMutation();

  const fetchComapnies = async () => {
    try {
      const res = await GETCOMPANIES();
      if (res?.data) {
        setCompanies(res?.data?.companies);
      }
      console.log('reasponce in getcompanies:', res);
    } catch (error) {
      console.log('errro in getting companies:', error);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    try {
      const res = await GETCOMPANIES();
      if (res?.data) {
        setCompanies(res?.data?.companies);
      }
    } catch (error) {
      console.log('Error refreshing companies:', error);
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchComapnies();
  }, []);

  const Companies = ({item}) => {
    return (
      <TouchableOpacity activeOpacity={0.9} style={styles.companyPlate}>
        <View style={styles.companyNameContainer}>
          <MyText
            fontSize={responsiveFontSize(1.7)}
            fontWeight={'bold'}
            color={Colors.black}
            text={'Company Name:'}
          />
          <MyText
            fontSize={responsiveFontSize(1.7)}
            color={Colors.black}
            text={item.companyName}
          />
        </View>
        <View style={styles.addressLine}>
          <View style={styles.subAddressLine}>
            <MyText
              fontSize={responsiveFontSize(1.7)}
              fontWeight={'bold'}
              color={Colors.black}
              text={'Country:'}
            />
            <MyText
              fontSize={responsiveFontSize(1.7)}
              color={Colors.black}
              text={item.country}
            />
          </View>
          <MyText
            fontSize={responsiveFontSize(1.7)}
            fontWeight={'bold'}
            color={Colors.black}
            text={'|'}
          />
          <View style={styles.subAddressLine}>
            <MyText
              fontSize={responsiveFontSize(1.7)}
              fontWeight={'bold'}
              color={Colors.black}
              text={'Province:'}
            />
            <MyText
              fontSize={responsiveFontSize(1.7)}
              color={Colors.black}
              text={item.country}
            />
          </View>
          <MyText text={'|'} />
          <View style={styles.subAddressLine}>
            <MyText
              fontSize={responsiveFontSize(1.7)}
              fontWeight={'bold'}
              color={Colors.black}
              text={'City:'}
            />
            <MyText
              fontSize={responsiveFontSize(1.7)}
              color={Colors.black}
              text={item.country}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const WhenEmpty = () => {
    return (
      <View
        style={{
          flex: 1,
          height: responsiveHeight(70),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {isLoading ? (
          <ActivityIndicator color={Colors.blue} size={responsiveWidth(15)} />
        ) : (
          <MyText text={'No Companies Found!'} />
        )}
      </View>
    );
  };

  return (
    <WrapperContainer>
      <SafeAreaView style={styles.safeArea}>
        <View>
          <MyHeader MarginLeft={responsiveWidth(14)} ScreenName={'Home'} />
        </View>
        <View style={styles.btnContainer}>
          <MyButton
            onPress={() => {
              navigation.navigate('FinanceData');
            }}
            text={'Add Company'}
            fontWeight={'bold'}
            backgroundColor={Colors.blue}
            color={Colors.white}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: responsiveWidth(4),
          }}>
          <MyText
            text={'Companies'}
            fontSize={responsiveFontSize(3)}
            color={Colors.black}
            fontWeight={'bold'}
          />
          <TouchableOpacity
            onPress={() => {
              dispatch(logout());
            }}>
            <Logout name="logout" size={30} color={Colors.black} />
          </TouchableOpacity>
        </View>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={[Colors.blue]}
            />
          }
          contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.content}>
            <FlatList
              style={{marginBottom: responsiveHeight(10)}}
              ListEmptyComponent={<WhenEmpty />}
              data={isCompanies || []}
              renderItem={Companies}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </WrapperContainer>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: responsiveWidth(3),
  },
  btnContainer: {
    marginVertical: responsiveHeight(2),
    position: 'absolute',
    left: responsiveWidth(3),
    right: responsiveWidth(3),
    bottom: responsiveWidth(0),
    zIndex: 10,
  },
  companyPlate: {
    backgroundColor: Colors.white,
    padding: responsiveHeight(3),
    marginVertical: responsiveHeight(1),
    borderRadius: responsiveWidth(3),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    elevation: 0.8,
  },
  companyNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressLine: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subAddressLine: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
