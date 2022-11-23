import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { heightToDp, widthToDp } from '../../Utils/Responsive'
import { BBQLogo, Card1, Card2, HomeLogo, HomeLogo1, MYCartLogo1, SplashLogo } from '../../Utils/Image'
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
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>

          <View style={{ flexDirection: 'row', marginEnd: widthToDp('4'), marginTop: heightToDp('4'),justifyContent:'space-between' }}>
            
        <View style={{ marginStart: widthToDp('6')}}>
          <Text style={{ color: '#000', fontSize: widthToDp('6'), fontWeight: 'bold' }}>About</Text>
        </View>
        <View style={{ justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
                <Entypo name='grid' size={33} color={'rgb(252,73,17)'} />
              </TouchableOpacity>
            </View>
        </View>
        <View style={{ flex: 1}}>
          <ScrollView>
            <View style={{ alignItems: 'center' }}>
              <View>
                <TouchableOpacity activeOpacity={0.9}
                  onPress={() => setShow(!show)}
                >
                  <View style={{ flexDirection: 'row', marginTop: heightToDp('2'), width: widthToDp('90'), height: heightToDp('8'), borderRadius: widthToDp('2'), elevation: 1, backgroundColor: '#fff', alignItems: 'center' }}>
                    <View style={{ marginStart: widthToDp('4'), width: widthToDp('75') }}>
                      <Text style={{ color: '#000' }}>About Noor Mahal</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                {show &&
                  <View style={{ height: heightToDp('10'), elevation: 0.5, backgroundColor: '#fff', bottom: heightToDp('1'), borderBottomStartRadius: widthToDp('3'), borderBottomEndRadius: widthToDp('3'), justifyContent: 'center' }}>
                    <Text style={{ color: '#000', fontSize: widthToDp('4'), paddingStart: widthToDp('4') }}>Please write to us on sales@barbequenation{'\n'}.com</Text>
                  </View>
                }
              </View>
              <View>
                <TouchableOpacity onPress={() => setShow1(!show1)}
                  activeOpacity={1}
                >
                  <View style={{ flexDirection: 'row', marginTop: heightToDp('3'), width: widthToDp('90'), height: heightToDp('7'), borderRadius: widthToDp('3'), elevation: 1, backgroundColor: '#fff', alignItems: 'center' }}>
                    <View style={{ marginStart: widthToDp('4'), width: widthToDp('75') }}>
                      <Text style={{ color: '#000' }}>App Version</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                {
                  show1 &&
                  <View style={{ height: heightToDp('10'), elevation: 0.5, backgroundColor: '#fff', bottom: heightToDp('1'), borderBottomStartRadius: widthToDp('3'), borderBottomEndRadius: widthToDp('3'), justifyContent: 'center' }}>
                    <View style={{marginStart:widthToDp('4')}}>
                    <Text style={{color:'#000'}}>Version: 3.61</Text>
                    <Text style={{color:'#000'}}>Build: 284</Text>
                    <Text style={{color:'#000'}}>@2022-NoorMahal.com</Text>
                    </View>
                  </View>
                }
              </View>
              <View>
                <TouchableOpacity onPress={() => setShow2(!show2)}
                  activeOpacity={1}>
                  <View style={{ flexDirection: 'row', marginTop: heightToDp('3'), width: widthToDp('90'), height: heightToDp('7'), borderRadius: widthToDp('3'), elevation: 1, backgroundColor: '#fff', alignItems: 'center' }}>
                    <View style={{ marginStart: widthToDp('4'), width: widthToDp('75') }}>
                      <Text style={{ color: '#000' }}>Loyalty- Smile Coins Club</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                {show2 &&
                  <View style={{ height: heightToDp('10'), elevation: 0.5, backgroundColor: '#fff', bottom: heightToDp('1'), borderBottomStartRadius: widthToDp('3'), borderBottomEndRadius: widthToDp('3'), justifyContent: 'center' }}>
                    <Text style={{ color: '#000', fontSize: widthToDp('4'), paddingStart: widthToDp('4') }}>For corporate Booking write to us{'\n'}at dine@barbequenation.com or call{'\n'}+918069028721</Text>
                  </View>
                }
              </View>
              <View style={{marginBottom:heightToDp('3')}}>
                <TouchableOpacity onPress={() => setShow3(!show3)}
                  activeOpacity={1}
                >
                  <View style={{ flexDirection: 'row', marginTop: heightToDp('3'), width: widthToDp('90'), height: heightToDp('8'), borderRadius: widthToDp('3'), elevation: 3, backgroundColor: '#fff', alignItems: 'center' }}>
                    <View style={{ marginStart: widthToDp('4'), width: widthToDp('75') }}>
                      <Text style={{ color: '#000' }}>Feed the Daily Wager</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                {show3 &&
                  <View style={{ height: heightToDp('10'), elevation: 0.5, backgroundColor: '#fff', bottom: heightToDp('1'), borderBottomStartRadius: widthToDp('3'), borderBottomEndRadius: widthToDp('3'), justifyContent: 'center' }}>
                    <Text style={{ color: '#000', fontSize: widthToDp('4'), paddingStart: widthToDp('4') }}>You can book through our App or Website or{'\n'}Call- 8069028721</Text>
                  </View>
                }
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
      <View style={{ height: heightToDp('0.1')}}>
        <View style={{ bottom: heightToDp('10'),width:widthToDp('25') }}>
          <TouchableOpacity onPress={() => props.navigation.replace('Menu')}>
            <View style={{ height: heightToDp('8.5'), width: widthToDp('17.5'), borderRadius: widthToDp('15'), marginStart: widthToDp('5'), marginBottom: heightToDp('1'), backgroundColor: 'rgb(255,130,50)', alignItems: 'center', justifyContent: 'center' }}>
            <AntDesign name='arrowleft' color={'#fff'} size={25} />
            </View>
          </TouchableOpacity>
        </View>

              </View>
    </>
  )
}