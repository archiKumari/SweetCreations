import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from "react-native-vector-icons/Ionicons"

import {Colors} from '../Constants';
import CategoryScreen from '../Screens/CategoryScreen';

const Tab = createBottomTabNavigator();

const BakingNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.primaryDark,
        tabBarInactiveTintColor: Colors.grey,
        tabBarLabelStyle: {fontSize: 12},
        headerShown: false,
      }}>
      <Tab.Screen
        name="Cake"
        component={CategoryScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="cake" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cupcake"
        component={CategoryScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="cupcake" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cookies"
        component={CategoryScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="cookie" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Tarts"
        component={CategoryScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="pie-chart" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BakingNavigator;
