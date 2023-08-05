import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { heightToDp, widthToDp } from '../../Utils/Responsive'
import { BBQLogo, Card1, Card2, HomeLogo, HomeLogo1, MYCartLogo1, SplashLogo } from '../../Utils/Image'
import AboutStyles from './AboutStyle'
export default function About(props) {
  const [press, setPress] = useState(0);
  const [show, setShow] = useState(false)
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const [show4, setShow4] = useState(false)
  const [show5, setShow5] = useState(false)
  const [show6, setShow6] = useState(false)
  const [show7, setShow7] = useState(false)
  const [show8, setShow8] = useState(false)
  const [show9, setShow9] = useState(false)
  const [show10, setShow10] = useState(false)
  const [show11, setShow11] = useState(false)
  const [show12, setShow12] = useState(false)

//   const MyCart = () => {
//     props.navigation.navigate('My');
//     setPress(1);
// }
  return (
    <>
      <SafeAreaView style={AboutStyles.container}>

          <View style={AboutStyles.TopView}>
            
        <View style={AboutStyles.AboutView}>
          <Text style={AboutStyles.AboutText}>About</Text>
        </View>
        <View style={AboutStyles.Grid}>
              <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
                <Entypo name='grid' size={33} color={'rgb(252,73,17)'} />
              </TouchableOpacity>
            </View>
        </View>
        <View style={AboutStyles.MainView}>
          <ScrollView>
            <View style={AboutStyles.View}>
              <View>
                <TouchableOpacity activeOpacity={0.9}
                  onPress={() => setShow(!show)}
                >
                  <View style={AboutStyles.AboutBox}>
                    <View style={AboutStyles.BoxView}>
                      <Text style={AboutStyles.BoxText}>About Abstract Brains</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                {show &&
                  <View style={AboutStyles.ShowView}>
                    <Text style={AboutStyles.ShowText1}>Please visit are website</Text>
                    <TouchableOpacity onPress={()=>props.navigation.navigate('Abstract')}>
                    <Text style={AboutStyles.ShowText2}>Abstract Brains</Text>
                    </TouchableOpacity>
                    
                  </View>
                }
              </View>
              <View>
                <TouchableOpacity onPress={() => setShow1(!show1)}
                  activeOpacity={1}
                >
                  <View style={AboutStyles.AboutBox}>
                    <View style={AboutStyles.BoxView}>
                      <Text style={AboutStyles.BoxText}>App Version</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                {
                  show1 &&
                  <View style={AboutStyles.Show1}>
                    <View style={{marginStart:widthToDp('4')}}>
                    <Text style={AboutStyles.BoxText}>Version: 1.0</Text>
                    <Text style={AboutStyles.BoxText}>@reserved by Abstract Brains 2022</Text>
                    </View>
                  </View>
                }
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
      <View style={AboutStyles.BackMainView}>
        <View style={AboutStyles.MainBackView}>
          <TouchableOpacity onPress={() => props.navigation.replace('Menu')}>
            <View style={AboutStyles.BackView}>
            <AntDesign name='arrowleft' color={'#fff'} size={25} />
            </View>
          </TouchableOpacity>
        </View>

              </View>
    </>
  )
}