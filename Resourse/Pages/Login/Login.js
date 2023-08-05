import { View, Text, SafeAreaView, Image, TouchableOpacity, TextInput, ToastAndroid, ScrollView, StatusBar, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { SplashLogo } from '../../Utils/Image'
import { heightToDp, widthToDp } from '../../Utils/Responsive'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import {LOAction} from '../../Action/LoginAction'
import {useDispatch} from 'react-redux'
import Styles from './LoginStyle'
import Spinner from 'react-native-loading-spinner-overlay';
import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator,
  } from 'react-native-indicators';
export default function Login(props) {
    
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');
const [isSecureText,setIsSecureText] = useState(true);
const [loader,setloader] = useState(false)

const dispatch = useDispatch();
const Login = ()=>{
    if(!email.trim()){
        ToastAndroid.show('Please Enter Your Email or Username',ToastAndroid.SHORT);
    }
    else if(!password.trim()){
        ToastAndroid.show('Enter Your Password',ToastAndroid.SHORT);
    }
    else{
        setloader(true)
        var Data = new FormData();
        Data.append('email',email);
        Data.append('password',password);
        dispatch(LOAction.LoginAction(Data)).then( async data=>{
            setloader(false)
            if(data.success){

                props.navigation.navigate('Menu');
            }
            else{
                ToastAndroid.show('Invalid Email or Password',ToastAndroid.SHORT);
            }
        })
    }
}
  return (
<SafeAreaView style={Styles.container}>
<StatusBar backgroundColor={'#fff'} 
barStyle={'dark-content'}
/>
<ScrollView showsVerticalScrollIndicator={false}>
    <View style={Styles.MainView}>
<View style={Styles.LogoView}>
    <Image source={SplashLogo} style={Styles.Logo} />
</View>
<View style={Styles.TextView}>
    <Text style={Styles.Text}>Welcome Back</Text>
</View>

<View>
    <View style={Styles.TextInputView}>
       <View style={Styles.TextInput1}>
        <TextInput placeholder='Email or Username' 
        placeholderTextColor={'#000'}
        value={email}
        onChangeText={e=>setEmail(e)}
        style={Styles.TextInput}
        />
       </View>
    </View>
    <View style={Styles.TextInputView}>
       <View style={Styles.TextInput2}>
        <TextInput placeholder='Password' 
        placeholderTextColor={'#000'}
        value={password}
        onChangeText={e=>setPassword(e)}
        secureTextEntry={isSecureText}
        style={Styles.TextInput}
        />
       </View>
       <View style={Styles.IconView}>
        <TouchableOpacity onPress={()=>setIsSecureText(e=>!e)}>
            {isSecureText?<Feather name='eye-off' size={20} color={'#000'} style={Styles.IconText} />
        :<Feather name='eye' size={20} color={'#000'} style={Styles.IconText} />    
        }
        </TouchableOpacity>
       </View>
    </View>
</View>
<View style={Styles.ForgetView}>
    <Text style={Styles.ForgetText}>Forgot Password?</Text>
</View>
<TouchableOpacity onPress={()=>Login()}>
  <View style={Styles.LoginView}>
 <Text style={Styles.LoginText}>Log In</Text>
</View>  
</TouchableOpacity>    
</View>
</ScrollView>
{
    loader&&
     <Spinner
     visible={true}
     textContent={'Loading...'}
     textStyle={{}}
     customIndicator={
        <UIActivityIndicator
          style={{}}
          color={{}}
        />
      }
   />
}
</SafeAreaView>

  )
}