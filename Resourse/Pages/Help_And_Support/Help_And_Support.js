import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { heightToDp, widthToDp } from '../../Utils/Responsive'
import { BBQLogo, Card1, Card2, HomeLogo, HomeLogo1, MYCartLogo1, SplashLogo } from '../../Utils/Image'
export default function HelpSupport(props) {
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
        <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginTop:heightToDp('4')}}>
              <View style={{ marginStart: widthToDp('6'), marginTop: heightToDp('1') }}>
          <Text style={{ color: '#000', fontSize: widthToDp('5'), fontWeight: 'bold' }}>Help & Support</Text>
        </View>
        <View style={{marginEnd:widthToDp('6')}}>
        <TouchableOpacity onPress={()=>props.navigation.openDrawer()} >
                            <Entypo name='grid' size={33} color={'rgb(252,73,17)'} />
                        </TouchableOpacity>
        </View>
        </View>

        {/* <View style={{ height: heightToDp('14') }}>
          <ScrollView>
            <View style={{ flexDirection: 'row', marginTop: heightToDp('4') }}>
              <TouchableOpacity>
                             <View style={{ borderWidth: 1, width: widthToDp('60'), height: heightToDp('5'), marginStart: widthToDp('5'), borderRadius: widthToDp('15'), justifyContent: 'center', alignItems: 'center', borderColor: 'rgb(252,73,17)' }}>
                <Text style={{ color: 'rgb(252,73,17)', fontSize: widthToDp('4.3') }}>App Not Working Properly</Text>
              </View> 
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
                          <View style={{ borderWidth: 1, width: widthToDp('60'), marginStart: widthToDp('4'), marginTop: heightToDp('2'), height: heightToDp('5'), borderRadius: widthToDp('15'), justifyContent: 'center', alignItems: 'center', borderColor: 'rgb(252,73,17)' }}>
              <Text style={{ color: 'rgb(252,73,17)', fontSize: widthToDp('4.3') }}>Enabled to Upload Picture</Text>
            </View>
            </TouchableOpacity>
             <TouchableOpacity>
                          <View style={{ borderWidth: 1, width: widthToDp('45'), marginStart: widthToDp('4'), marginTop: heightToDp('2'), height: heightToDp('5'), borderRadius: widthToDp('15'), justifyContent: 'center', alignItems: 'center', borderColor: 'rgb(252,73,17)' }}>
              <Text style={{ color: 'rgb(252,73,17)', fontSize: widthToDp('4.3') }}>Crash Report</Text>
            </View>
             </TouchableOpacity>
<TouchableOpacity>
              <View style={{ borderWidth: 1, width: widthToDp('60'), marginStart: widthToDp('4'), marginTop: heightToDp('2'), height: heightToDp('5'), borderRadius: widthToDp('15'), justifyContent: 'center', alignItems: 'center', borderColor: 'rgb(252,73,17)' }}>
              <Text style={{ color: 'rgb(252,73,17)', fontSize: widthToDp('4.3') }}>Change Terms & Conditions</Text>
            </View>
</TouchableOpacity>

            <View style={{ flexDirection: 'row' }}>
             <TouchableOpacity>
                            <View style={{ borderWidth: 1, width: widthToDp('50'), marginStart: widthToDp('4'), marginTop: heightToDp('2'), height: heightToDp('5'), borderRadius: widthToDp('15'), justifyContent: 'center', alignItems: 'center', borderColor: 'rgb(252,73,17)' }}>
                <Text style={{ color: 'rgb(252,73,17)', fontSize: widthToDp('4.3') }}>Reservation Problem</Text>
              </View>
             </TouchableOpacity>

<TouchableOpacity>
                <View style={{ borderWidth: 1, width: widthToDp('30'), marginStart: widthToDp('2'), marginTop: heightToDp('2'), height: heightToDp('5'), borderRadius: widthToDp('15'), justifyContent: 'center', alignItems: 'center', borderColor: 'rgb(252,73,17)' }}>
                <Text style={{ color: 'rgb(252,73,17)', fontSize: widthToDp('4.3') }}>Others</Text>
              </View>
</TouchableOpacity>

            </View>

          </ScrollView>
        </View> */}
        <View style={{alignItems:'center'}}>
          <View style={{marginTop:heightToDp('5'),width:widthToDp('90'),height:heightToDp('12'),borderRadius:widthToDp('5'),flexDirection:'row',justifyContent:'space-between',elevation:5,backgroundColor:'#fff'}}>
            <View style={{marginStart:widthToDp('8'),marginTop:heightToDp('1')}}>
              <View>
                <Text style={{color:'#000',fontSize:widthToDp('5')}}>Call us</Text>
              </View>
              <View>
                <Text style={{color:'#000',fontSize:widthToDp('4.3')}}>Talk to nice,friendly human{'\n'}+19096786650</Text>
              </View>
            </View>
            <View style={{justifyContent:'center',marginEnd:widthToDp('5')}}>
             <Ionicons name='call' size={35} color={'#000'} />
            </View>
          </View>
          <View style={{marginTop:heightToDp('5'),width:widthToDp('90'),height:heightToDp('12'),borderRadius:widthToDp('5'),flexDirection:'row',justifyContent:'space-between',elevation:5,backgroundColor:'#fff'}}>
            <View style={{marginStart:widthToDp('8'),marginTop:heightToDp('1')}}>
              <View>
                <Text style={{color:'#000',fontSize:widthToDp('5')}}>Text us</Text>
              </View>
              <View>
                <Text style={{color:'#000',fontSize:widthToDp('4.3')}}>Chat with a real person{'\n'}+19096786650</Text>
              </View>
            </View>
            <View style={{justifyContent:'center',marginEnd:widthToDp('5')}}>
             <FontAwesome name='whatsapp' size={35} color={'#000'} />
            </View>
          </View>
          <View style={{marginTop:heightToDp('5'),width:widthToDp('90'),height:heightToDp('12'),borderRadius:widthToDp('5'),flexDirection:'row',justifyContent:'space-between',elevation:5,backgroundColor:'#fff'}}>
            <View style={{marginStart:widthToDp('8'),marginTop:heightToDp('1')}}>
              <View>
                <Text style={{color:'#000',fontSize:widthToDp('5')}}>Email us</Text>
              </View>
              <View>
                <Text style={{color:'#000',fontSize:widthToDp('4.3')}}>We'll get back to you soon{'\n'}gtmedia@gmail.com</Text>
              </View>
            </View>
            <View style={{justifyContent:'center',marginEnd:widthToDp('5')}}>
             <Entypo name='mail' size={35} color={'#000'} />
            </View>
          </View>
        </View>
      </SafeAreaView>
      <View style={{height:heightToDp('0.5')}}>
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