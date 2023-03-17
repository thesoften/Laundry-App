import { StyleSheet, Text, View,Image ,TouchableOpacity} from 'react-native';
import { NavigationContainer , useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './Screens/Splash';
import OrderList from './Screens/OrderList';
import ConfirmOrder from './Screens/ConfirmOrder';
import OrderDetail from './Screens/OrderDetail';


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Splash" options={{headerShown:false}} component={Splash} />
      <Stack.Screen
       name="Order List"
       component={OrderList} 
       options={{headerShadowVisible: false,}}/>
       <Stack.Screen name="Schedule A Pickup"
        options={{headerShadowVisible: false,}}
        component={ConfirmOrder} />
       <Stack.Screen name="Order Detail"
        options={{headerShadowVisible: false}}  component={OrderDetail} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}