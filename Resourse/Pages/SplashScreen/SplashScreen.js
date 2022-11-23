import { View, Text, SafeAreaView, Image, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import {SplashLogo} from '../../Utils/Image'
import Styles from './Splash_ScreenStyle'
export default function SplashScreen(props) {

useEffect(()=>{
    setTimeout(() => {
        props.navigation.replace('Login')
    }, 2000);
})

  return (
<SafeAreaView style={Styles.container}>
  <StatusBar backgroundColor={'#000'} />
<View style={Styles.LogoView}>
    <Image source={SplashLogo} style={Styles.Logo} />
</View>
</SafeAreaView>
  )
}