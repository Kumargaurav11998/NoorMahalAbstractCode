import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../../Pages/SplashScreen/SplashScreen';
import Login from '../../Pages/Login/Login';
import MenuList from '../../Pages/MenuList/MenuList';
import MenuContent from '../../Pages/MenuContent/MenuContent';
import Order_History from '../../Pages/Order_History/Order_History';
import Reservation from '../../Pages/Reservation/Reservation';
import Pickup_Order from '../../Pages/Pickup_Order/Pickup_Order';
import Add_Promo from '../../Pages/Add_Promo/Add_Promo';
import ManageSpacialItem from '../../Pages/ManageSpecialItem/ManageSpacialItem';
import EditBanerImage from '../../Pages/EditBanerImage/EditBanerImage';
import ViewOrder from '../../Pages/Order_History/ViewOrder/ViewOrder';
import MyProfile from '../../Pages/MyProfile/MyProfile';
import Help_And_Support from '../../Pages/Help_And_Support/Help_And_Support';
import HelpSupport from '../../Pages/Help_And_Support/Help_And_Support';
import About from '../../Pages/About/About';
import ViewPickup from '../../Pages/Pickup_Order/ViewPickup/ViewPickup';
import AddItem from '../../Pages/AddItem/AddItem';
import EditItem from '../../Pages/EditItem/EditItem';
import Abstract from '../../Pages/About/Abstract';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
export default function MainNavigation() {

const MenuNavigation = ()=>{
    return(
        <Drawer.Navigator drawerContent={props=><MenuContent {...props} />}>
        <Drawer.Screen name="Menu" component={MenuList} options={{headerShown:false}} />
        <Drawer.Screen name="RS" component={Reservation} options={{headerShown:false}} />
        <Drawer.Screen name="Order" component={Order_History} options={{headerShown:false}} />
        <Drawer.Screen name="PickUp" component={Pickup_Order} options={{headerShown:false}} />
        <Drawer.Screen name="Add" component={Add_Promo} options={{headerShown:false}} />
        <Drawer.Screen name="Manage" component={ManageSpacialItem} options={{headerShown:false}} />
        <Drawer.Screen name="Edit" component={EditBanerImage} options={{headerShown:false}} />
        <Drawer.Screen name="Help" component={HelpSupport} options={{headerShown:false}} />
        <Drawer.Screen name="About" component={About} options={{headerShown:false}} />
      </Drawer.Navigator>
    )
}

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Splash_Screen"
         component={SplashScreen}
         options={{headerShown:false}}
         />
        <Stack.Screen 
        name="Login"
         component={Login}
         options={{headerShown:false}}
         />
        <Stack.Screen 
        name="Menu"
         component={MenuNavigation}
         options={{headerShown:false}}
         />
        {/* <Stack.Screen 
        name="RS"
         component={Reservation}
         options={{headerShown:false}}
         /> */}
        <Stack.Screen 
        name="View"
         component={ViewOrder}
         options={{headerShown:false}}
         />
        <Stack.Screen 
        name="My_Profile"
         component={MyProfile}
         options={{headerShown:false}}
         />
        <Stack.Screen 
        name="View_Pickup"
         component={ViewPickup}
         options={{headerShown:false}}
         />
        <Stack.Screen 
        name="Add_Item"
         component={AddItem}
         options={{headerShown:false}}
         />
        <Stack.Screen 
        name="Edit_Item"
         component={EditItem}
         options={{headerShown:false}}
         />
        <Stack.Screen 
        name="Abstract"
         component={Abstract}
         options={{headerShown:false}}
         />
      </Stack.Navigator>
    </NavigationContainer>
  )
}