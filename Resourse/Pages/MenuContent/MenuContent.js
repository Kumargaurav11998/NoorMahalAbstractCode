import { View, Text, SafeAreaView,TouchableOpacity } from 'react-native'
import React from 'react'
import { heightToDp, widthToDp } from '../../Utils/Responsive'
import Styles from './MenuContentStyle'
export default function MenuContent(props) {
  return (
<>
<SafeAreaView style={Styles.container}>
<View style={Styles.MainView}>
<TouchableOpacity onPress={()=>props.navigation.navigate('Menu')} >
  <View>
        <Text style={Styles.Text}>Home</Text>
</View>  
</TouchableOpacity>
<TouchableOpacity onPress={()=>props.navigation.navigate('RS')} >
  <View style={Styles.View}>
        <Text style={Styles.Text}>Reservation </Text>
</View>  
</TouchableOpacity>
{/* <TouchableOpacity onPress={()=>props.navigation.replace('Card')}>
  <View style={{marginTop:heightToDp('3')}}>
        <Text style={{color:'#000',fontSize:widthToDp('5.5')}}>Happiness Card History</Text>
</View>  
</TouchableOpacity> */}
<TouchableOpacity onPress={()=>props.navigation.navigate('Order')} >
  <View style={Styles.View}>
        <Text style={Styles.Text}>Order History</Text>
</View>  
</TouchableOpacity>
{/* <TouchableOpacity onPress={()=>props.navigation.navigate('Address')}>
  <View style={{marginTop:heightToDp('3')}}>
        <Text style={{color:'#000',fontSize:widthToDp('5.5')}}>My Addresses</Text>
</View>  
</TouchableOpacity> */}
<TouchableOpacity onPress={()=>props.navigation.navigate('PickUp')} >
  <View style={Styles.View}>
        <Text style={Styles.Text}>PickUp Orders</Text>
</View>  
</TouchableOpacity>
{/* <TouchableOpacity >
  <View style={{marginTop:heightToDp('3')}}>
        <Text style={{color:'#000',fontSize:widthToDp('5.5')}}>Spacially for Guest</Text>
</View>  
</TouchableOpacity> */}
<TouchableOpacity onPress={()=>props.navigation.navigate('Add')} >
  <View style={Styles.View}>
        <Text style={Styles.Text}>Add Promo</Text>
</View>  
</TouchableOpacity>
<TouchableOpacity onPress={()=>props.navigation.navigate('Edit')} >
  <View style={Styles.View}>
        <Text style={Styles.Text}>Edit Baner Images</Text>
</View>  
</TouchableOpacity>
<TouchableOpacity onPress={()=>props.navigation.navigate('Manage')}>
  <View style={Styles.View}>
        <Text style={Styles.Text}>Manage Special Items</Text>
</View>  
</TouchableOpacity>
{/* <TouchableOpacity  onPress={()=>props.navigation.navigate('My_Profile')}>
  <View style={Styles.View}>
        <Text style={Styles.Text}>Profile</Text>
</View>  
</TouchableOpacity> */}
<TouchableOpacity onPress={()=>props.navigation.navigate('Help')} >
  <View style={Styles.View}>
        <Text style={Styles.Text}>Help & Support</Text>
</View>  
</TouchableOpacity>
<TouchableOpacity onPress={()=>props.navigation.navigate('About')} >
  <View style={Styles.View}>
        <Text style={Styles.Text}>About</Text>
</View>  
</TouchableOpacity>
<TouchableOpacity>
  <View style={Styles.View}>
        <Text style={Styles.Text}>Logout</Text>
</View>  
</TouchableOpacity>

</View>
</SafeAreaView>
<View style={Styles.BottomView}>
  <Text style={Styles.BottomText}>Developed by Abstract Brains</Text>
</View>
</>
  )
}