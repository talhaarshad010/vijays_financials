import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../Styles/Colors';
import {Image} from 'react-native';
export const MenuIcon = (
  <MaterialCommunityIcons
    name="microsoft-xbox-controller-menu"
    size={40}
    color={Colors.blue}
  />
);
export const CartIcon = (
  <Feather name="shopping-bag" size={30} color={Colors.blue} />
);
export const BackIcon = (
  <Entypo name="chevron-small-left" size={40} color={Colors.black} />
);
export const searchIcon = (
  <AntDesign name="search1" size={30} color={Colors.black} />
);
