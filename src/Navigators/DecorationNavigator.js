import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

import { Colors } from "../Constants";
import CategoryScreen from "../Screens/CategoryScreen";


const Tab = createBottomTabNavigator();

const DecorationNavigator = () => {
    return(
    <Tab.Navigator
    screenOptions={{
        "tabBarActiveTintColor": Colors.primaryDark,
        "tabBarInactiveTintColor": Colors.grey,
        "tabBarLabelStyle": { "fontSize": 12  },
        headerShown: false
    }}
    >
      <Tab.Screen
        name="Cake" 
        component={CategoryScreen}
        options={{
          tabBarIcon:({ color, size }) => (
            <MaterialCommunityIcons name="cake" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cupcake"
        component={CategoryScreen}
        options={{
          tabBarIcon:({ color, size }) => (
            <MaterialCommunityIcons name="cupcake" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
    )
}

export default DecorationNavigator;